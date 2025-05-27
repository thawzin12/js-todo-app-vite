import initialRender from "./initialrender.js";
import Observer from "./observer.js";
import listener from "./todolistener.js";
class Todo {
  init() {
    Observer();
    initialRender();
    listener();
  }
}
export default Todo;
