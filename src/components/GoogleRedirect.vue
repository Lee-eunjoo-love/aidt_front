<template>
  <div>
    구글 로그인 진행중 ...
    <br />
    추가정보

    <button class="btn btn-primary" @click="sendCodeToServer()">가입하기</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const code = ref(null);
/** 옵션 API : created 생명주기 */
const initData = () => {
    code.value = new URL(window.location.href).searchParams.get("code");
    if (!code.value || code.value === '') window.location.href = "/";
};
/** 
 * 서버로 로그인 요청 (서버로 SNS로그인 인증코드 전달) 
 * 서버로 로그인 요청 (code 값으로 SNS 인증 처리후 accessToken 반환)
*/
const sendCodeToServer = async () => {
    if (!code.value || code.value === '') return;

    const response = await axios.post("http://localhost:8080/member/google/doLogin", { code: code.value });
    const token = response.data.token;
    //console.log('sendCodeToServer', token);
    localStorage.setItem("token", token);
    window.location.href = "/";
};
initData();
</script>

<style scoped>

</style>