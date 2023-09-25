import { ToDoList } from "./todo-list";

const Project = (id, name, lists = []) => {

    return { id, name, lists };
}

const allProjects = [];
const defaultProject = Project(0, 'default project');
allProjects.push(defaultProject);


const test2 = Project(1, 'test2');
allProjects.push(test2);

const getAllProjects = () => {
    return allProjects;
}

const getProjectById = (id) => {
    return allProjects.find(project => project.id === id);
}

const getProjectLists = (id) => {
    const project = getProjectById(id);
    return project.lists;
}

const addListToProject = (info) => {
    console.log('addlisttoproject info:', info)
    const [title, description, dueDate, priority, projectId] = info;
    const project = getProjectById(projectId);
    console.log('project: ', project);
    const projectLists = getProjectLists(projectId);
    console.log('projectLists: ', projectLists);
    const newListId = projectLists.length;
    console.log('length', newListId);
    const newList = ToDoList(newListId, title, description, dueDate, priority, projectId, false);

    projectLists.push(newList);
}

export { Project, getProjectById, getProjectLists, addListToProject, getAllProjects };
