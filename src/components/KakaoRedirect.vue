<template>
  <div>
    카카오 로그인 진행중 ...
    <br />
    추가정보
  </div>
</template>

<script setup>
import { encryptData } from '@/plugins/crypto';
import axios from 'axios';
/** 옵션 API : created 생명주기 */
const initData = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log('kakao redirect', code);
    // 서버로 code 전달
    sendCodeToServer(code);
};
/** 
 * 서버로 로그인 요청 (서버로 SNS로그인 인증코드 전달) 
 * 서버로 로그인 요청 (code 값으로 SNS 인증 처리후 accessToken 반환)
*/
const sendCodeToServer = async (code) => {
    const response = await axios.post("http://localhost:8080/member/kakao/doLogin", { code });
    const token = response.data.token;
    localStorage.setItem("token", encryptData(token));
    window.location.href = "/";
};
initData();
</script>

<style scoped>

</style>