import { App } from "vue";
import rButton from "./button/main.vue";
import gButton from "./button2/main.vue";
const components = [gButton, rButton];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { gButton, rButton };

export default {
  install,
};
