import { App } from "vue";
import RdButton from "./button/main.vue";
import gButton from "./button2/main.vue";
import RdSelect from "./select/main.vue";
import RdBreadcrumb from "./breadcrumb/src/breadcrum.vue";
import RdBreadcrumbItem from "./breadcrumb/src/breadcrumb-item.vue";
import RdChenckbox from "./Ckeckbox/src/Checkbox.vue";
import RdCheckboxGroup from "./Ckeckbox/src/CheckboxGroup.vue";

const components = [
  gButton,
  RdButton,
  RdSelect,
  RdBreadcrumb,
  RdBreadcrumbItem,
  RdChenckbox,
  RdCheckboxGroup
];
const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
export { gButton, RdButton, RdSelect, RdBreadcrumb, RdBreadcrumbItem, RdCheckboxGroup, RdChenckbox };

export default {
  install,
};
