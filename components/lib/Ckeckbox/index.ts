import { App } from "vue";
import RdCheckbox from "./src/Checkbox.vue";
import RdCheckboxGroup from "./src/CheckboxGroup.vue";

RdCheckbox.install = (app: App) => {
    app.component(RdCheckbox.name, RdCheckbox);
};

RdCheckboxGroup.install = (app: App) => {
    app.component(RdCheckboxGroup.name, RdCheckboxGroup);
};

export default { RdCheckbox, RdCheckboxGroup };