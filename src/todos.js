import formatRelative from 'date-fns/formatRelative'

const todoFactory = (title, description, dueDate, priority, completion) => {
    const priorityArray = ["Low", "Medium", "High"]
    const changePriority = (n) => {
        priority = priorityArray[n]
    }
    const changeCompletion = () => {
        if (completion === true) {
            completion = false
        }
        else {
            completion = true
        }
    }
    return {title, description, dueDate, priority, completion,
            changePriority, changeCompletion};
}

const projectFactory = (title, description) => {
    let todoArray = []

    return {title, description, todoArray};
}


export {todoFactory, projectFactory}