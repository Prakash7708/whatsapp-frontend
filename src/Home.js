import React from "react";
import "./App.css";
import Usersleft from "./components/Usersleft";
import Messages from './components/Mssages'
import login from "./icones/User.png";
import msg from "./icones/msg.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./axios";
function Home() {
 // let users=[{n:1},{n:2},{n:3}]
 const [msgsend, setMsgsend] = useState([]);
  let params = useParams();
  const [items, setItems] = useState([]);
  const [msgs, setMsgs] = useState([]);
  const receivers = items.filter((n) => n.username !== `${params.id}`);
  useEffect(() => {
    getUsers();
  });

  let getUsers = async () => {
    try {
      const res = await axios.get(`/allusers/${params.id}`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      //alert(res.data)
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  let getMsg = async (data) => {
    //e.preventDefault();
     setMsgs([{sendername:`${params.id}`,
               receivername:data.username}])
  }
  let sendData = async (data) => {
     //alert(data.receivername)
     e.preventDefault();
     let postmsg={
         sendername:data.sendername,
         receivername:data.receivername,
         message:msgsend,
         date:new Date()
 }
 await axios.post(`/msg`,postmsg,{
  headers: {
    'Authorization': `${localStorage.getItem("react_app_token")}`
  }});
     //alert(postmsg.message)
    // getMsg()
    setMsgsend("")
  }

  return (
    <div className="row">
      <div className="col-lg-4 left">
        <div>
          <div className="admin">
            <img src={login} alt="img" className="homeimg" />
            <h4>{params.id}</h4>
            <img src={msg} alt="img" className="msgicon" />
            <h6>
              <b>⋮</b>
            </h6>
          </div>
          <input
            type={"search"}
            className="form-control"
            placeholder="Search"
          ></input>
        </div>
        {receivers.map((input) => {
          return <Usersleft data={input} getMsg={getMsg} />;
        })}
      </div>
      <div className="col-lg-8 right">
         
     {
      msgs.map((input)=>{
        
        return <Messages data={input} setMsgsend={setMsgsend} sendData={sendData}/>
      })
     }



      {/*  <div className="rightnav">
          <h6>Name</h6>
          <b>last seen</b>
        </div>
         <div className="msgdiv">
          <h6 className="h6">
            <p>
              hellooo<p className="time">6465.76476</p>
            </p>
          </h6>
          
        </div>
        <div className="rightdown">
          <div className="searchdown">
            <input
              type={"text"}
              placeholder="Send Messages......"
              className="form-control"
            />

            <button className="btn btn-success">Send</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
