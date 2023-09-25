import { getAllProjects, getProjectById } from "../project";

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

const buildAllProjects = () => {
    const container = document.getElementById('projects-container');
    const allProjects = getAllProjects();
    allProjects.forEach((project) => {
        container.append(buildProject(project.id));
    });
}

const onlyDisplayOneProject = (id) => {
    console.log('onlyDisplayOneProject id:', id);
    const container = document.getElementById('projects-container');
    container.innerHTML = "";
    container.append(buildProject(id));
}

export { buildAllProjects, buildProject, onlyDisplayOneProject };
