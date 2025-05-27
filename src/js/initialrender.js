import { makeList } from "./todologic.js";
const initialRender = () => {
  const taskExist = ["to read js", "bundler", "audio tracker"];
  taskExist.forEach((element) => {
    makeList(element);
  });
};
export default initialRender;
