import React from 'react';
import './Navbar.css';
import KiranaLogo from "./image/logoKirana.png"
import TagPro from "./TagPro";
import { useState } from 'react';
function Navbar({ onCategorySelect ,onListClick}) {
     const [showTagPro, setShowTagPro] = useState(false);
    const handleAllProducts = (e) => {
        e.preventDefault();
        onCategorySelect("all"); // Use "all" as a special identifier
    };
    const handleListClick = (e) => {
        e.preventDefault();
        onListClick();
    };
    
    return (
        <div className='navdiv'>

        <nav>
        <a href='#Home' onClick={() => onCategorySelect(null)}>
             <img src={KiranaLogo} className='navlogo' />
        </a>
            <a href="#Home" className='same'onClick={() => onCategorySelect(null)}>Home</a>
            <a href='#List' onClick={handleListClick}>List</a>
            <div className="dropdown ">
            <div className="dropdown-title">
                <a href="#Cart" className='same ' >Category</a>
                <img src ={require("./runimage/menu.png")} className='menuimg'/>
            </div>
                <div className="dropdown-menu">
            <a href="#favorite" className='favorite'onClick={handleAllProducts}>All</a>
                    <a href="#grocery" onClick={() => onCategorySelect("Grocery")}>Grocery</a>
                    <a href="#Ice-Cream" onClick={() => onCategorySelect("Ice Cream")}>Ice Cream</a>
                    <a href="#Stationary" onClick={() => onCategorySelect("Stationary")}>Stationary</a>
                    <a href="#snacks" onClick={() => onCategorySelect("Snacks")}>Snacks</a>
                    <a href="#Toys" onClick={() => onCategorySelect("Toys")}>Toys</a>
                </div>
            </div>
        </nav>
         {showTagPro && <TagPro onClose={() => setShowTagPro(false)} />}
        </div>
    );
}

export default Navbar;