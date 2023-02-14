import { App } from "vue";
import rButton from "./button/src/main.vue";
import gButton from "./button2/main.vue";
import rdAvatar from './avatar/index';
import rdTable from './table/index';
const components = [rButton, gButton,rdAvatar, rdTable];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { rButton, gButton, rdAvatar, rdTable };

export default {
  install,
};
