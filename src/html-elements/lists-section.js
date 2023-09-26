import { intervalToDuration, parseISO, formatDuration } from "date-fns";
import { buildElement } from "./build-page";

const buildList = (list) => {
  const section = buildElement("div", { classList: "list-section" });
  section.setAttribute("list-id", list.id);
  const title = buildElement("h3", {
    classList: "list-title",
    textContent: `Task: ${list.title}`,
  });
  const description = buildElement("p", {
    classList: "list-description",
    textContent: `Details: ${list.description}`,
  });
  let timeLeft = intervalToDuration({
    start: new Date(),
    end: parseISO(list.dueDate),
  });

  const dueDate = buildElement("p", {
    classList: "list-duedate",
    textContent: `Time left: ${formatDuration(timeLeft, {
      delimiter: ", ",
    })}`,
  });
  section.append(title, description, dueDate);

  return section;
};

export { buildList };
