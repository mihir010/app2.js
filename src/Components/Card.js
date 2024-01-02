import React from "react";
import axios from "axios";

export default function Card(props) {
  const fireEmp = () =>{
    axios.delete(`http://localhost:5000/emp/${props.id}`).then(()=>{
      alert(`Employee#${props.id} has been fired`);
    }).catch((err)=>{
      alert("deleting employee failed: " + err);
    })
  }

  return (
    <>
      <div className="card" style={{width: "18rem"}} key={props.id}>
        <img src={props.pfp} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.first_name + " " + props.last_name}</h5>
          <p className="card-text">{props.email}</p>
          <p className="card-text">{props.id}</p>
          <button onClick={fireEmp} className="btn btn-primary">
            Fire
          </button>
        </div>
      </div>
    </>
  );
}
