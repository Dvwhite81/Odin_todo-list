const setStorage = (type, object) => {
    console.log('SET object arg', object)
    let storedArray = JSON.parse(
        localStorage.getItem(type) || '[]'
    );

    console.log('SET storedArray', storedArray);
    if (!storedArray.find(project => project.projectId === object.projectId)) {
        console.log('! find')
        storedArray.push(object);
    }
    console.log('SET object', object)
    console.log('SET AFTER storedArray', storedArray);
    localStorage.setItem(type, JSON.stringify(storedArray));
}

const getStorage = (type) => {
    const storedArray = JSON.parse(localStorage.getItem(type) || '[]');
    console.log(`GET storedArray ${type}`, storedArray);
    return storedArray;
}

export {
    setStorage,
    getStorage
}
