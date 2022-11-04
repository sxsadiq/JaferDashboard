const trash = document.querySelectorAll(".landing .box .Task i");
const Task = document.querySelectorAll(".landing .box .Task");

Taskdel(trash, "del");

function Taskdel(eles, Class) {
  eles.forEach((ele, ind) => {
    ele.addEventListener("click", () => {
      Task[ind].classList.toggle(Class);
    });
  });
}

const check = document.querySelectorAll(".check-box");
const labels = document.querySelectorAll(".show-hide label");
const raidos = document.querySelectorAll(".backup");
const back_box = document.querySelectorAll(".back-box");

ToggleClick(labels, "checked");

ToggleClick(check, "select");

clickAddRemove(raidos, "select");

clickAddRemove(back_box, "select");

function clickAddRemove(eles, Class) {
  eles.forEach((ele) => {
    ele.addEventListener("click", () => {
      removeClass(eles, Class);
      ele.classList.add(Class);
    });
  });
}

function ToggleClick(eles, Class) {
  eles.forEach((ele) => {
    ele.addEventListener("click", () => ele.classList.toggle(Class));
  });
}

function removeClass(eles, Class) {
  eles.forEach((ele) => ele.classList.remove(Class));
}
