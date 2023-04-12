// const king = document.querySelector('.chess-piece')
const box = document.querySelector('#box')
const close = document.querySelector('.close')



//king.addEventListener('dragstart', dragStart)
//king.addEventListener('drag', drag)

box.addEventListener('dragstart', dragStart)


document.addEventListener('dragover', dragOver)
document.addEventListener('dragenter', dragEnter)
document.addEventListener('dragleave', dragLeave)
document.addEventListener('drop', dragDrop)
document.addEventListener('dragend', dragEnd)


document.addEventListener('contextmenu', openMenu)
close.addEventListener('click', closeMenu)

let beingDragged
let x
let y

function openMenu(e) {
    e.preventDefault()
    x = e.clientX - 100
    y = e.clientY - 100
    box.classList.add('visible')
    box.style.top = y + "px"
    box.style.left = x + "px"
}

function closeMenu(e){
    box.classList.remove('visible')
}




function dragStart(e) {
    beingDragged = e.target
    beingDragged.style.cursor = "dragging"
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e)
{
    e.target.classList.add('highlight')
}

function dragLeave(e) {
    e.target.classList.remove('highlight')
}

function dragDrop(e) {
    e.target.append(beingDragged)
    x = e.clientX - 100
    y = e.clientY - 100
    beingDragged.style.top = y + 'px'
    beingDragged.style.left = x + 'px'
}

function dragEnd(e) {
    e.target.classList.add('target')
}

