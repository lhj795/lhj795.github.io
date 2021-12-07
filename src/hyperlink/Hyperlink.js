import React from "react";
import { Link } from "react-router-dom";

export default function Hyperlink() {
    return (
        <div  style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "50vw", height: "90vh", display: "flex", flexDirection: "row",}}>
                <p>
                    <i> Send to: </i> 
                    <Link style={{marginLeft: "22px",}} to='/technocat1'> techno_cat@catmail.com </Link>
                </p>
            </div>
        </div>
    )
}