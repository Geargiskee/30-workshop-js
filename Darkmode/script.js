const switchToggle =  document.querySelector('input[type="checkbox"]');
const toggleIcon  = document.getElementById('toggle-icon')
const nav = document.getElementById('nav')
function switchMode(e){
    if(e.target.checked){
        darkMode();
    }else{
        lightMode();
    }
}


function darkMode(){
    toggleIcon.children[0].textContent= "Darkmode"
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
}
function lightMode(){
    toggleIcon.children[0].textContent= "Lightmode"
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)'

}
switchToggle.addEventListener('change', switchMode)
