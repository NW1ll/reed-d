import { App } from "vue";
import rdButton from "./button/index";
import rdAvatar from './avatar/index';
import rdTable from './table/index';
const components = [rdButton, rdAvatar, rdTable];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { rdButton, rdAvatar, rdTable };

export default {
  install,
};
