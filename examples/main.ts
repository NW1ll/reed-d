import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import reed from "~/lib/index";
createApp(App).use(store).use(router).use(reed).mount("#app");
