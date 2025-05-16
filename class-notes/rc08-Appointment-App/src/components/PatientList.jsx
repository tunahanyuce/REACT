import React from "react";

const PatientList = ({hastalar,setHashalar}) => {
console.log(hastalar);

  return(
     <div>
        {
            hastalar.map((patient)=>(
                <div>
                    <div>
                        <h2>{patient.patientName}</h2>
                        <h4>{patient.day}</h4>
                        <h3>{patient.myDoctor}</h3>
                    </div>
                </div>
            ))
        }
     </div>
)
};

export default PatientList;
