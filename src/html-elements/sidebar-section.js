import { buildElement, buildPage } from "./build-page";
import { getAllProjects } from "../project";
import { onlyDisplayOneProject } from "./project-section";

const buildSidebar = () => {
  const sidebar = buildElement("div", { id: "sidebar" });

  return sidebar;
};

const buildSideLogo = () => {
  const a = buildElement("a", { id: "side-logo-link" });
  const logo = buildElement("img", {
    id: "side-logo",
    src: "/src/images/todo-logo.png",
  });
  logo.addEventListener(
    "mouseover",
    (event) => (event.target.src = "/src/images/todo-logo-hover.png")
  );
  logo.addEventListener(
    "mouseout",
    (event) => (event.target.src = "/src/images/todo-logo.png")
  );

  a.append(logo);
  a.addEventListener("click", buildPage);
  return a;
};

const sideLogoHover = () => {
  const logo = document.getElementById("side-logo");
  logo.src = "/src/images/todo-logo-hover.png";
};

const buildSideTitle = () => {
  const sideTitle = buildElement("div", {
    id: "side-title",
    textContent: "All Projects",
  });

  return sideTitle;
};

const buildSideList = () => {
  const list = buildElement("ul", { id: "side-list" });

  const allProjects = getAllProjects();

  allProjects.forEach((project) => {
    if (project.projectName) {
      const li = buildElement("li", { classList: "side-list-item" });
      li.setAttribute("project-id", project.projectId);

      const a = buildElement("a", {
        classList: "side-link",
        textContent: project.projectName,
      });
      a.addEventListener("click", () =>
        onlyDisplayOneProject(project.projectId)
      );
      li.append(a);
      list.append(li);
    } else {
      return;
    }
  });

  return list;
};

const addToSidebarList = (id, name) => {
  const list = document.getElementById("side-list");
  const li = buildElement("li", { classList: "side-list-item" });
  li.setAttribute("project-id", id);
  const a = buildElement("a", { classList: "side-link", textContent: name });
  a.addEventListener("click", () => onlyDisplayOneProject(id));
  li.append(a);
  list.append(li);
};

const removeFromSidebarList = (id) => {
  const li = document.querySelector(`[project-id="${id}"]`);
  li.remove();
}

const Sidebar = () => {
  const section = buildSidebar();
  const logo = buildSideLogo();
  const title = buildSideTitle();
  const list = buildSideList();
  section.append(logo, title, list);

  return section;
};

export { Sidebar, addToSidebarList, removeFromSidebarList };
