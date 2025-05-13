function addListItem() {
    // This function adds a new item to the list
    item = document.getElementById("todoInput");
    list = document.getElementById("todoList");
    listItem = document.createElement("li");
    listItem.innerHTML = item.value;
    list.appendChild(listItem);
    item.value = "";
}

document.getElementById("todoInput").addEventListener("keypress", function(event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
        addListItem();
    }
});