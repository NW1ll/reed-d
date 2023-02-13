import { App } from "vue";
import RdButton from "./button/main.vue";
import gButton from "./button2/main.vue";
import RdSelect from "./select/main.vue";
import RdBreadcrumb from "./breadcrumb/src/breadcrum.vue";
import RdBreadcrumbItem from "./breadcrumb/src/breadcrumb-item.vue";

const components = [
  gButton,
  RdButton,
  RdSelect,
  RdBreadcrumb,
  RdBreadcrumbItem,
];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { gButton, RdButton, RdSelect, RdBreadcrumb, RdBreadcrumbItem };

export default {
  install,
};
