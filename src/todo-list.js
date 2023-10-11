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
            projectArray[0][todoArray].push(todo)
        }
        else {
            projectArray.findIndex(function(project) {
                let projIndex = project.title === projectname
                projectArray[projIndex][todoArray].push(todo)
            })
        }
    }
    const viewtodo = (() => {
        let i = 0;
        while (i < projectArray.length) {
            console.log(projectArray[i])
            i++;
        }
    })

    const deletetodo = (() => {

    })

    return {newproject, newtodo, viewtodo}
})();

todolist.newtodo("Read", "read a book", formatRelative(addDays(new Date(), 7), new Date()), "High", false)
todolist.viewtodo()

export {todolist}