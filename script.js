function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('task-list');
    
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    listItem.onclick = function () {
        listItem.classList.toggle('completed');
    };

    taskList.appendChild(listItem);
    taskInput.value = ""; 
}
 
