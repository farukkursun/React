import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const navigate= useNavigate()
  const { id } = useParams();

  const [kisi, setKisi] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data));
  }, [id]);

  return (
    <div className="container text-center mt-4">
      <h3>{kisi.name}</h3>
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
        alt=""
        width="300px"
      />
      <h4>{kisi.email}</h4>
      <h5>{kisi.phone}</h5>
      <div>
        <button onClick={()=> navigate(-1)} className="btn btn-primary">Go Back</button>
        <button onClick={()=> navigate('/')} className="btn btn-danger">Go Home</button>
      </div>
    </div>
  );
};

export default TeacherDetails;
