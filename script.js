let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `<li>${t} <button onclick="deleteTask(${i})">❌</button></li>`;
  });
}

function addTask() {
  let task = document.getElementById("task").value;
  if (task === "") return;

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("task").value = "";
  showTasks();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

showTasks();