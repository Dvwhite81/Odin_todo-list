import { buildElement } from "./build-page";

const buildList = (list) => {
    const section = buildElement('div', {classList: 'list-section'});
    section.setAttribute('list-id', list.id)
    const title = buildElement('h3', {textContent: `Task: ${list.title}`});
    const description = buildElement('p', {textContent: `Details: ${list.description}`});
    const dueDate = buildElement('p', {textContent: `Deadline: ${list.dueDate}`});
    section.append(title, description, dueDate);

    return section;
}

export {
    buildList
}
