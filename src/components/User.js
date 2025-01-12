import React from 'react'
import Contacts from "./Contacts"
import { useState } from "react";



const User = ({name}) => {
  const [count,setCount] =useState(10);
console.log(count);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <button className="count-btn" onClick={() =>{
        setCount(c => c+1);
      }}>+

      </button>
      <button className="count-btn" onClick={() =>{
        count<=0?setCount(0):setCount(c => c-1);
      }}>-

      </button>
      <button className="count-btn" onClick={() =>{
        count<=0?setCount(0):setCount(c => c*2);
      }}>Double

      </button>
      <button className="count-btn" onClick={() =>{
        setCount(0);
      }}>Clear

      </button>
      <h2>{name}</h2>
      <h3> Location : Haldwani </h3>
      <div>
        <Contacts/>
    </div>
    <h4>Done</h4>
    </div>
  )
}

export default User
