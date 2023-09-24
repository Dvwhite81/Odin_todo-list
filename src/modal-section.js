const setModalActive = (type) => {
    const modal = document.getElementById(`${type}-modal`);
    modal.style.display = 'block';
}

const BuildModal = (type) => {
    const checkForModal = document.getElementById(`${type}-modal`);
    if (checkForModal) {
        setModalActive(type);
        return;
    }
    const popup = document.createElement('div');
    popup.classList.add('popUp');
    popup.id = `${type}-modal`;

    const form = document.createElement('form');
    form.id = 'form';
    //
    //
    // Change these fields later
    form.innerHTML = `
        <span id="close-${type}-modal" class="close">&times;</span>
        <legend>New List</legend>
        <div id="list-inputs">
            <h3>New List</h3>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Title">
            <label for="description">Description</label>
            <input type="text" id="description" name="description" placeholder="Description">
            <label for="duedate">Due Date</label>
            <input type="date" id="duedate" name="duedate" placeholder="Due Date">
            <div id="priority-inputs">
                <input type="radio" id="priority-low" name="priority" value="low priority">
                <label for="priority-low">Low Priority</label>
                <input type="radio" id="priority-medium" name="priority" value="medium priority">
                <label for="priority-medium">Medium Priority</label>
                <input type="radio" id="priority-high" name="priority" value="high priority">
                <label for="priority-high">High Priority</label>
            </div>
            <button type="submit" id="new-list-submit">Add List</button>
        </div>
    `;

    popup.append(form);

    const main = document.getElementById('main');
    main.append(popup);

    const closeBtn = document.getElementById(`close-${type}-modal`);
    closeBtn.addEventListener('click', () => popup.style.display = 'none');
}

export { BuildModal, setModalActive };
