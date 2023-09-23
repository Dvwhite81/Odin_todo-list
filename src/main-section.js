const buildMain = () => {
    const main = document.createElement('div');
    main.id = 'main';
    main.textContent = 'Test main div';

    return main;
}

const newProjectBtn = () => {
    const btn = document.createElement('button');
    btn.id = 'new-project-btn';
    btn.textContent = 'New Project';

    return btn;
}

const newListBtn = () => {
    const btn = document.createElement('button');
    btn.id = 'new-list-btn';
    btn.textContent = 'New List';

    return btn;
}

export const Main = () => {
    const section = buildMain();
    const pBtn = newProjectBtn();
    const lBtn = newListBtn();
    section.append(pBtn, lBtn);

    return section;
};
