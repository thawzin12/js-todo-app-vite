import { checkList, deleteList, editList, makeList } from "./todologic.js";

// start handler
export const taskListGroupHandler = (event) => {
  let element = event.target;
  const listId = element.closest(".list").id;
  if (element.classList.contains("edit-btn")) {
    editList(listId);
  }
  if (element.classList.contains("delete-btn")) {
    deleteList(listId);
  }
  if (element.classList.contains("check")) {
    checkList(listId);
  }
};
export const taskHandler = (e) => {
  if (e.key === "Enter") {
    const taskName = task.value.trim();
    makeList(taskName);
  }
};
export const addTaskHandler = () => {
  const taskName = task.value.trim();
  makeList(taskName);
};
// end handler
