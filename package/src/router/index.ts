import { createRouter, createWebHistory } from "vue-router";
import MainRoutes from "./MainRoutes";
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth/auth1/login",
      component: () => import("@/views/authentication/auth1/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/login2",
      component: () => import("@/views/authentication/auth2/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/auth1/register",
      component: () => import("@/views/authentication/auth1/Register.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/register2",
      component: () => import("@/views/authentication/auth2/Register.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/auth1/forgot-password",
      component: () => import("@/views/authentication/auth1/ForgotPassword.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/forgot-password2",
      component: () => import("@/views/authentication/auth2/ForgotPassword.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/auth1/two-steps",
      component: () => import("@/views/authentication/auth1/TwoSteps.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/auth/two-step2",
      component: () => import("@/views/authentication/auth2/TwoSteps.vue"),
      meta: { requiresAuth: false },
    },


    {
      path: '/auth/maintenance',
      component: () => import('../views/authentication/Maintainance.vue')
    },

    ...MainRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "Error",
      component: () => import("@/views/authentication/Error.vue"),
    },
  ],
});
