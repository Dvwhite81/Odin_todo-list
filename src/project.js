import { allProjects } from "./storage";

const Project = (id, name, lists = []) => {

    return { id, name, lists };
}

const getProjectById = (id) => {
    return allProjects.find(project => project.id === id);
}

const getProjectLists = (id) => {
    const project = getProjectById(id);
    return project.lists;
}

const addListToProject = (list) => {
    const element = document.querySelector('.project-section');
    const id = element.getAttribute('project-id');
    const project = getProjectById(id);
    project.lists.push(list);
}

export { Project, getProjectById, getProjectLists, addListToProject };
