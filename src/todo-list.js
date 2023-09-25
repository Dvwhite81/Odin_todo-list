import { buildModal, setModalActive } from "./html-elements/modal-section";
import { Project, addListToProject, getProjectById, getProjectLists } from "./project";

const ToDoList = (id, title, description, dueDate, priority, isComplete = false, projectId) => {

    return { id, title, description, dueDate, priority, isComplete, projectId };
}

const toggleComplete = (isComplete) => {
    return !isComplete;
}

const openListModal = () => {
    console.log('openlistmodal')
    buildModal('list');
    setModalActive('list');
}

const getNewListInfo = (e) => {
    e.preventDefault();
    console.log('getnewlistinfo')
    const element = document.querySelector('.project-section');
    const projectId = element.getAttribute('project-id');
    console.log('getnewlistinfo projectId: ', projectId)
    const project = getProjectById(projectId);
    console.log('getnewlistinfo project: ', project.name);
    const lists = getProjectLists(projectId)
    console.log('getnewlistinfo lists: ', lists)
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('duedate-input').value;
    const priorityInputs = document.getElementsByName('priority');
    const priority = Array.from(priorityInputs).find((radio) => radio.checked).value;

    const info = [title, description, dueDate, priority, projectId];

    addListToProject(info);
}

export { ToDoList, toggleComplete, openListModal, getNewListInfo }
