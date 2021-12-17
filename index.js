'use strict'

// ROOT
const root = document.querySelector('#root')
const header = createHeader()

// HEADER
function createHeader(){
    const header = createElement('header', 'd-flex align-items-center gap-2 m-2')
    const input = createElement('input', 'form-control flex-grow-1', '')
    const btnAdd = createElement('button', 'btn btn-primary', 'Add')
    const btnDelete = createElement('button', 'btn btn-danger', 'Delete')

    input.id = 'input'
    btnAdd.id = 'btnAdd'
    btnDelete.id = 'btnDelete'

    header.append(btnDelete, input, btnAdd)
    return header
}

// UTILS
function createElement(tag, className, text = ''){
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    return element
}