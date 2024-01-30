import React from "react";
import { useState,useEffect } from "react";
import Styles from './Navbb.module.css'

function Navbb () {   
const [clock,setClock] = useState(0)
const [choose,setChoose] = useState(false)
const [day,setDay] = useState(0)
const [hr,setHr] = useState(0)
const [min,setMin] = useState(0)
const [sec,setSec] = useState(0)
var [s,sets] = useState(0)

var timer;
 
    
useEffect(()=>{
    setDay(Math.floor(clock/86400));
    (Math.floor(clock % 3600) > 3600) ? setHr(Math.floor(clock % 3600)) : setHr(0);
        setMin(Math.floor(clock % 3600 / 60));
    setSec(Math.floor(clock % 3600 % 60));
    
    if(choose==true){
timer = setInterval(()=>{
    setClock(clock-1)
    if(clock===0){
        setClock(0)
    }
},1000)
} else{
    clearInterval(timer)
}

return()=>clearInterval(timer)

})

const clickme=()=>{
    
 setChoose(true)
 
}

    return(
        <>
            <div className={Styles.circle}>
                <h1>dy:{day}<br></br>hr:{hr}<br></br>min:{min}<br></br>sec:{sec}</h1>
    <input maxLength={5} type="clock" value={clock} onChange={(e)=> {setClock(e.target.value)}} name="clock" /> <br></br>
    <button onClick={clickme}>Check</button>
    </div>
    </>
    )
}

export default Navbb;