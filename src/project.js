import { ToDoList } from "./todo-list";

const Project = (id, name, lists = []) => {

    return { id, name, lists };
}

const allProjects = [];
const defaultProject = Project(0, 'default project');
console.log('project.js default project')
allProjects.push(defaultProject);


const test2 = Project(1, 'test2');
allProjects.push(test2);

const getAllProjects = () => {
    return allProjects;
}

const getProjectById = (id) => {
    console.log('getprojectbyid id:', id)
    console.log('getprojectbyid allprojects', allProjects)
    console.log('getprojectbyid find project', allProjects.find(project => project.id === id))
    return allProjects.find(project => project.id === id);
}

const getProjectLists = (id) => {
    console.log('getprojectlists')
    const project = getProjectById(id);
    return project.lists;
}

const addListToProject = (info) => {
    console.log('addlisttoproject')
    const element = document.querySelector('.project-section');
    const id = element.getAttribute('project-id');
    const project = getProjectById(id);
    project.lists.push(list);
}

export { Project, getProjectById, getProjectLists, addListToProject, getAllProjects };
