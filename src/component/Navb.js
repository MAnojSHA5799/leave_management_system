import React,{useState} from "react";
import { useEffect } from "react";
import Styles from './Navb.module.css';

function Navb () {
    const [clock,setClock] = useState (0)
    const [choose,setChoose] = useState(false)
    const [choosetwo,setChoosetwo] = useState(true)
    
var timer;

useEffect   (()=>{

    if(choose==true){
        console.log("cccccc",clock)

timer = setInterval(()=>{
    setClock(clock-1);
    if(clock===0){
        setClock(0) 
        
    }
},1000)
} else{
    clearInterval(timer)
}

return()=>clearInterval(timer)

})

const Reset = () =>{
    setClock(0)
    clearInterval(timer)
    setChoose(!true)
    setChoosetwo(true)

}

const abcd =()=>{
    setChoose(true)
    setChoosetwo(false)
}

const defg = ( )=>{
    setChoosetwo(true)
    setChoose(false)
}
    return(
        <>
        <div className={Styles.circle}>
    <input maxLength={3} type="clock" disabled = {choose} value={clock} onChange={(e)=> {setClock(e.target.value)}} name="clock" /> <br></br>
    </div>
    <div className={Styles.txcenter}>           

{
     choosetwo?<button disabled = {choose} onClick={abcd}> Start </button>:
     <button onClick={defg}> Stop </button>
} 

<button disabled = {!choose} onClick={Reset}> Reset</button> 
    </div>
    </>
    )
}

export default Navb;