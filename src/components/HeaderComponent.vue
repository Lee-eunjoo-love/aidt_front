<template>
  <v-app-bar app dark>
    <v-container>
        <v-row align="center">
            <v-col class="d-flex justify-end">
                <v-btn v-if="!isLogin" :to="{ path: '/member/create' }">회원가입</v-btn>
                <v-btn v-if="!isLogin" :to="{ path: '/member/login' }">로그인</v-btn>
                <v-btn v-if="isLogin" @click="doLogout()">로그아웃</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </v-app-bar>
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

</style>