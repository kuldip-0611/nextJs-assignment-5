import CryptoJS from 'crypto-js';
const PASS = "kjnjhjb"
export const encryptData = (password) => {
 /* Encrypting the data. */
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      PASS
    ).toString();
    return data
  };