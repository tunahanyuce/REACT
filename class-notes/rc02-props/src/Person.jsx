import React from "react";
import Message from "./Message";

const Person = (props) => {
  console.log(props);

  //!dest
  const { img, name, tel } = props.kisi;

  return (
    <div>
      <h1>{name}</h1>

      <img src={img} alt="" />
      <p>{tel} </p>
      <Message isim={name} />
    </div>
  );
};

export default Person;
