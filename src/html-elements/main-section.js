import { buildElement } from "./build-page";
import { openListModal } from "../todo-list";
import { buildAllProjects } from "./project-section";

const buildMain = () => {
  const main = buildElement("div", {id: "main"});

  return main;
};

const newProjectBtn = () => {
  const btn = buildElement("button", {id: "new-project-btn", textContent: "New Project"});

  return btn;
};

const newListBtn = () => {
  const btn = buildElement("button", {id: "new-list-btn", textContent: "New List"});
  btn.addEventListener('click', openListModal);

  return btn;
};

const buildBtnDiv = () => {
  const div = buildElement("div", {id: "main-btn-div"});

  const btn1 = newProjectBtn();
  const btn2 = newListBtn();
  div.append(btn1, btn2);

  return div;
};

const buildProjectContainer = () => {
  const container = buildElement('div', {id: "projects-container"});

  return container;
}

const Main = () => {
  const section = buildMain();
  const div = buildBtnDiv();
  const container = buildProjectContainer();
  section.append(div, container);

  return section;
};

export { Main };
