import {
  addTaskHandler,
  taskHandler,
  taskListGroupHandler,
} from "./todohandler.js";
import { addTaskBtn, task, taskListGroup } from "./todoselector.js";

const listener = () => {
  // start listener
  addTaskBtn.addEventListener("click", addTaskHandler);
  task.addEventListener("keyup", taskHandler);
  taskListGroup.addEventListener("click", taskListGroupHandler);
  // end listener
};
export default listener;
