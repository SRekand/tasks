const taskInput = document.querySelector('#task')
const form = document.querySelector('form')
const tasksList = document.querySelector('.collection')

form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask)

function addTask(e){
    const task = taskInput.value

    const li = document.createElement('li')
    li.className = 'collection-item'
    const text = document.createTextNode(task)
    li.appendChild(text)

// create link element
    const link = document.createElement('a')

    link.setAttribute('href', '#')
    link.className = 'secondary-content'

    link.appendChild(document.createTextNode('X'))
    li.appendChild(link)

    console.log(link)

    const ul = document.querySelector('.collection')
    ul.appendChild(li)

// value is 0
    taskInput.value = ''
    e.preventDefault()
}

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Do you want to delete this task?'))
            e.target.parentElement.remove()
    }
}