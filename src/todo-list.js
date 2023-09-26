import { buildModal, setModalActive } from "./html-elements/modal-section";
import { onlyDisplayOneProject } from "./html-elements/project-section";
import { setStorage, getStorage } from "./storage";

const ToDoList = (
  id,
  title,
  description,
  dueDate,
  priority,
  projectId,
  isComplete = false
) => {
  return { id, title, description, dueDate, priority, projectId, isComplete };
};

const createNewList = (info) => {
  const [title, description, dueDate, priority, projectId] = info;
  const allLists = getStorage("allLists");
  const ids = allLists.map((list) => list.id);
  let newListId = 0;
  while (ids.includes(newListId)) {
    newListId++;
  }
  const newList = ToDoList(
    newListId,
    title,
    description,
    dueDate,
    priority,
    projectId,
    false
  );
  setStorage("allLists", newList);
};

const toggleComplete = (isComplete) => {
  return !isComplete;
};

const openListModal = () => {
  buildModal("list");
  setModalActive("list");
};

const getNewListInfo = (e) => {
  e.preventDefault();

  const selectElement = document.querySelector("#project-select");
  const projectId = Number(selectElement.value);
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;
  const dueDate = document.getElementById("duedate-input").value;
  const priorityInputs = document.getElementsByName("priority");
  const priority = Array.from(priorityInputs).find(
    (radio) => radio.checked
  ).value;

  const info = [title, description, dueDate, priority, projectId];

  createNewList(info);
  onlyDisplayOneProject(projectId);

  const popup = document.querySelector(".popUp");
  popup.remove();
};

const getAllLists = () => {
  const storedLists = getStorage("allLists");

  return storedLists;
};

const getListId = (event) => {
  console.log("getlistid event:", event);
  const grandParent = event.target.parentElement.parentElement;
  const listId = grandParent.getAttribute("list-id");
  const info = [listId, grandParent];

  return info;
};

const deleteList = (listId) => {
  let allLists = getStorage("allLists");
  allLists = allLists.filter((list) => Number(list.id) !== Number(listId));
  localStorage.removeItem("allLists");
  allLists.forEach((list) => setStorage("allLists", list));
};

export {
  ToDoList,
  toggleComplete,
  openListModal,
  getNewListInfo,
  getAllLists,
  createNewList,
  getListId,
  deleteList,
};
