import { App } from "vue";
import RdButton from "./button/main.vue";
import gButton from "./button2/main.vue";
import RdSelect from "./select/main.vue";

const components = [gButton, RdButton, RdSelect];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { gButton, RdButton, RdSelect };

export default {
  install,
};
