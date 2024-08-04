const routes = [
  {
    path: "/",
    component: () => import("../view/Home/index.vue"),
  },
  {
    path: "/about",
    component: () => import("../view/About/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../view/NotFound/index.vue"),
  },
];

export default routes;
