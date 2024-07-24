import React, {useContext,useRef,useState}from "react";
import { ThemeContext } from "./ContextApi";
 const Theme=()=>{
    let [state,setState]=useState(false)
    let{Dark,light}=useContext(ThemeContext)
    let ChangeRef=useRef()
    let handleChange=()=>{
        setState(!state)
        if(state===false){
            ChangeRef.current.style.background=Dark.background
        }
        else{
            ChangeRef.current.style.background=light.background
            //hii
        }
    }
    return(
        <div>
            <h1 ref={ChangeRef}>I AM THEME CHANGER</h1>
            <button onClick={handleChange}>{state ?"Dark":"light"}</button>
        </div>
    )
 }
 export default Theme