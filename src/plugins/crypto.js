//npm install crypto-js
import CryptoJS from "crypto-js";

/***************
 * 암호화
***************/
export const encryptData = (data) => {
    console.log('encryptData', data, typeof data);
    try {
        if (typeof data === "object") {
            return CryptoJS.AES.encrypt(JSON.stringify(data), process.env.VUE_ENC_KEY).toString();
        } else {
            console.log('enc', process.env.VUE_ENC_KEY);
            return CryptoJS.AES.encrypt(data, process.env.VUE_ENC_KEY).toString();
        }
    } catch (e) { console.log('enc error', e); return null; }
}

/*************** 
 * 복호화 
 **************/
export const decryptData = (encStr) => {
    console.log('encryptData', encStr);
    try {
        return CryptoJS.AES.decrypt(encStr, process.env.VUE_ENC_KEY).toString(CryptoJS.enc.Utf8);
    } catch (e) { return null; }
}

export default {
    encryptData,
    decryptData
}