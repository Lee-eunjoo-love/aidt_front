import MemberCreate from "@/components/MemberCreate.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import GoogleRedirect from "@/components/GoogleRedirect.vue";
import KakaoRedirect from "@/components/KakaoRedirect.vue";
import HomePage from "../pages/HomePage.vue"
import ExhibitionSidebar from "@/components/ExhibitionSidebar.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: {
            default: HomePage,
            LeftSidebar: ExhibitionSidebar, 
        }
    },
    {
        path: '/member/create',
        name: 'memberCreate',
        component: MemberCreate
    },
    {
        path: '/member/login',
        name: 'memberLogin',
        component: MemberLogin,        
    },
    {
        path: '/oauth/google/redirect',
        name: 'googleRedirect',
        component: GoogleRedirect
    },
    {
        path: '/oauth/kakao/redirect',
        name: 'kakaoRedirect',
        component: KakaoRedirect
    },
    {
        path: "/:catchAll(.*)*",
        component: () => import("@/pages/ErrorNotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;