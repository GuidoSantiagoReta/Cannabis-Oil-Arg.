import React from "react";
import "./WhatsApp.css";
import whatsapp from "../../images/whatsapp.png"

const WhatsApp = () =>{
    return(
        
         <a className="whatsapp-icon" href="http://"><img src={whatsapp} alt="icono whatsapp" /></a>
        
    )
}

export default WhatsApp;