import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/main",
    name: "Home",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/sign-in",
    name: "Sign in",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "Sign up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/user-profile",
    name: "User profile",
    component: () => import("../views/UserProfile.vue"),
  },
  {
    path: "/other-user",
    name: "Other user",
    component: () => import("../views/OtherUser.vue"),
  },
  {
    path: "/password-reset",
    name: "Password reset",
    component: () => import("../views/PasswordReset.vue"),
  },
  {
    path: "/user-settings",
    name: "User settings",
    component: () => import("../views/UserSettings.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });
export { router, routes };
