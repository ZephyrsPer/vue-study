import { createApp } from "vue";
import "./style.css";
import "./styles/tailwind.css";
import App from "./App.vue";

import router from "./router";

// 挂载
const app = createApp(App);
app.use(router);
app.mount("#app");
