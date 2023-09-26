import { getAllLists } from "./todo-list";
import { setStorage, getStorage } from "./storage";
import { buildModal, setModalActive } from "./html-elements/modal-section";
import { onlyDisplayOneProject } from "./html-elements/project-section";
import { addToSidebarList, removeFromSidebarList } from "./html-elements/sidebar-section";
import { deleteList } from "./todo-list";

const Project = (id, name) => {
  return { id, name };
};

const createNewProject = (id, name) => {
  const allLists = getStorage('allProjects');
  const names = allLists.map((project) => project.projectName);

  if (!names.includes(name)) {
    const newProject = Project(id, name);
    setStorage("allProjects", { projectId: id, projectName: name });
  }
};

const defaultProject = createNewProject(0, "default project");

const getAllProjects = () => {
  const storedProjects = getStorage("allProjects");

  return storedProjects;
};

const getProjectById = (id) => {
  const project = getAllProjects().find((project) => project.projectId === id);
  return project;
};

const getProjectLists = (id) => {
  const lists = getAllLists().filter((list) => list.projectId === id);
  return lists;
};

const getNewProjectInfo = (e) => {
  e.preventDefault();

  const allLists = getStorage('allProjects');
  const projectName = document.getElementById("name-input").value;
  const ids = allLists.map((project) => project.projectId);

  let newId = 0;
  while (ids.includes(newId)) {
    newId++;
  }

  createNewProject(newId, projectName);
  addToSidebarList(newId, projectName);
  onlyDisplayOneProject(newId);

  const popup = document.querySelector(".popUp");
  popup.remove();
};

const openProjectModal = () => {
  buildModal("project");
  setModalActive("project");
};

const deleteProject = (event) => {
  const grandParent = event.target.parentElement.parentElement;
  const projectId = event.target.getAttribute("project-id");
  let allProjects = getStorage('allProjects');
  allProjects = allProjects.filter((project) => Number(project.id) !== Number(projectId));

  const projectLists = getProjectLists(Number(projectId));
  projectLists.forEach((list) => deleteList(list.id));

  localStorage.removeItem('allProjects');
  allProjects = allProjects.filter((project) => Number(project.projectId) !== Number(projectId));
  allProjects.forEach((project) => setStorage('allProjects', project));
  grandParent.remove();

  removeFromSidebarList(projectId);
}

export {
  Project,
  getProjectById,
  getProjectLists,
  getAllProjects,
  createNewProject,
  getNewProjectInfo,
  openProjectModal,
  deleteProject
};
