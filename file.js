let count=0;

function addTask() {
  const data = document.querySelector(".input-text").value;
  document.querySelector(".input-text").value = "";
  const list = document.createElement("li");
  list.innerHTML =
    `<div class="list"><span>${data}</span><div> <ion-icon class="check" id="id-${count}" name="checkbox-outline" onclick=check("${count}") ></ion-icon> <ion-icon class="delete"  name="trash-outline"  onclick=deletetask('${count}') ></ion-icon></div></div>`;
  document.querySelector(".task").appendChild(list);
  list.setAttribute("class",`cal--${count}`);
  count++;
}

function deletetask(del) {
  document.querySelector(`.cal--${del}`).remove();
}

function check(id){
  const val = document.querySelector(`#id-${id}`);
  console.log(val)
  val.style.backgroundColor ="#54B435";
  // val.forEach(element => {
  //   element.style.backgroundColor ="#AACB73";
    
  // });
}