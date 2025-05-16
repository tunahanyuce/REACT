import React, { useState } from "react";

import { hastaData, doctorData } from "../helper/data";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";

const Home = () => {
  console.log(doctorData);

  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

  return (
    <div>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  className="doctorBtn"
                  style={{ background: "aqua" }}
                  src={dr.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                />
                <h4
                  style={{ background: "aqua", borderLeft: "10px solid blue" }}
                >
                  {dr.doctorName}{" "}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {/* <AddPatient/> */}
      </div>
      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
