import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Components/Card';

export default function Home() {
    const [content, setContent] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:5000/emp").then((res)=>{
            setContent(res.data);
            // console.log(res);
        }).catch((err)=>{
            console.log("error fetching db: " + err);
        })
        // console.log(content);
    }, [content]);
  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        {Array.from(content).map((e)=>{
            return (
                <Card email = {e.email} pfp = {e.avatar} first_name = {e.first_name} last_name = {e.last_name} id = {e.id}/>
            )
        })}
    </div>
    </>
  )
}
