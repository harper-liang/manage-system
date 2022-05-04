import { createRouter, createWebHistory } from "vue-router";
import system from "./module/stystem"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({y:0}),
  routes:[...system]
});

export default router;
