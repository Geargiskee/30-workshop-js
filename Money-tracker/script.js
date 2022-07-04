 

const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dataTransaction = [
    
]
function autoId(){
    return Math.floor(Math.random()*1000000)
}
function init(){
    list.innerHTML = ''
    transaction.forEach(addDataToList)
    calculateMoney()
}
let transaction = dataTransaction;
function addDataToList(transaction){
    const symbol = transaction.amount < 0 ?'-':'+';
    const status = transaction.amount < 0 ?'minus':'plus'
    const item = document.createElement('li')
    result = formatNumber(Math.abs(transaction.amount))
    item.classList.add(status)
    // item.innerHTML = 'ค่าซ่อมรถ <span> -400 </span> <button class="delete-btn"></button>'
    item.innerHTML = `${transaction.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transaction.id})">x</button>`
    list.appendChild(item)

}
function calculateMoney(){
    const amounts = transaction.map(transaction=>transaction.amount)
    const total = amounts.reduce((result, item)=>(result += item), 0).toFixed(2)
    const income =amounts.filter(item=>item>0).reduce((result, item)=>(result += item), 0).toFixed(2)
    const outcome = (amounts.filter(item=>item<0).reduce((result, item)=>(result += item), 0)*-1).toFixed(2)
    
    balance.innerText = formatNumber(total)
    money_plus.innerText = formatNumber(income)
    money_minus.innerText = formatNumber(outcome)
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function removeData(id){
    transaction = transaction.filter(transaction=>transaction.id !== id)
    init()
}
function addTransaction(e){
    e.preventDefault()
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("เติมข้อมูลด้วย")
    }else{
            const data ={
                id: autoId(),
                text: text.value,
                amount: +amount.value
            }
            transaction.push(data)
            addDataToList(data)
            calculateMoney()
            text.value=''
            amount.value=''
    }
}


form.addEventListener('submit', addTransaction)
init()
