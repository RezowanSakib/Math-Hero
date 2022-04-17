import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { serviceID } = useParams();
  const {name}=useParams();
  return (
    <div>
<h2>{name}</h2>
      <button className="btn-primary">Enroll({serviceID})</button>
    </div>
  );
};

export default CheckOut;
