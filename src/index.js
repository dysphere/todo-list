import './style.css'
import { todolist } from './todo-list'
import { todoFactory } from './todos'
import formatRelative from 'date-fns/formatRelative'
import addDays from 'date-fns/addDays'
import isWithinInterval from 'date-fns/isWithinInterval'
import isToday from 'date-fns/isToday'
import write from './pencil.svg'
import minus from './delete.svg'


const allbutton = document.querySelector('#all');
allbutton.addEventListener('click', () => {
    const main = document.querySelector('#main');
    main.textContent = ""
    for (let i = 0; i < todolist.projectArray.length; i++) {
        for (let j = 0; j < todolist.projectArray[i].todoArray.length; j++) {
            const tododiv = document.createElement('div');
            tododiv.setAttribute('class', 'todo')
            const titlediv = document.createElement('div');
            const titleh = document.createElement('h2');
            const datediv = document.createElement('div');
            const dateh = document.createElement('p');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            const expand = document.createElement('button');
            expand.textContent = "Details"
            const change = document.createElement('input');
            change.setAttribute('type', 'image')
            change.setAttribute('src', write)
            change.setAttribute('class', 'pic')
            const deletebox = document.createElement('input');
            deletebox.setAttribute('type', 'image')
            deletebox.setAttribute('src', minus)
            deletebox.setAttribute('class', 'pic')


            titleh.textContent = todolist.projectArray[i].todoArray[j].title
            dateh.textContent = todolist.projectArray[i].todoArray[j].dueDate
            titlediv.appendChild(titleh);
            datediv.appendChild(dateh);
            tododiv.appendChild(checkbox);
            tododiv.appendChild(titlediv);
            tododiv.appendChild(expand);
            tododiv.appendChild(datediv);
            tododiv.appendChild(change);
            tododiv.appendChild(deletebox);
            main.appendChild(tododiv);
        }
    }
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'newtodo');
    newButton.textContent = "+"
    main.appendChild(newButton)

    newButton.addEventListener('click', () => {
        const newselect = document.querySelector(".newdo")
        newselect.showModal();
    })
})

const todayButton = document.querySelector('#today');
todayButton.addEventListener('click', () => {
    let today = new Date();
    const main = document.querySelector("#main");
    main.textContent = ""
    for (let i = 0; i < todolist.projectArray.length; i++) {
        for (let j = 0; j < todolist.projectArray[i].todoArray.length; j++) {
            if (isToday(todolist.projectArray[i].dueDate) == true) {

            }
        }
    }
    const newButton = document.createElement('button');
    newButton.setAttribute('class', 'newtodo');
    newButton.textContent = "+"
    main.appendChild(newButton)
})

const weekButton = document.querySelector('#week');
weekButton.addEventListener('click', () => {
    let today = new Date();
    let week = addDays(new Date(), 7);
    for (let i = 0; i < todolist.projectArray.length; i++) {
        for (let j = 0; j < todolist.projectArray[i].todoArray.length; j++) {

        }
    }
})

const projButton = document.querySelector('#addproj');
projButton.addEventListener('click', () => {
const newp = document.querySelector(".newproj");
newp.showModal();
})