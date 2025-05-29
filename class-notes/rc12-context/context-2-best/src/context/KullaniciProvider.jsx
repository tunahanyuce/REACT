import { createContext, useContext, useEffect, useState } from "react";

//! 1- context alanı açalım
export const KullaniciContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  },[]);
  const changeWidth=(newId,myWidth)=>{

  }

  return (
    <KullaniciContext.Provider value={{users,changeWidth}}>{children}</KullaniciContext.Provider>
  );
};
//!Consuming burada yaparsak ihtiyaç duyan child larda bir daha çağırmıyoruz (opsiyonel tercih etmeyebilir, eski yoldan yani verileri çağıran sayfalara useContext yazarak devam edebilirsiniz.)(custom hooks)
//! 2.yol(childlara veriyi getirmede 2.yol)
export const useOsman=()=>{
    return useContext(KullaniciContext)
}
export default KullaniciProvider;
