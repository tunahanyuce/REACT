import React, { useState } from "react";

import { hastaData, doctorData } from "../helper/data";

const Home = () => {
  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

  return (
    <div>
      <div>
        <header>
          <h1>HOSPİTAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div>
                <img
                  style={{ background: "aqua" }}
                  src="{dr.doctorImg}"
                  alt=""
                  width="180px"
                  height="150px"
                />
                <h4
                  style={{ background: "aqua", borderLeft: "10px solid blue" }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
