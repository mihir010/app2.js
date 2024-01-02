import React, { useState } from "react";

export default function EditCard(props) {
  const [details, setDetails] = useState({
    first_name: props.first_name,
    last_name: props.last_name,
    id: props.id,
    pfp: props.avatar,
  });

  const saveChanges = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }} key={props.id}>
        <img src={props.pfp} className="card-img-top" alt="..." name="avatar" />
        <div className="card-body">
          <h5 className="card-title" style={{ display: "flex" }}>
            <p type="text" className="card-text" name="first_name">
              {props.first_name}
            </p>
            &nbsp;
            <p type="text" className="card-text" name="last_name">
              {props.last_name}
            </p>
          </h5>
          <p type="text" className="card-text" name="email">{props.email}</p>
          <p type="text" className="card-text" name="id">{props.id}</p>
          <button onClick={saveChanges} className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
