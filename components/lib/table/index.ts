import { App } from "vue";
import rdTable from "./src/main.vue";
rdTable.install = (app: App): void => {
  app.component(rdTable.name, rdTable);
};
export default rdTable;