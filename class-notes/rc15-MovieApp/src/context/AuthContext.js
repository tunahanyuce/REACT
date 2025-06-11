import React from "react";
import React, { create } from "react-router-dom";
import { toastSuccess } from "../helpers/ToastNotify";

export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  //!register
  //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr
  const createKullanici = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("register işlemi başarılı");
  };

  return (
    <AuthContextt.provider value={{ createKullanici }}>
      {children}
    </AuthContextt.provider>
  );
};

export default AuthContext;
