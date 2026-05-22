const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

button.addEventListener("click", function(){

  const task = input.value;

  if(task === ""){
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function(){
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
  
});