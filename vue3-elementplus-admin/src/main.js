import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import "./styles/index.scss";
import "./styles/element.scss"
import element from './utils/element'

const app = createApp(App);
element(app) // 注册element的组件和插件
app.use(store).use(router).mount("#app");
