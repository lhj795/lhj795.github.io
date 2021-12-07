import React from "react";
import { Link } from "react-router-dom";

export default function TechnoCat1() {
    return (
        <div  style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "50vw", height: "90vh", display: "flex", flexDirection: "row",}}>
                <p>
                    <br/>
                    <i> From: </i> 
                    <Link style={{marginLeft: "45px",}} to='/technocat2'> me@catmail.com </Link>
                    <hr style={{width: "50vw"}}/>
                </p>
            </div>
        </div>
    )
}