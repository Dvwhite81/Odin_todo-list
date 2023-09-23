const ToDoList = (title, description, dueDate, priority) => {
    let isComplete = false;

    return { title, description, dueDate, priority, isComplete };
}

const toggleComplete = (isComplete) => {
    return !isComplete;
}

export { ToDoList, toggleComplete }
