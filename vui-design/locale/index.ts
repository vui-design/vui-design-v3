import type { I18nMessages, Lang } from "./types";
import { ref, reactive, computed } from "vue";
import is from "../utils/is";
import zhCN from "./lang/zh-CN";

const language = ref("zh-CN");
const i18nMessages = reactive<I18nMessages>({
  "zh-CN": zhCN
});

/**
 * 添加地区语言包，添加过后的语言包可以通过 useLocale 使用
 * @param messages 需要添加的地区语言数据
 * @param options
 */
export const addI18nMessages = (
  messages: I18nMessages,
  options?: {
    overwrite?: boolean;
  }
) => {
  for (const key of Object.keys(messages)) {
    if (!i18nMessages[key] || options?.overwrite) {
      i18nMessages[key] = messages[key];
    }
  }
};

/**
 * 切换地区语言
 * @param lang
 */
export const useLocale = (lang: string) => {
  if (!i18nMessages[lang]) {
    return console.warn(`[Vui Design]: use ${lang} failed, please add ${lang} first!`);
  }

  language.value = lang;
};

/**
 * 获取当前的地区语言
 */
export const getLocale = () => {
  return language.value;
};

/**
 * 内部使用
 */
export const t = () => "";
export const useI18n = () => {
  const i18nMessage = computed<Lang>(() => i18nMessages[language.value]);
  const locale = computed(() => i18nMessage.value.locale);
  const translate = (path: string, ...args: any[]): string => {
    const keys = path.split(".");
    let target: any = i18nMessage.value;

    for (const key of keys) {
      if (!target[key]) {
        return key;
      }

      target = target[key];
    }

    if (is.string(target)) {
      if (args.length > 0) {
        return target.replace(/{(\d+)}/g, (sub, index) => args[index] ?? sub);
      }

      return target;
    }

    return target;
  };

  return {
    locale,
    translate
  };
};

export default {
  t,
  use: () => {},
  i18n: () => {}
};