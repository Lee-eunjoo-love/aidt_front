import MemberCreate from "@/components/MemberCreate.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import GoogleRedirect from "@/components/GoogleRedirect.vue";
import KakaoRedirect from "@/components/KakaoRedirect.vue";
import AboutPage from "@/pages/AboutPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/member/create',
        component: MemberCreate
    },
    {
        path: '/member/login',
        component: MemberLogin
    },
    {
        path: '/oauth/google/redirect',
        component: GoogleRedirect
    },
    {
        path: '/oauth/kakao/redirect',
        component: KakaoRedirect
    },
    {
        path: '/about',
        component: AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;