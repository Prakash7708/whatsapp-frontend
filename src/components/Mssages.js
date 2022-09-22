import React from 'react'
import '../App.css';
import { useEffect, useState} from "react";
import axios from "../axios";
function Mssages(props) {

const [items, setItems] = useState([]);
useEffect(() => {
        getMessages()
      },[]);

let getMessages = async () => {
    try {
    // const res= await axios.get(`/getmsgs/${props.data.sendername}`,{
const res= await axios.get("/getmsgs",{
        headers: {
          'Authorization': `${localStorage.getItem("react_app_token")}`,
          'receiver':`${props.data.receivername}`
        }
      });
      setItems(res.data)
      }catch(err){
        console.log(err)
      }}


     

  return (
    <>
<div className="rightnav">
          <h6>Sender/You:{props.data.receivername}</h6>
          <b>Message From:{props.data.sendername}</b>
        </div>
            <div className="msgdiv">
          
            {
                items.map((input)=>{
                    return input.receivername===props.data.sendername &
                        input.sendername===props.data.receivername ?
                       <p> <p className={input.sendername===props.data.sendername ? "h6":""}>

                        <p className='back'>{input.message} <p className='time back'>{input.date}</p></p>

                    </p></p> :
                        input.receivername===props.data.receivername &
                        input.sendername===props.data.sendername  ?
                        <p><p className={input.sendername===props.data.sendername ? "h6":""}>

                       <p className='back'> {input.message} <p className='time back'>{input.date}</p></p>
                       </p></p>:null
                    

                    // <p className={input.sendername===props.data.sendername ? "":"h6"}>
                    //     {input.receivername===props.data.sendername &
                    //     input.sendername===props.data.receivername ?
                    //     input.message:
                    //     input.receivername===props.data.receivername &
                    //     input.sendername===props.data.sendername  ?
                    // input.message :null }<p className='time'>{
                    //     input.receivername===props.data.sendername &
                    //     input.sendername===props.data.receivername ?
                    //     input.date:
                    //     input.receivername===props.data.receivername &
                    //     input.sendername===props.data.sendername ?    
                    // input.date:null}</p></p>
                })
            }

            {/*h6 <p>hellooo<p className="time">6465.76476</p></p> */}
          
          {/* <h6><p>hi dude</p></h6>
        
          <h6 className='h6'><p>hellooo</p></h6>
          <h6><p>hi dude</p></h6> */}
        </div>
        <div className="rightdown">
          
          <form className="searchdown">
            <input
              placeholder="Send Messages......"
              className="form-control"
              onChange={(e) => props.setMsgsend(e.target.value)}
            />
            <button className="btn btn-success" onClick={()=>props.sendData(props.data) & preventDefault()}>Send</button>
            </form>
        </div>
        
    </>
  )
}

export default Mssages