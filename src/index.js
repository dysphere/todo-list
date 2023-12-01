import './style.css'
import { todolist } from './todo-list'
import { todoFactory } from './todos'
import formatRelative from 'date-fns/formatRelative'
import addDays from 'date-fns/addDays'
import isWithinInterval from 'date-fns/isWithinInterval'
import isToday from 'date-fns/isToday'
import write from './pencil.svg'
import minus from './delete.svg'

function lookStorage() {
    let JSONproj = localStorage.getItem('projectArray');
    let JSproj = JSON.parse(JSONproj);
    console.log(JSproj)
    return JSproj;
}

function saveStorage() {

}

const allbutton = document.querySelector('#all');
allbutton.addEventListener('click', () => {
    let JSarray = lookStorage();
    const main = document.querySelector('#main');
    main.textContent = ""
    for (let i = 0; i < JSarray.length; i++) {
        for (let j = 0; j < JSarray[i].todoArray.length; j++) {
            const tododiv = document.createElement('div');
            tododiv.setAttribute('class', 'todo')
            const titlediv = document.createElement('div');
            titlediv.setAttribute('class', 'titlediv')
            const titleh = document.createElement('h2');
            titleh.setAttribute('class', 'titleh')
            const datediv = document.createElement('div');
            datediv.setAttribute('class', 'datediv')
            const dateh = document.createElement('p');
            dateh.setAttribute('class', 'dateh')
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('class', 'todocheck')
            const expand = document.createElement('button');
            expand.textContent = "Details"
            expand.setAttribute('class', 'expandbutton')
            const change = document.createElement('input');
            change.setAttribute('type', 'image')
            change.setAttribute('src', write)
            change.setAttribute('class', 'pic')
            const deletebox = document.createElement('input');
            deletebox.setAttribute('type', 'image')
            deletebox.setAttribute('src', minus)
            deletebox.setAttribute('class', 'pic')


            titleh.textContent = JSarray[i].todoArray[j].title
            dateh.textContent = JSarray[i].todoArray[j].dueDate
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

        const tsubmit = newselect.querySelector("#tosubmit")
        tsubmit.addEventListener('click', (e) => {
            e.preventDefault();
            let ttitle = newselect.querySelector("#title").value;
            let tdesc = newselect.querySelector("#description").value;
            let tdue = newselect.querySelector("#due").value;
            let level = newselect.querySelector("#plevels").value;

            console.log(ttitle, tdesc, tdue, level)
            todolist.newtodo(ttitle, tdesc, tdue, level)
            let JSONarray = JSON.stringify(todolist.projectArray)
            console.log(JSONarray)
            localStorage.setItem('projectArray', JSONarray)
            newselect.close()
            ttitle, tdesc = ""
            level = "none"
            tdue = "MM-DD-YYYY"
        })
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