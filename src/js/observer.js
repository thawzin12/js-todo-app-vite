import { completeTaskCount, getTotalTask } from "./todologic.js";
import { taskListGroup } from "./todoselector.js";
const Observer = () => {
  const job = () => {
    completeTaskCount();
    getTotalTask();
  };
  const observerOptions = { childList: true, subtree: true, attributes: true };
  const listObserver = new MutationObserver(job);
  listObserver.observe(taskListGroup, observerOptions);
};
export default Observer;
