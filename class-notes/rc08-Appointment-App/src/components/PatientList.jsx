import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ hastalar, setHastalar }) => {
  return (
    <div>
      {hastalar.map((patient) => (
        <div
          className={patient.isDone ? "trueStil" : "falseStyle"}
          key={patient.id}
        >
          <div>
            <h2>{patient.patientName} </h2>
            <h4>{patient.day} </h4>
            <h3>{patient.myDoctor} </h3>
          </div>
          <FaTimesCircle
            onClick={() =>
              setHastalar(hastalar.filter((b) => b.id !== patient.id))
            }
            style={{ color: "red" }}
          />
        </div>
      ))}
    </div>
  );
};

export default PatientList;
