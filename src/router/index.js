import { createWebHistory, createRouter } from "vue-router"
import Home from '../views/Home.vue'
import ViewBabe from "../views/ViewBabe.vue"

import EditBabe from "../views/admin/EditBabe.vue"
import AdminHome from '../views/admin/Home.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/babes/:id",
    name: "View Babe",
    component: ViewBabe,
  },

  {
    path: "/admin",
    name: "Admin",
    component: AdminHome,
    children: [
      
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/admin/babes/:id',
          component: EditBabe
        },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;