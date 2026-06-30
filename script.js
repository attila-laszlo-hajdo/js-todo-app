const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

button.addEventListener("click", function(){

  input.value = input.value.trim();
  const task = input.value;

  if(task === ""){
    input.classList.add("error");
    errorMessage.textContent = "Please enter task!"
    return;
  }

  input.classList.remove("error");
  errorMessage.textContent = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";

  li.addEventListener("click", function(){
    // console.log("LI clicked");
    span.classList.toggle("completed");
  })

  deleteBtn.addEventListener("click", function(event){
    // console.log("DELETE clicked");
    event.stopPropagation();
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
  input.focus();
  
});

input.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    button.click();
  }
});