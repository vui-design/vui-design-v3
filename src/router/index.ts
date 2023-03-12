import { createRouter, createWebHistory } from "vue-router";
import title from "src/config/title";
import routes from "src/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    window.document.title = to.meta.title + " - Vui Design";
  }
  else {
    window.document.title = title;
  }
});

export default router;