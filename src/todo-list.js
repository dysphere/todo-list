import formatRelative from 'date-fns/formatRelative'
import addDays from 'date-fns/addDays'
import { todoFactory,  projectFactory} from './todos';

const todolist = (() => {
    let projectArray = []
    const unsort = projectFactory("Unsorted", "Where unsorted todos go")
    projectArray.push(unsort)

    const newproject = (title, description) => {
        let project = projectFactory(title, description)
        projectArray.push(project);
    }

    const newtodo = (title, description, dueDate, priority, completion, projectname = "Unsorted") => {
        let todo = todoFactory(title, description, dueDate, priority, completion)
        if (projectname == "Unsorted") {
            projectArray[0].todoArray.push(todo)
        }
        else {
            projectArray.findIndex(function(project) {
                let projIndex = project.title === projectname
                return projIndex;
            })
            projectArray[projectArray.findIndex(project)].todoArray.push(todo)
        }
    }

    const viewproject = (() => {
        let i = 0;
        while (i < projectArray.length) {
            console.log(projectArray[i])
            i++;
        }
    })

    const viewtodo = (() => {
        let i = 0;
        while (i < projectArray.length) {
            let j = 0;
            while (j < projectArray[i].todoArray.length) {
                console.log(projectArray[i].todoArray[j].title)
                console.log(projectArray[i].todoArray[j].dueDate)
                j++;
            }
            i++;
        }
    })

    const expandtodo = ((title) => {
        let i = 0;
        while (i < projectArray.length) {
            let j = 0;
            while (j < projectArray[i].todoArray[j].length) {
                projectArray[i].todoArray.findIndex(function(todo) {
                    let todoIndex = todo.title === title
                    return todoIndex;
                })
                if (projectArray[i].findIndex(todo) != -1) {
                    console.log(projectArray[i].todoArray[projectArray[i].findIndex(todo)])
                }
                j++;
            }
            i++;
        }
    })

    const deletetodo = ((title) => {
        let i = 0;
        while (i < projectArray.length) {
            let j = 0;
            while (j < projectArray[i].todoArray[j].length) {
                projectArray[i].todoArray.findIndex(function(todo) {
                    let todoIndex = todo.title === title
                    return todoIndex;
                })
                if (projectArray[i].todoArray.findIndex(todo) != -1) {
                    
                }
                j++;
            }
            i++;
        }
    })

    return {newproject, newtodo, viewproject, viewtodo, expandtodo, deletetodo}
})();

todolist.newtodo("Read", "read a book", formatRelative(addDays(new Date(), 7), new Date()), "High", false)
todolist.viewtodo()
todolist.viewproject()

export {todolist}