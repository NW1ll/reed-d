import { App } from "vue";
import rButton from "../button/src/main.vue";
rButton.install = (app: App): void => {
  app.component(rButton.name, rButton);
};
export default rButton;
