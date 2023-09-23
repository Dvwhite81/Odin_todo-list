import { Sidebar } from "./sidebar-section";
import { Main } from "./main-section";

export const BuildPage = (() => {
    const container = document.getElementById('container');

    const sidebar = Sidebar();

    const main = Main();

    container.append(sidebar);
    container.append(main);

    return container;
})();
