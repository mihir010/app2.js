import React, {useState} from "react";
import EditCard from "../Components/EditCard";
import axios from 'axios';

export default function Edit() {
  const [search, setSearch] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = () => {
    console.log("hi");
    axios
      .get(`http://localhost:5000/emp/${search}`)
      .then((res) => {
        console.log(res.data);
        setContent(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(`No employee with Employee id ${search} exists`);
      });
  };

  const [details, setDetails] = useState({first_name:content.first_name, last_name:content.last_name, email:content.email});
  const submitChanges = () =>{
    console.log("inside submit changes");
    axios.put(`http://localhost:5000/emp/${search}`, {first_name:details.first_name, last_name:details.last_name, email:details.email}).then((res)=>{
      console.log(res);
      alert("changes updated successfully");
    }).catch((err)=>{
      alert("error updating data: "+ err);
    })
  }

  const resetChanges = () =>{
    setDetails(content);
  }


  const onChange = (e) =>{
    setDetails({...details, [e.target.name]: e.target.value})
  }
  
  return (
    <>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={onSubmit}>Search</button>
    {
      content !== "" ? (<div>
        <div>
          {content !== "" ? (
            <EditCard
              email={details.email}
              pfp={details.avatar}
              first_name={details.first_name}
              last_name={details.last_name}
              id={details.id}
              key={details.id}
            />
          ) : (
            ""
          )}
        </div>
        <div>
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
        <button type="submit" className="btn btn-primary" onClick={submitChanges}>
          Submit
        </button>
        &nbsp;
        <button type="reset" className="btn btn-primary" onClick={resetChanges}>
          Reset
        </button>
      </form>
        </div>
      </div>) : ""
    }
      
    </>
  );
}
