const buildMain = () => {
  const main = document.createElement("div");
  main.id = "main";

  return main;
};

const newProjectBtn = () => {
  const btn = document.createElement("button");
  btn.id = "new-project-btn";
  btn.textContent = "New Project";

  return btn;
};

const newListBtn = () => {
  const btn = document.createElement("button");
  btn.id = "new-list-btn";
  btn.textContent = "New List";

  return btn;
};

const buildBtnDiv = () => {
  const div = document.createElement("div");
  div.id = "main-btn-div";

  const btn1 = newProjectBtn();
  const btn2 = newListBtn();
  div.append(btn1, btn2);

  return div;
};

const Main = () => {
  const section = buildMain();
  const div = buildBtnDiv();
  section.append(div);

  return section;
};

export { Main };
