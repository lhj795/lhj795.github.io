import React from "react";
import { Link } from "react-router-dom";

export default function TechnoCat2() {
    return (
        <div  style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "50vw", height: "90vh", display: "flex", flexDirection: "row",}}>
                <p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p> When writing friends an <span> <Link to="/technocat3">email</Link> </span> </p>
                </p>
            </div>
        </div>
    )
}