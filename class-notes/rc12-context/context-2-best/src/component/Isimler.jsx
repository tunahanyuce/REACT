import { useContext } from "react";
import AnaUser from "./AnaUser";
import { KullaniciContext } from "../context/KullaniciProvider";

const Isimler = () => {
  const { users } = useContext(KullaniciContext);

  return (
    <div>
      {/* API den gelen verilerin ilk 4 ürün isimlerini bastır.*/}
      {users.slice(0, 4).map((a) => (
        <div style={{ textalign: "center", background: "pink" }} key={a.id}>
          {a.login}
        </div>
      ))}
      {/* buraya context ile gelen users a alt componente props la yollayabiliriz
        <AnaUser users={users}/> */}

      <AnaUser />
    </div>
  );
};

export default Isimler;
