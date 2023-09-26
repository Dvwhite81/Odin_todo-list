const setStorage = (type, object) => {
  let storedArray = JSON.parse(localStorage.getItem(type) || "[]");

  if (type === "allProjects") {
    if (
      !storedArray.find((project) => project.projectId === object.projectId)
    ) {
      storedArray.push(object);
    }
  } else {
    storedArray.push(object);
  }

  localStorage.setItem(type, JSON.stringify(storedArray));
};

const getStorage = (type) => {
  const storedArray = JSON.parse(localStorage.getItem(type) || "[]");
  return storedArray;
};

export { setStorage, getStorage };
