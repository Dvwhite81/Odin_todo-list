import { BuildModal, setModalActive } from "./modal-section";

const ToDoList = (id, title, description, dueDate, priority, isComplete = false, projectId) => {

    return { id, title, description, dueDate, priority, isComplete, projectId };
}

const toggleComplete = (isComplete) => {
    return !isComplete;
}

const makeNewList = () => {
    BuildModal('list');
    setModalActive('list');
}

export { ToDoList, toggleComplete, makeNewList }
