import { App } from "vue";
import rButton from "./button/index";
import gButton from "./button2/index";
import rdAvatar from './avatar/index';
const components = [rButton, gButton,rdAvatar];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { rButton, gButton, rdAvatar };

export default {
  install,
};
