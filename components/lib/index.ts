import { App } from "vue";
import RdSelect from "./select/main.vue";
import RdBreadcrumb from "./breadcrumb/src/breadcrum.vue";
import RdBreadcrumbItem from "./breadcrumb/src/breadcrumb-item.vue";
import RdChenckbox from "./Ckeckbox/src/Checkbox.vue";
import RdCheckboxGroup from "./Ckeckbox/src/CheckboxGroup.vue";
import rdAvatar from "./avatar/index";
import rdTable from "./table/index";
import rdSelect from "./select/src/main.vue";

const components = [
  RdSelect,
  RdBreadcrumb,
  RdBreadcrumbItem,
  RdChenckbox,
  RdCheckboxGroup,
  rdAvatar,
  rdTable,
  rdSelect
];



const install = (app: App): void => {
  components.map((component) => {
    app.component(component.name, component);
  });
};

export {
  RdSelect,
  RdBreadcrumb,
  RdBreadcrumbItem,
  RdChenckbox,
  RdCheckboxGroup,
  rdAvatar,
  rdTable,
  rdSelect };


export default {
  install,
};
