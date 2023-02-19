import { App } from "vue";
import rdAvatar from "./src/main.vue";
rdAvatar.install = (app: App): void => {
  app.component(rdAvatar.name, rdAvatar);
};
export default rdAvatar;
