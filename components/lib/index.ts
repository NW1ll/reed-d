import { App } from "vue";
import rButton from "./button/src/main.vue";
import gButton from "./button2/main.vue";
import rdAvatar from "./avatar/index";
import rdTable from "./table/index";
import rdSelect from "./select/src/main.vue";

const components = [rButton, gButton, rdAvatar, rdTable, rdSelect];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { rButton, gButton, rdAvatar, rdTable, rdSelect };

export default {
  install,
};
