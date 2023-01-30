import { App } from "vue";
import rButton from "./button/index";
import gButton from "./button2/index";
const components = [rButton, gButton];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { rButton, gButton };

export default {
  install,
};
