import { getCurrentInstance, computed } from "vue";

const noop = () => {};
const guardLinkEvent = (e: MouseEvent) => {
  // 使用组合键时不进行跳转
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return false;
  }

  // e.preventDefault() 被调用时不进行跳转
  if (e.defaultPrevented) {
    return false;
  }

  // 鼠标右键点击时不进行跳转
  if (e.button !== undefined && e.button !== 0) {
    return false;
  }

  // target="_blank" 时不进行跳转
  if (e.currentTarget && (e.currentTarget as HTMLElement).getAttribute) {
    const target = (e.currentTarget as HTMLElement).getAttribute("target");

    if (/\b_blank\b/i.test(target as string)) {
      return false;
    }
  }

  if (e.preventDefault) {
    e.preventDefault();
  }

  return true;
};

export default function useLink(to, replace) {
  // 
  const instance = getCurrentInstance();
  const router = instance?.appContext?.config?.globalProperties?.$router;

  // 
  const route = computed(() => router.resolve(to));
  const path = computed(() => route.value.href);

  // 
  const navigate = (e: MouseEvent) => {
    if (guardLinkEvent(e)) {
      const method = replace ? router.replace : router.push;

      method.call(router, path.value).catch(noop);
    }
  };

  return {
    path,
    navigate
  };
};