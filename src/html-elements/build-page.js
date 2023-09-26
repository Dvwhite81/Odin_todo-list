import { Sidebar } from "./sidebar-section";
import { Main } from "./main-section";
import { buildAllProjects } from "./project-section";

const buildElement = (type, args) => {
  const element = document.createElement(type);

  for (const key in args) {
    element[key] = args[key];
  }

  return element;
};

const buildPage = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  container.append(Sidebar());
  container.append(Main());

  buildAllProjects();
};

export { buildPage, buildElement };
