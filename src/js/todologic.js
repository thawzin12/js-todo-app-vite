import Swal from "sweetalert2";
import {
  completeTask,
  listTemplate,
  task,
  taskListGroup,
  totalTask,
} from "./todoselector.js";
import { v4 } from "uuid";

// start business logic
const createTaskDiv = (text) => {
  const list = listTemplate.content.cloneNode(true);
  console.log(list);
  list.querySelector(".list").id = "list" + v4();
  list.querySelector(".taskList").innerText = text;
  return list;
};
export const completeTaskCount = () => {
  completeTask.innerText = document.querySelectorAll(".check:checked").length;
};
export const getTotalTask = () => {
  totalTask.innerText = document.querySelectorAll(".list").length;
};
export const makeList = (taskName) => {
  if (taskName !== "") {
    taskListGroup.append(createTaskDiv(taskName));
    task.value = null;
    // getTotalTask();
  } else {
    Swal.fire({
      position: "top-center",
      icon: "info",
      text: "you must fill task",
      showConfirmButton: false,
      timer: 4000,
    });
  }
};
export const editList = (listId) => {
  let list = document.querySelector(`#${listId}`);
  let inputTag = document.createElement("input");
  let taskList = list.querySelector(".taskList");
  inputTag.className = "border mw-80 p-1";
  inputTag.value = taskList.innerText;
  taskList.classList.add("hidden");
  taskList.after(inputTag);
  inputTag.focus();
  inputTag.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      taskList.innerText = inputTag.value;
      inputTag.remove();
      taskList.classList.remove("hidden");
    }
  });
};
export const deleteList = (listId) => {
  let list = document.querySelector(`#${listId}`);
  Swal.fire({
    title: "Are you sure delete your job list?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      list.classList.replace("animate__fadeInLeft", "animate__backOutRight");
      list.classList.replace("animate__fast", "animate__slower");
      list.addEventListener("animationend", (event) => {
        list.remove();
      });
    }
  });
};
export const checkList = (listId) => {
  let list = document.querySelector(`#${listId}`);
  let check = list.querySelector(".check");
  let taskList = list.querySelector(".taskList");
  const editBtn = list.querySelector(".edit-btn");
  // completeTaskCount();
  taskList.classList.toggle("line-through");
  list.classList.toggle("scale-95");
  list.classList.toggle("bg-stone-200");
  if (check.checked) {
    editBtn.setAttribute("disabled", "true");
  } else {
    editBtn.removeAttribute("disabled");
  }
};
// end business logic
