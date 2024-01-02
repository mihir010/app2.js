import React from "react";
import axios from "axios";
import { useState } from "react";

export default function AddEmp() {
    const [content, setContent] = useState({first_name:"", last_name:"", email:"", avatar:"", id:"", });

    const submitForm = () =>{
        axios.post("http://localhost:5000/emp", {
            first_name: content.first_name,
            last_name: content.last_name,
            email: content.email,
            id: content.id,
            avatar: content.avatar
        }).then(()=>{
            alert(`Employee#${content.id} added successfully`);
        }).catch((err)=>{
            alert(`Employee#${content.id} already exists`);
        })
    }

    const onChange = (e) =>{
        setContent({...content, [e.target.name]: e.target.value});
        // console.log(e.target.name);
    }

  return (
    <>
      <form onChange={onChange}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="first_name"
            aria-describedby="emailHelp"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="last_name"
            aria-describedby="emailHelp"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">id</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="id"
            aria-describedby="emailHelp"
            placeholder="Unique ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">pfp link</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="avatar"
            aria-describedby="emailHelp"
            placeholder="link"
          />
        </div>

        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </form>
    </>
  );
}
