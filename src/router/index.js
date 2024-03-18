import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import TasksPage from "@/pages/TasksPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage
  },
  {
    path: "/tasks",
    component: TasksPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
