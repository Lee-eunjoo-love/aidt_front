<template>
   <v-container>
    <v-row justify="center">
        <v-col md="4">
            <v-card>
                <v-card-title class="text-h5 text-center">
                    로그인
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            label="email"
                            v-model="email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="패스워드"
                            v-model="password"
                            type="password"
                        >
                        </v-text-field>
                        <v-btn type="button" color="primary" block @click="memberLogin()">로그인</v-btn>
                    </v-form>
                    <br />
                    <v-row>
                        <v-col cols="6" class="d-flex justify-center">
                            <ButtonGoogleLogin @click="googleLogin()" />
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <img src="@/assets/ButtonKakaoLogin.png" @click="kakaoLogin()" />
                        </v-col>
                    </v-row>
                    <v-row v-show="isServerGoogleLogin">
                        <v-col cols="6">
                            <v-btn @click="googleServerLogin()">Google Server Login</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import ButtonGoogleLogin from '@/assets/Icons/ButtonGoogleLogin.vue';

export default {
    name: "MemberLogin",
    components: {
        ButtonGoogleLogin
    },
    data() {
        return {
            email: "",
            password: "",
            googleUrl: "https://accounts.google.com/o/oauth2/auth",
            googleClientId: "218761885630-l1nv5m7tqrq3tgp1s5n6h9vr648j6324.apps.googleusercontent.com",
            googleRedirectUrl: "http://localhost:3000/oauth/google/redirect",
            // openid 는 요청하지 않아도 기본 제공. email 과 profile 은 요청시 제공.
            googleScope: "openid email profile",
            kakaoUrl: "https://kauth.kakao.com/oauth/authorize",
            // REST API Key
            kakaoClientId: "2582ec206c36727bd33600c0d2b1ebac",
            kakaoRedirectUrl: "http://localhost:3000/oauth/kakao/redirect",
            isServerGoogleLogin: false,
        }
    },
    methods: {
        async memberLogin() {
            const registerData = {
                email: this.email,
                password: this.password,
            }; // { "email": "hgd@chunjae.co.kr", "password": "akdirakf" }

            const response = await axios.post("http://localhost:8080/member/doLogin", registerData);
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/";//this.router.push({ path: '/' });//
        },
        googleLogin() {
            // 선작업 : Google 클라우드 콘솔에서 API 설정
            const auth_uri = `${this.googleUrl}?client_id=${this.googleClientId}&redirect_uri=${this.googleRedirectUrl}&response_type=code&scope=${this.googleScope}`;
            window.location.href = auth_uri;
        },
        kakaoLogin() {
            // 선작업 : 카카오 디벨로퍼스에서 API 설정
            const auth_uri = `${this.kakaoUrl}?client_id=${this.kakaoClientId}&redirect_uri=${this.kakaoRedirectUrl}&response_type=code`;
            window.location.href = auth_uri;
        },
        googleServerLogin() {
            // 선작업 : Google 클라우드 콘솔에서 API 설정(서버 Redirect Uri 추가 필요)
            // 서버로 구글 로그인 화면 전환 요청 (oauth2-client 와 약속된 URL 고정값) : http://localhost:8080/oauth2/authorization/google 
            // 서버에서 구글 로그인 처리 후 반환 받은 토큰은 리다이렉트 방식으로 헤더를 통해 클라이언트로 전달받도록 구현.
            window.location.href = "http://localhost:8080/oauth2/authorization/google";
        }
    }
}
</script>

<style scoped>

</style>