import React from "react";
import { Link } from "react-router-dom";

export default function TechnoCat4() {
    return (
        <div  style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "50vw", height: "90vh", display: "flex", flexDirection: "row",}}>
                <p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <pre style={{fontFamily: "inherit"}}>           have a <Link to="/technocat5">fit</Link> </pre>
                </p>
            </div>
        </div>
    )
}