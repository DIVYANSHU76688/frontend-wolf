function addTask() {
  const data = document.querySelector(".input-text").value;
  document.querySelector(".input-text").value = "";
  const list = document.createElement("li");
  list.innerHTML =
    data + '<ion-icon class="add-task" name="trash-outline"  onclick=deletetask() ></ion-icon>';
  document.querySelector(".task").appendChild(list);
}

function deletetask() {
  document.querySelector("li").remove();
}
