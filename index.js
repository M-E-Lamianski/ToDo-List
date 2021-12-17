'use strict'

// DATA
const todos = [
    {
        id: 1,
        text: 'watch TV',
        isCompleted: false,
        date: new Date().toLocaleDateString()
    },
    {
        id: 2,
        text: 'play games',
        isCompleted: false,
        date: new Date().toLocaleDateString()
    },
    {
        id: 3,
        text: 'learn frontend',
        isCompleted: false,
        date: new Date().toLocaleDateString()
    },
]

// ROOT
const root = document.querySelector('#root')
const header = createHeader()
const todoList = createTodoList(todos)
const todoItem = createTodoItem(todos)

root.append(header, todoList)

// RENDER
function renderTodos(){
    const todoList = createTodoList(todos)
    root.innerHTML = ''
    root.append(header, todoList)
}

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

// TODO-LIST
function createTodoList(todos){
    const list = createElement('div', 'd-flex flex-column gap-1', '')
    todos.forEach(todo => {
        const todoItem = createTodoItem(todo)
        list.append(todoItem)
    })
    
    return list
}

//TODO-ITEM
function createTodoItem(todo){
    const todoItem = createElement('div', 'd-flex align-items-center gap-1 border border-dark border-1 py-2 px-5 rounded-3')
    todoItem.id = todo.id
    const input = createElement('input', '', '')
    input.type = 'checkbox'
    input.checked = todo.isCompleted
    const text = createElement('p', 'flex-grow-1 m-0', todo.text)
    const itemDate = createElement('span', 'm-0 badge bg-secondary', todo.date)
    const btnDelete = createElement('button', 'btn btn-danger', 'delete')

    input.id = 'checkbox'
    btnDelete.id = 'deleteItem'

    todoItem.append(input, text, itemDate, btnDelete)
    return todoItem
}

// UTILS
function createElement(tag, className, text = ''){
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text
    return element
}