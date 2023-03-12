import "vui-design/style/index.less";
import "src/assets/styles/highlightjs.css";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
import { createApp } from "vue";
import VuiDesign from "vui-design";
import HighlightjsVuePlugin from "@highlightjs/vue-plugin";
import App from "src/App";
import router from "src/router";
import i18n from "src/locale";
import store from "src/store";

const app = createApp(App);

app.use(VuiDesign);
app.use(HighlightjsVuePlugin);
app.use(router);
app.use(i18n);
app.use(store);

app.mount("#app");