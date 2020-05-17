let btn = document.querySelector('.btn')
let elem = document.querySelector('.box')

function animation () {
    let pos = 0

    let id = setInterval(frame, 10)
    function frame () {
        if(pos == 300) {
            clearInterval(id)
        } else {
            pos++
            elem.style.top = pos + 'px'
            elem.style.left = pos + 'px'
        }
    }
}
btn.addEventListener('click', animation)

let btnBlock = document.querySelector('.btn-block')
let btns = document.getElementsByTagName('button')

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Hello!')
    }
})