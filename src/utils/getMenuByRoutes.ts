import type { RouteRecordRaw } from "vue-router";

/**
 * 通过路由列表获取菜单列表
 * @param {Array} routes 路由列表
 */
export default function getMenuByRoutes(routes: readonly RouteRecordRaw[]) {
  let result = [];
  let groups = {};

  routes.forEach((route: RouteRecordRaw) => {
    if (!route.meta) {
      return;
    }

    if (route.meta.title !== "guide" && route.meta.title !== "components") {
      return;
    }

    route?.children?.forEach((child: RouteRecordRaw) => {
      const target = {
        path: child.path,
        name: child.name,
        meta: {
          title: child?.meta?.title
        }
      };
      const group = child?.meta?.group;

      if (group) {
        if (groups[group as string]) {
          groups[group as string].push(target);
        }
        else {
          groups[group as string] = [target];
        }
      }
      else {
        result.push(target);
      }
    });
  });

  for (let group in groups) {
    result.push({
      group: group,
      children: groups[group]
    });
  }

  return result;
};