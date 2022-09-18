import React from 'react'
import '../App.css';
import login from "../icones/User.png";

function Usersleft(props) {
  return (
          <div className='user' onClick={()=>props.getMsg(props.data)}>
            <div className='d-flex align-items-center'>
         <img src={login} alt='img' className='userimg'/>
          <h6 >{props.data.username}</h6>
          </div>
          <h6><b>⋮</b></h6>
          </div>
  )
}

export default Usersleft