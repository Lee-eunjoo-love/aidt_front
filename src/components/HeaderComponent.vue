<template>
  <div class="d-flex row">
    <div class="mnu-box col-7">
        <router-link class="mnu-lnk" :to="{ name: 'exhibition' }">AIDT 전시관</router-link>
        <router-link class="mnu-lnk" :to="{ name: 'archive' }">자료실</router-link>
        <router-link class="mnu-lnk" :to="{ name: 'support' }">AIDT 교육지원</router-link>
        <router-link class="mnu-lnk" :to="{ name: 'notice' }">AIDT 소식</router-link>
        <router-link class="mnu-lnk" :to="{ name: 'faq' }">고객센터</router-link>
    </div>
    <div class="d-flex justify-end col">
        <ul>
            <li v-if="!isLogin"><router-link class="btn btn-outline-secondary" :to="{ path: '/member/create'}">회원가입</router-link></li>
            <li v-if="!isLogin"><router-link class="btn btn-outline-secondary" :to="{ path: '/member/login'}">로그인</router-link></li>
            <li v-if="isLogin" class="btn btn-outline-secondary" @click="doLogout">로그아웃</li>
            <li><router-link :to="{ name: 'sitemap' }">전체메뉴</router-link></li>
        </ul>
    </div>
  </div>

</template>

<script>
import { useCookies } from 'vue3-cookies';
export default {
    name: "HeaderComponent",
    data() {
        const { cookies } = useCookies();
        return {
            isLogin: false,
            cookies,
        }
    },
    created() {
        /** 서버로 구글 로그인 요청후 리다이렉트 URL에 query 에 담아 토큰 전달시 클라이언트에서 수신 */
        //const token = new URL(window.location.href).searchParams.get("token");
        //쿠키 정보 조회 라이브러리 설치 : npm install js-cookie
        const token = this.cookies.get("token");
        if (token) {
            console.log('token', token);
            localStorage.setItem("token", token);
            this.cookies.remove("token");
            window.location.href = "/";
        }

        /** 로그인 체크 */
        if(localStorage.getItem("token")) {
            this.isLogin = true;
        }
    },
    methods: {
        doLogout() {
            localStorage.clear();
            window.location.reload();
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    cursor: pointer;
    float: left;
    margin-right: 5px;
}
.mnu-box {
    padding-top: 8px;
}
.mnu-lnk {
    margin: 5px;
    padding: 2px 5px;
    text-decoration: none;
    color: #444;
    border: 1px solid #FFF;
    border-radius: 5px;
}
.mnu-lnk:hover {
    color:darkcyan;
    border: 1px solid #CCC;
}
</style>