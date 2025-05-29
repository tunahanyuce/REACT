// import { useContext } from "react";
// import { KullaniciContext } from "../context/KullaniciProvider";

import { useOsman } from "../context/KullaniciProvider";


const AnaUser = () => {
  // const { users,changeWidth } = useContext(KullaniciContext);
const {users,changeWidth}= useOsman()
  return (
    <div>
      {users.map((a) => (
        <div>
          <h3>{a.login}</h3>
          <img src={a.avatar_url} alt="" />
          <div>
            <label htmlFor="Image width (px"></label>
            <input onChange={(e)=>changeWidth()} type="number" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnaUser;
