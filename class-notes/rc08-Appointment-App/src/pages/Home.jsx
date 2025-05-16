import React, { useState } from "react";

import { hastaData, doctorData } from "../helper/Data";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";

const Home = () => {
  console.log(doctorData);

  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

const[flag,setFlag]=useState(true)

  const doctorClick = (dId) => {
    // tamircilerde (setDoctors setHastalar) sıralama önemliyse,(doctors dizisinin tek elemana düşmesi önce olmalı) ilk olmasını istediğimizi, önce kendisine atayıp sonra tamircinin içine yazmalıyız. yoksa hata alırız
    doctors = doctors.filter((a) => a.id === dId);
    setDoctors(doctors);

    setFlag(false)
    setHastalar(hastalar.filter((a) => a.myDoctor === doctors[0].doctorName));
  };

  return (
    <div style={{ display: flag ? "block" : "flex" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  className="doctorBtn"
                  style={{ background: flag ? "aqua" : "lightGreen" }}
                  src={dr.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                  onClick={() => doctorClick(dr.id)}
                />
                <h4
                  style={{
                    background: flag ? "aqua" : "lightGreen",
                    borderLeft: flag ? "10px solid blue" : "10px solid green",
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!flag && <AddPatient doctors={doctors} setHastalar={setHastalar} hastalar={hastalar} />}

      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
