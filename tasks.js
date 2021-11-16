const taskInput = document.querySelector('#task')
const form = document.querySelector('form')

form.addEventListener('submit', addTask)

function addTask(e){
    const task = taskInput.value

    const li = document.createElement('li')
    li.className = 'collection-item'
    const text = document.createTextNode(task)
    li.appendChild(text)

    const ul = document.querySelector('.collection')
    ul.appendChild(li)

    taskInput.value = ''
    e.preventDefault()
}