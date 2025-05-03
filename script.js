document.addEventListener("DOMContentLoaded", function () {
    // Function to add a new item
    document.getElementById("add-btn").addEventListener("click", function () {
      const item = document.getElementById("todo-input").value.trim();
      if (item !== '') {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item} <button class="delete-btn">Delete</button>`;
        document.getElementById("todo-list").appendChild(listItem);
        document.getElementById("todo-input").value = '';  // Clear the input after adding
      }
    });
  
    // Allow adding items with Enter key
    document.getElementById("todo-input").addEventListener("keypress", function (e) {
      if (e.which === 13) {
        document.getElementById("add-btn").click();
      }
    });
  
    // Function to delete an item
    document.getElementById("todo-list").addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
      }
    });
  });
  