import { App } from "vue";
import gButton from "./src/main.vue";
gButton.install = (app: App): void => {
  app.component(gButton.name, gButton);
};
export default gButton;
