import { App } from "vue";
import rButton from "./button/index";
const components = [rButton];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { rButton };

export default {
  install,
};
