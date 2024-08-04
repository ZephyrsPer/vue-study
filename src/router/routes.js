const routes = [
  {
    path: "/",
    component: () => import("../view/Home/index.vue"),
  },
  {
    path: "/about",
    component: () => import("../view/About/index.vue"),
  },
];

export default routes;
