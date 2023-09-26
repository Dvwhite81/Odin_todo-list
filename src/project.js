import { getAllLists } from "./todo-list";
import { setStorage, getStorage } from "./storage";
import { buildModal, setModalActive } from "./html-elements/modal-section";
import { onlyDisplayOneProject } from "./html-elements/project-section";
import { addToSidebarList } from "./html-elements/sidebar-section";

const Project = (id, name) => {
  return { id, name };
};

const createNewProject = (id, name) => {
  const newProject = Project(id, name);
  setStorage("allProjects", { projectId: id, projectName: name });
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
  const project = getProjectById(id);
  const lists = getAllLists().filter((list) => list.projectId === id);
  return lists;
};

const getNewProjectInfo = (e) => {
  e.preventDefault();

  const projectId = getAllProjects().length;
  const projectName = document.getElementById("name-input").value;

  createNewProject(projectId, projectName);
  addToSidebarList(projectId, projectName);
  onlyDisplayOneProject(projectId);

  const popup = document.querySelector(".popUp");
  popup.remove();
};

const openProjectModal = () => {
  buildModal("project");
  setModalActive("project");
};

export {
  Project,
  getProjectById,
  getProjectLists,
  getAllProjects,
  createNewProject,
  getNewProjectInfo,
  openProjectModal,
};
