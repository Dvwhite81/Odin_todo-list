import { Sidebar } from "./sidebar-section";
import { Main } from "./main-section";

const BuildPage = () => {
  const container = document.getElementById('container');
  container.append(Sidebar());
  container.append(Main());
};

export { BuildPage };
