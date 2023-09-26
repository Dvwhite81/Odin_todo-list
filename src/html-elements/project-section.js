import { getAllProjects, getProjectById, getProjectLists } from "../project";
import { buildElement } from "./build-page";
import { buildList } from "./lists-section";

const buildProject = (id) => {
  const section = buildElement("div", { classList: "project-section" });
  section.setAttribute("project-id", id);

  const project = getProjectById(id);
  const h3 = buildElement("h3", { textContent: project.projectName });
  section.append(h3);

  const lists = getProjectLists(id);

  if (lists) {
    lists.forEach((list) => {
      const listSection = buildList(list);
      section.append(listSection);
    });
  }

  return section;
};

const buildAllProjects = () => {
  const container = document.getElementById("projects-container");
  const allProjects = getAllProjects();
  allProjects.forEach((project) => {
    container.append(buildProject(project.projectId));
  });
};

const onlyDisplayOneProject = (id) => {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";
  container.append(buildProject(id));
};

export { buildAllProjects, buildProject, onlyDisplayOneProject };
