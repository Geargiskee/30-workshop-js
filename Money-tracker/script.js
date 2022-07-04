const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dataTransaction = [
    {id:1, text:"ค่าขนม", amount:-400},
    {id:2, text:"ค่าห้อง", amount:-5000},
    {id:3, text:"เงินเดือน", amount:20000}

]

const transaction = dataTransaction;
console.log(transaction)