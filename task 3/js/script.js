let menu = document.querySelector('.menu')
let menuItems = document.querySelectorAll('.menu-item')
let title = document.getElementById('title')
let adv = document.querySelector('.adv')
let column = document.querySelectorAll('.column')
let promptForApple = document.querySelector('#prompt')


let li = document.createElement('li')
li.classList.add('menu-item')
li.innerHTML = 'Пятый пункт'
menu.appendChild(li)

// document.body.style.backgroundImage = "url('/img/apple.jpg')"

menu.insertBefore(menuItems[2], menuItems[1])

title.innerHTML = 'Мы продаем только подлинную технику Apple'

adv.remove()

let question = prompt('Как вы относитесь к технике Apple?')
promptForApple.textContent = question