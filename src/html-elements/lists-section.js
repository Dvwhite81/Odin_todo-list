import { intervalToDuration, parseISO, formatDuration } from "date-fns";
import { buildElement } from "./build-page";
import { getListId, deleteList } from "../todo-list";

const buildList = (list) => {
  const section = buildElement("div", { classList: "list-section" });
  section.setAttribute("list-id", list.id);
  let colors = setPriorityColor(list.priority);
  section.style.border = ` 5px ridge ${colors[0]}`;
  section.style.backgroundColor = colors[1];

  const listBtnsDiv = buildElement("div", { id: "list-btns-div" });
  const detailsBtn = buildElement("button", { id: "show-details", textContent: "ℹ️" });
  detailsBtn.addEventListener("click", showDetails);
  const deleteBtn = buildElement("button", { id: "delete-list", textContent: "␡" });
  deleteBtn.addEventListener("click", (event) => {
    const info = getListId(event);
    console.log('info:', info)
    const listId = info[0];
    const grandParent = info[1];
    deleteList(listId);
    removeListElement(grandParent);
  });
  listBtnsDiv.append(detailsBtn, deleteBtn);

  const title = buildElement("h3", {
    classList: "list-title",
    textContent: `${list.title}`,
  });
  const description = buildElement("p", {
    classList: "list-description",
    textContent: `${list.description}`,
  });
  description.style.display = "none";

  let timeLeft = intervalToDuration({
    start: new Date(),
    end: parseISO(list.dueDate),
  });

  const units = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
  const nonzero = Object.entries(timeLeft).filter(([_, value]) => value || 0 > 0).map(([unit, _]) => unit);
  const dueDate = buildElement("p", {
    classList: "list-duedate",
    textContent: `Time left: ${formatDuration(timeLeft, {
      format: units.filter(i => new Set(nonzero).has(i)).slice(0, 3),
      delimiter: ", ",
    })}`,
  });
  section.append(listBtnsDiv, title, description, dueDate);

  return section;
};

const showDetails = (event) => {
  const parent = event.target.parentElement.parentElement;
  const child = parent.querySelector(".list-description");
  child.style.display = "block";

  const detailsBtn = event.target;
  detailsBtn.removeEventListener("click", showDetails);
  detailsBtn.addEventListener("click", hideDetails);
}

const hideDetails = (event) => {
  const parent = event.target.parentElement.parentElement;
  const child = parent.querySelector(".list-description");
  child.style.display = "none";

  const detailsBtn = event.target;
  detailsBtn.removeEventListener("click", hideDetails);
  detailsBtn.addEventListener("click", showDetails);
}

const setPriorityColor = (priority) => {
  let color1, color2;
  switch (priority) {
    case 'low priority':
      color1 = 'green';
      color2 = 'lightgreen'
      break;
    case 'medium priority':
      color1 = 'yellow';
      color2 = 'lightyellow';
      break;
    case 'high priority':
      color1 = 'red';
      color2 = 'indianred';
      break;
  }
  return [color1, color2];
}

const removeListElement = (grandParent) =>{
  grandParent.remove();
}

export { buildList, removeListElement };
