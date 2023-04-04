import { toast } from "react-hot-toast";
import { messages } from "../../constants/toast_messages";
import DecryptData from "../Password_decryption";
import { encryptData } from "../password_encryption";

export const ChangePassword_initialState = {
  current_password: "Kuldip@0611",
  edit_password: "Desai#0611",
  confirm_edit_password: "Desai#0611",
};

export const Change_Password = (values) => {
  let valid = false;
  console.log(values);

  const data = localStorage.getItem("loginData");
  const inobjData = JSON.parse(data);

  const ActiveUser = inobjData.find((item) => item.isActive);
  /* Checking if the new password is same as the old password. */
  if (DecryptData(ActiveUser.password) === values.edit_password) {
    toast.error(messages.Passowrd_Same);
  } /* This is checking if the current password is not equal to the password entered by the user. */
  else if (DecryptData(ActiveUser.password) !== values.current_password) {
    toast.error(messages.Password_Invalid);
  } /* This is updating the password in the local storage. */
  else {
    ActiveUser.password = encryptData(values.edit_password);
    toast.success(messages.Passwod_Updated);
    valid = true;
    const newLoginData = inobjData.map((item) => {
      if (item.isActive) {
        item = ActiveUser;
      }
      return item;
      
    });
    return valid;
    localStorage.setItem("loginData", JSON.stringify(newLoginData));
  }
}