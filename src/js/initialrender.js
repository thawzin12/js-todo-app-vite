import { makeList } from "./todologic.js";
const initialRender = () => {
  const taskExist = ["Thaw Zin Htet", "Selector", "Listener", "Handler"];
  taskExist.forEach((element) => {
    makeList(element);
  });
};
export default initialRender;
