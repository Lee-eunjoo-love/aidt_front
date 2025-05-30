import MemberCreate from "@/components/MemberCreate.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import GoogleRedirect from "@/components/GoogleRedirect.vue";
import KakaoRedirect from "@/components/KakaoRedirect.vue";
import HomePage from "../pages/HomePage.vue"
import ExhibitionSidebar from "@/components/ExhibitionSidebar.vue";
import ExhibitionPage from "@/pages/ExhibitionPage.vue";
import SitemapPage from "@/pages/SitemapPage.vue";
import DataRoomPage from "@/pages/DataRoomPage.vue";
import EducationSupportPage from "@/pages/EducationSupportPage.vue";
import NoticePage from "@/pages/NoticePage.vue";
import CustomerCenterPage from "@/pages/CustomerCenterPage.vue";
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
        path: '/aidt/exhibition',
        name: 'exhibition',
        component: ExhibitionPage,
    },
    {
        path: '/data/archive',
        name: 'archive',
        component: DataRoomPage,
    },
    {
        path: '/education/support',
        name: 'support',
        component: EducationSupportPage,
    },
    {
        path: '/aidt/notice',
        name: 'notice',
        component: NoticePage,        
    },
    {
        path: '/customer/faq',
        name: 'faq',
        component: CustomerCenterPage,
    },
    {
        path: '/sitemap',
        name: 'sitemap',
        component: SitemapPage,
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