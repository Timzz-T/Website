function addListItem() {
    // This function adds a new item to the list
    list = document.getElementById("todoList");
    
    date = document.getElementById("dateInput");
    item = document.getElementById("todoInput");
    priority = document.getElementById("priorityInput");
    
    //create table items
    row = list.insertRow();
    dateCell = row.insertCell(0);
    taskCell = row.insertCell(1);
    priorityCell = row.insertCell(2);
    deleteCell = row.insertCell(3);

    //put data into table items
    dateCell.innerHTML = date.value;
    taskCell.innerHTML = item.value;
    priorityCell.innerHTML = priority.value;
    deleteCell.innerHTML = "<button class='deleteBut' onclick='this.closest(\"tr\").remove()'><img src='Images/delete.svg'></button>";

    item.value = "";
    date.value = "";
    priority.value = "";

}

// for each item in list it runs when enter is pressed
["todoInput", "dateInput", "priorityInput"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            addListItem()
        }
    });
});