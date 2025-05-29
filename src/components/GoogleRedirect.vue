<template>
  <div>
    구글 로그인 진행중 ...
    <br />
    추가정보
  </div>
</template>

<script setup>
import axios from 'axios';
import { encryptData } from '@/plugins/crypto';
/** 옵션 API : created 생명주기 */
const initData = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    // 서버로 code 전달
    sendCodeToServer(code);
};
/** 
 * 서버로 로그인 요청 (서버로 SNS로그인 인증코드 전달) 
 * 서버로 로그인 요청 (code 값으로 SNS 인증 처리후 accessToken 반환)
*/
const sendCodeToServer = async (code) => {
    if (!code || code === '') return;

    const response = await axios.post("http://localhost:8080/member/google/doLogin", { code });
    const token = response.data.token;
    console.log('sendCodeToServer', encryptData(token));
    localStorage.setItem("token", encryptData(token));
    //window.location.href = "/";
};
initData();
</script>

<style scoped>

</style>