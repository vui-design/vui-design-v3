import { createI18n } from "vue-i18n";
import VuiDesignZhCN from "vui-design/locale/lang/zh-CN";
import VuiDesignEnUS from "vui-design/locale/lang/en-US";
import zhCN from "./lang/zh-CN";
import enUS from "./lang/en-US";
import getLanguage from "src/utils/getLanguage";

const language = getLanguage();
const messages = {
  "zh-CN": Object.assign(VuiDesignZhCN, zhCN),
  "en-US": Object.assign(VuiDesignEnUS, enUS)
};

const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: "zh-CN",
  messages
});

export default i18n;