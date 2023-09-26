import { buildModal, setModalActive } from "./html-elements/modal-section";
import { Project, getProjectById, getProjectLists } from "./project";
import { onlyDisplayOneProject } from "./html-elements/project-section";
import { setStorage, getStorage } from "./storage";

const ToDoList = (id, title, description, dueDate, priority, projectId, isComplete = false) => {

    return { id, title, description, dueDate, priority, projectId, isComplete };
}

const createNewList = (info) => {
    console.log('createNewList info:', info)
    const [title, description, dueDate, priority, projectId] = info;
    //const project = getProjectById(projectId);
    //console.log('project: ', project);
    const projectLists = getProjectLists(projectId);
    //console.log('projectLists: ', projectLists);
    let newListId;
    if (projectLists) {
        newListId = projectLists.length;
    } else{
        newListId = 0;
    }
    //console.log('length', newListId);
    const newList = ToDoList(newListId, title, description, dueDate, priority, projectId, false);
    console.log('newList: ', newList);
    setStorage('allLists', newList);
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

    createNewList(info);
    onlyDisplayOneProject(projectId);

    const popup = document.querySelector('.popUp');
    popup.remove();
}

const getAllLists = () => {
    const storedLists = getStorage('allLists');

    return storedLists;
}

export { ToDoList, toggleComplete, openListModal, getNewListInfo, getAllLists, createNewList }
