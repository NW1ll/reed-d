import { defineClientConfig } from '@vuepress/client'
import rdSelect from "./components/select/src/main.vue";
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component(rdSelect.name, rdSelect)
    },
    setup() {},
    rootComponents: [],
})
