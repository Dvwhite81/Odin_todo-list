

const buildSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  return sidebar;
};

const buildSideLogo = () => {
  const logo = document.createElement("img");
  logo.id = "side-logo";
  logo.src = "../src/images/todo-logo.png";

  return logo;
};

const buildSideTitle = () => {
  const sideTitle = document.createElement("div");
  sideTitle.id = "side-title";
  sideTitle.textContent = "All Projects";

  return sideTitle;
};

const buildSideList = () => {
  const list = document.createElement("ul");
  list.id = "side-list";

  // Fill in items later
  //
  //
  // Default item
  const item1 = document.createElement("li");
  item1.classList.add("side-list-item");
  const projectsLink = document.createElement("a");
  projectsLink.classList.add("side-link");
  projectsLink.textContent = "Default Project";
  item1.append(projectsLink);
  list.append(item1);

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
