import { buildModal, setModalActive } from "./html-elements/modal-section";
import { Project, addListToProject, getProjectById, getProjectLists } from "./project";
import { onlyDisplayOneProject } from "./html-elements/project-section";

const ToDoList = (id, title, description, dueDate, priority, projectId, isComplete = false) => {

    return { id, title, description, dueDate, priority, projectId, isComplete };
}

const toggleComplete = (isComplete) => {
    return !isComplete;
}

const openListModal = () => {
    buildModal('list');
    setModalActive('list');
}

const getNewListInfo = (e) => {
    e.preventDefault();

    const selectElement = document.querySelector('#project-select');
    const projectId = Number(selectElement.value);
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('duedate-input').value;
    const priorityInputs = document.getElementsByName('priority');
    const priority = Array.from(priorityInputs).find((radio) => radio.checked).value;

    const info = [title, description, dueDate, priority, projectId];

    addListToProject(info);
    onlyDisplayOneProject(projectId);

    const popup = document.querySelector('.popUp');
    popup.remove();
    //
    //
    // Send to project to see new list?
    // Have to fix list display - make a div or card
}

export { ToDoList, toggleComplete, openListModal, getNewListInfo }
