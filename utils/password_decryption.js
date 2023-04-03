import CryptoJS from "crypto-js";
const SECRET_PASS = process.env.REACT_APP_NEXT_APP_PASS;
const PASS = "kjnjhjb"
const DecryptData = (text) => {
    /* Decrypting the data. */
    console.log(SECRET_PASS)
    const bytes = CryptoJS.AES.decrypt(text, PASS);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};
export default DecryptData