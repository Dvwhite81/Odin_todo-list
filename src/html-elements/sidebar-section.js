import { buildElement } from "./build-page";
import { getAllProjects } from "../project";
import { onlyDisplayOneProject } from "./project-section";

const buildSidebar = () => {
  const sidebar = buildElement("div", {id: "sidebar"});

  return sidebar;
};

const buildSideLogo = () => {
  const logo = buildElement("img", {id: "side-logo", src: "/src/images/todo-logo.png"});

  return logo;
};

const buildSideTitle = () => {
  const sideTitle = buildElement("div", {id: "side-title", textContent: "All Projects"});

  return sideTitle;
};

const buildSideList = () => {
  const list = buildElement("ul", {id: "side-list"});

  const allProjects = getAllProjects();
  allProjects.forEach((project) => {
    const li = buildElement("li", {classList: "side-list-item"});
    const a = buildElement("a", {classList: "side-link", textContent: project.name});
    a.addEventListener("click", () => onlyDisplayOneProject(project.id));
    li.append(a);
    list.append(li);
  });

  return list;
};

/*
const addToList = (item) => {
  //
  //
  // Fill in later
  return item;
};
*/

const Sidebar = () => {
  const section = buildSidebar();
  const logo = buildSideLogo();
  const title = buildSideTitle();
  const list = buildSideList();
  section.append(logo, title, list);

  return section;
};

export { Sidebar };
