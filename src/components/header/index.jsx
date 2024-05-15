import React from "react";
import './headerStyle.css';
import {Link} from "react-router-dom";
import Button from "shared/button";

const  Header =() =>{
    return (
        <div className ="header_container">
            <div>
            </div>
                
        <div className ="header_cta_section">
            <ul>
                {nav.map (({to, name}, idx) => (
                <li key ={idx} > 
                <link to={to}> {name} </link>
            </li>
        ))}
    </ul>
    <div>
        <Button  btnName ={"Download App"} outline />
        </div>
        </div>
        </div>
    );
};

export default Header;
    const nav = [
    { 
        name: "contact",
        to: "/contact",
    },
];



    
            
            
                
            


     

       

       