const taskInput = document.querySelector('#task')
const form = document.querySelector('form')
const tasksList = document.querySelector('.collection')
const delTasksBtn = document.querySelector('#del-tasks')

form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask)
delTasksBtn.addEventListener('click', deleteAllTasks)

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

// add task
    addTaskToLocalStorage(task);

// value is 0
    taskInput.value = ''
    e.preventDefault()
}

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Do you want to delete this task?'))
            e.target.parentElement.remove()
        task = e.target.parentElement.firstChild.textContent;
        deleteTaskFromLocalStorage(task);
    }
}

function deleteTaskFromLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = []
    }   else {
        tasks = JSON.parse((localStorage.getItem('tasks')))
    }
    tasks.forEach(function (tasksElement, index){
        if (tasksElement === task){
            tasks.splice(index, 1)
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteAllTasks(e){
    tasksList.innerHTML = ''
}

function addTaskToLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = []
    }   else {
        tasks = JSON.parse((localStorage.getItem('tasks')))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}