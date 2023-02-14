import { App } from "vue";
import RdButton from "./button/main.vue";
import gButton from "./button2/main.vue";
import RdSelect from "./select/main.vue";
import RdInput from "./input/main.vue";

const components = [gButton, RdButton, RdSelect, RdInput];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { gButton, RdButton, RdSelect, RdInput };

export default {
  install,
};
