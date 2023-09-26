import { getNewListInfo } from "../todo-list";
import { getAllProjects, getNewProjectInfo } from "../project";
import { buildElement } from "./build-page";

const setModalActive = (type) => {
  const modal = document.getElementById(`${type}-modal`);
  modal.style.display = "block";
};

const buildModal = (type) => {
  const checkForModal = document.getElementById(`${type}-modal`);
  if (checkForModal) {
    setModalActive(type);
    return;
  }
  const popup = buildElement("div", {
    id: `${type}-modal`,
    classList: "popUp",
  });

  const form = buildElement("form", { id: "form" });

  const closeBtn = buildElement("span", {
    id: `close-${type}-modal`,
    classList: "close",
    textContent: "✕",
  });
  closeBtn.addEventListener("click", () => (popup.style.display = "none"));

  if (type === "list") {
    const listInputs = buildElement("div", { id: "list-inputs" });
    const h3 = buildElement("h3", { textContent: "New List" });
    const label1 = buildElement("label", {
      for: "title-input",
      classList: "bold",
      textContent: "Title: ",
    });
    const input1 = buildElement("input", {
      type: "text",
      id: "title-input",
      name: "title",
    });
    const label2 = buildElement("label", {
      for: "description-input",
      classList: "bold",
      textContent: "Description: ",
    });
    const input2 = buildElement("input", {
      type: "text",
      id: "description-input",
      name: "description",
    });
    const label3 = buildElement("label", {
      for: "duedate-input",
      classList: "bold",
      textContent: "Due Date: ",
    });
    const input3 = buildElement("input", {
      type: "date",
      id: "duedate-input",
      name: "duedate",
    });

    listInputs.append(h3, label1, input1, label2, input2, label3, input3);

    const priorities = buildElement("div", { id: "priority-inputs" });
    const labelPriorities = buildElement("label", {
      classList: "bold",
      textContent: "Priority: ",
    });
    const input4 = buildElement("input", {
      type: "radio",
      id: "priority-low-input",
      name: "priority",
      value: "low priority",
    });
    const label4 = buildElement("label", {
      for: "priority-low-input",
      textContent: "Low",
    });
    const input5 = buildElement("input", {
      type: "radio",
      id: "priority-medium-input",
      name: "priority",
      value: "medium priority",
    });
    const label5 = buildElement("label", {
      for: "priority-medium-input",
      textContent: "Medium",
    });
    const input6 = buildElement("input", {
      type: "radio",
      id: "priority-high-input",
      name: "priority",
      value: "high priority",
    });
    const label6 = buildElement("label", {
      for: "priority-high-input",
      textContent: "High",
    });

    const label7 = buildElement("label", {
      for: "project-select",
      textContent: "Project: ",
    });
    const input7 = buildElement("select", { id: "project-select" });

    const allProjects = getAllProjects();
    allProjects.forEach((project) => {
      const option = buildElement("option", {
        textContent: project.projectName,
        value: project.projectId,
      });
      input7.append(option);
    });

    priorities.append(
      labelPriorities,
      input4,
      label4,
      input5,
      label5,
      input6,
      label6
    );
    listInputs.append(priorities, label7, input7);

    const submit = buildElement("button", {
      id: "new-list-submit",
      textContent: "Add List",
    });

    listInputs.append(submit);

    form.append(closeBtn, listInputs);
    form.addEventListener("submit", getNewListInfo);
  } else if (type === "project") {
    const projectInputs = buildElement("div", { id: "list-inputs" });
    const h3 = buildElement("h3", { textContent: "New Project" });
    const label1 = buildElement("label", {
      for: "name-input",
      classList: "bold",
      textContent: "Name: ",
    });
    const input1 = buildElement("input", {
      type: "text",
      id: "name-input",
      name: "name",
    });

    projectInputs.append(h3, label1, input1);

    const submit = buildElement("button", {
      id: "new-project-submit",
      textContent: "Add Project",
    });

    projectInputs.append(submit);

    form.append(closeBtn, projectInputs);
    form.addEventListener("submit", getNewProjectInfo);
  }

  popup.append(form);

  const main = document.getElementById("main");
  main.append(popup);
};

export { buildModal, setModalActive };
