function addListItem() {
    // This function adds a new item to the list
    list = document.getElementById("todoList");
    
    date = document.getElementById("dateInput").value;
    item = document.getElementById("todoInput");
    priority = document.getElementById("priorityInput").value;
    
    //create table items
    row = list.insertRow();
    dateCell = row.insertCell(0);
    taskCell = row.insertCell(1);
    PriorityCell = row.insertCell(2);
    deleteCell = row.insertCell(3);

    //put data into table items
    dateCell.innerHTML = date;
    taskCell.innerHTML = item.value;
    priorityCell.innerHTML = priority;

    item.value = "";
    date.value = "";
    priority.value = "";

}

document.getElementById("todoInput").addEventListener("keypress", function(event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
        addListItem();
    }
});

document.getElementById("dateInput").addEventListener("keypress", function(event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
        addListItem();
    }
});