<template>
  <v-container>
    <v-row justify="center">
        <v-col md="6">
            <v-card>
                <v-card-title class="text-h5 text-center">
                    회원가입
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            label="email"
                            v-model.trim="uiData.email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="패스워드"
                            v-model="uiData.password"
                            type="password"
                        >
                        </v-text-field>
                        <v-btn type="button" color="primary" block @click="memberCreate()">등록</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const uiData = ref({
    email: "",
    password: "",
}); // { "email": "hgd@chunjae.co.kr", "password": "akdirakf" }
const memberCreate = async () => {
    await axios.post("http://localhost:8080/member/create", uiData.value);
    window.location.href = "/";//this.router.push({ path: '/' });//
};
</script>

<style scoped>

</style>