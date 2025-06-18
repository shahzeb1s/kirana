import React from "react";
import { useState } from "react";
import "./HeroSection.css";
import heroimg1 from "./image/heroimg1.webp";
import heroimg2 from "./image/Hero-Section-Mockup.webp";

function HeroSection({herostyle,setHeroStyle}) {
    return (
      <div className="herodiv">

        <div className="hero-banner">
           <div className="hero-overlap">
            <img className="hero-banner-img" src={heroimg1} alt="" width="600" height="270"/>
            <h1 className="hero-banner-text">
              <span className="hero-banner-sub1">SHAHZEB</span><br/>
               KIRANA STORE <br/> SOFTWARE<br/>
               <p className="hero-banner-sub2">  Earn more profits and reduce burden with hassle- <br/>free management of billing, suppliers, accounts, inventory, and customers with our advanced Kirana store management software</p>
            </h1>
          </div> 
            <img src={heroimg2}alt="" width="600" height="250" className="hero-banner-img2"/>

        </div>
      </div>
    );
    
        
}

export default HeroSection;