import './style.css'
import { todolist } from './todo-list'
import { todoFactory } from './todos'
import formatRelative from 'date-fns/formatRelative'
import addDays from 'date-fns/addDays'

const allbutton = document.querySelector('#all');
allbutton.addEventListener('click', () => {
    const main = document.querySelector('#main');
    console.log(todolist.projectArray.length)
    for (let i = 0; i < todolist.projectArray.length; i++) {
        console.log(todolist.projectArray[i])
        for (let j = 0; j < todolist.projectArray[i].todoArray.length; j++) {
            const main = document.querySelector('#main');
            const titlediv = document.createElement('div')
            const titleh = document.createElement('h2');
            titleh.textContent = todolist.projectArray[i].todoArray[j].title
            titlediv.appendChild(titleh);
            main.appendChild(titlediv);
        }
    }
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'newtodo');
})

const todayButton = document.querySelector('#today');
todayButton.addEventListener('click', () => {

})

const weekButton = document.querySelector('#week');
weekButton.addEventListener('click', () => {

})

const projButton = document.querySelector('#addproj');
projButton.addEventListener('click', () => {
const main = document.querySelector('#main');
})