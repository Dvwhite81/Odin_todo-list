import { defaultProject, allProjects } from "./storage";
import { getProjectById } from "./project";

const buildProject = (id) => {
    const section = document.createElement('div');
    section.classList.add('project-section');
    section.setAttribute('project-id', id);

    const project = getProjectById(id);
    const h3 = document.createElement('h3');
    h3.textContent = project.name;

    const p = document.createElement('p');
    p.textContent = project.lists;

    section.append(h3, p);

    return section;
}

const ProjectSection = () => {
    const main = document.getElementById('main');
    allProjects.forEach((project) => {
        main.append(buildProject(project.id));
    });
}

export { ProjectSection };
