import { App } from "vue";
import rButton from "./button/src/main.vue";
import gButton from "./button2/main.vue";

import RdSelect from "./select/main.vue";
import RdBreadcrumb from "./breadcrumb/src/breadcrumb.vue";
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

import rdAvatar from "./avatar/index";
import rdTable from "./table/index";
import rdSelect from "./select/src/main.vue";


const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};

export { gButton, RdButton, RdSelect, RdBreadcrumb, RdBreadcrumbItem, RdCheckboxGroup, RdChenckbox };


export default {
  install,
};
