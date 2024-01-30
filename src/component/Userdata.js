import React, { useState,useEffect } from 'react'
// import Navbar from "./Navbar";
import Styles from './Userdata.module.css';
import { useNavigate } from "react-router-dom"; 

function Userdata () {

    const navigate = useNavigate();

    const [leavetype, setLeavetype] = useState("")
    const [name, setName] = useState("")
    const [empcode, setEmpcode] = useState("")
    const [startdate, setStartdate] = useState("")
    const [enddate, setEnddate] = useState("")
    const [email, setEmail] = useState("")
    const [notes, setNotes] = useState("")

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const logs = () => {
        navigate("/");
      };
    
      const logadmin = () => {
        navigate("/Holiday");
      };

    useEffect(()=>{
        if(!localStorage.getItem('token')){
           navigate('/Login');
        }
    },[])

function saveUser()
{
console.warn({leavetype,name,empcode,startdate,enddate,email,notes});
console.log("log: "+{leavetype,name,empcode,startdate,enddate,email,notes});
let data = {leavetype,name,empcode,startdate,enddate,email,notes}

fetch("http://localhost:5000/mark",{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
}).then((result)=>{
  console.warn("result",result);
//   alert("Data Inserted")
if(result.status===200){
    // navigate('/');
    alert("Leave Applied")
    navigate("/Holiday")
}else{
    alert("Please enter valid details")
  }
})
}

    return(
        <>         
<div className={Styles.heading}>
      <img src="Logo.png" className={Styles.logo} alt="Logo Image" />
      <button className={Styles.headerbutton} onClick={logs}> Logout </button>
      <button className={Styles.headerbutton} onClick={logadmin}> Leave Portal </button>
      </div>
        
        <main>
        <div className={Styles.textarea}> 
         <h3 className={Styles.text}> Apply for Leave </h3>
         <div>
         <div className={Styles.inputfield}>
         <label htmlFor="leavetype"><b className={Styles.alignn}> Type of Leave : </b></label>
  <select name="leavetype" value={leavetype} onChange={(e)=>{setLeavetype(e.target.value)}}>
  <option value="Type of leave">Type of leave</option>
    <option value="Full day Leave">Full day Leave</option>
    <option value="Half day leave">Half day leave</option>
    <option value="Vaction Leave">Vaction Leave</option>
    <option value="Plan Leave">Plan Leave</option>
  </select><br></br>

       <label><b className={Styles.alignn}>Empoyee Name :</b> </label> 
       <input type="text" value={name} placeholder="Employee Name" onChange={(e)=>{setName(e.target.value)}} name="name"/> <br></br>
       <label > <b className={Styles.alignn}>Empolyee code : </b></label> 
       <input type="text" value={empcode} placeholder="Employee Code" onChange={(e)=>{setEmpcode(e.target.value)}} name="empcode"/> <br></br>
       <label> <b className={Styles.alignn} >Email : </b></label> 
       <input type="text" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} name="email"/> <br></br>   
       <label><b className={Styles.alignn}>Start date : </b> </label> 
       <input type="date" min={disablePastDate()} value={startdate} onChange={(e)=>{setStartdate(e.target.value)}} name="startdate"/> <br></br>
       <label><b className={Styles.alignn}>End date : </b></label> 
       <input type="date" min={disablePastDate()} value={enddate} onChange={(e)=>{setEnddate(e.target.value)}} name="enddate"/> <br></br>
       <label><b className={Styles.alignn}>Notes : </b></label> 
       <input type="text" value={notes} placeholder="Leave application notes" onChange={(e)=>{setNotes(e.target.value)}} name="notes"/> <br></br>
       <button type="button" onClick={saveUser} > Submit Leave Application </button>



       </div>

  <br></br>
  
       
   </div>
        </div><br></br><br></br>

        

        </main>
        </>
    )
}

export default Userdata;