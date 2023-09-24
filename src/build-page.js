import { Sidebar } from "./sidebar-section";
import { Main } from "./main-section";
import { ProjectSection } from "./project-section";

const BuildPage = () => {
  const container = document.getElementById('container');
  container.append(Sidebar());
  container.append(Main());

  ProjectSection();
};

export { BuildPage };
