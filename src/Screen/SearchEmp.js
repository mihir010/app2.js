import React, {useState } from 'react'
import Card from '../Components/Card';
import axios from 'axios';

export default function Home() {

  const [search, setSearch] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = () =>{
    console.log("hi");
    axios.get(`http://localhost:5000/emp/${search}`).then((res)=>{
      // console.log(res.data);
      setContent(res.data);
    }).catch((err)=>{
      console.log(`No employee with Employee id ${search} exists`);
    })
  }

  return (
    <>
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={onSubmit}>Search</button>
      <div>
      {
        content !== "" ? (<Card email = {content.email} pfp = {content.avatar} first_name = {content.first_name} last_name = {content.last_name} id = {content.id}/>) : ""
      }
      </div>
    </div>
    </>
  )
}
