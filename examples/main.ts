import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import reed from "~/lib/index";
createApp(App).use(router).use(reed).mount("#app");
