
import React from 'react';
import './TagPro.css';
const allList = [
    "colgate","babool","miswake","closeUp","Brush","Baam","parashut","nihar shanti","powder","20 20","parle","monaco",
   
]

function TagPro({ onClose }) {
    return (
        <div className="tagpro-overlay">
            <div className="list-container">
                <button className="close-btn" onClick={onClose}>&times; </button>
                <h2 className='list-header'>Product List</h2>
                <div className="list-grid ">
               
                
                    <ul className="list-item-container">
                        <li className="list-item">colgate</li>
                        <li className="list-item">babool</li>
                        <li className="list-item">miswake</li>
                        <li className="list-item">closeUp</li>
                        <li className="list-item">Brush</li>
                        <li className="list-item"></li>
                        <li className="list-item"></li>
                        <li className="list-item"></li>
                        <li className="list-item"></li>
                        <li className="list-item"></li>
                    </ul>
                    <ul className="list-item-container">
                        <li className='list-item'>Baam</li>
                        <li className='list-item'>parashut</li>
                        <li className='list-item'>nihar shanti</li>
                        <li className='list-item'>powder</li>
                        <li className='list-item'>ponds</li>
                        <li className='list-item'>Everyuth scrub</li>
                        <li className='list-item'>Mysure saop</li>
                        <li className='list-item'>glysrin</li>
                        <li className='list-item'>Honey</li>
                        <li className='list-item'>dermi cool</li>
                        <li className='list-item'>vaseline</li>
                        <li className='list-item'>kash king</li>
                        <li className='list-item'>cosmo silky</li>
                        <li className='list-item'>Gulab jal</li>
                        <li className='list-item'>bajaj Oil</li>
                    </ul>
                    <ul className="list-item-container">
                        <li className='list-item'>Clinic plus</li>
                        <li className='list-item'>Vatika</li>
                        <li className='list-item'>chick</li>
                        <li className='list-item'>head & sholder</li>
                        <li className='list-item'>sun silk</li>
                        <li className='list-item'>Dove</li>
                    </ul>
                    <ul className="list-item-container">
                        <li className='list-item'>20 20</li>
                        <li className='list-item'>parle</li>
                        <li className='list-item'>monaco</li>
                        <li className='list-item'>krack jack</li>
                        <li className='list-item'>jim jam</li>
                        <li className='list-item'>Happy Happy</li>
                        <li className='list-item'>Cream Bisciut</li>
                        <li className='list-item'>good Day</li>
                        <li className='list-item'>tiger</li>
                        <li className='list-item'>parle Gold</li>
                        <li className='list-item'>Marie</li>
                        <li className='list-item'>Googly</li>
                        <li className='list-item'>Jeera</li>
                        <li className='list-item'>Champ</li>
                    </ul>
                    <ul className="list-item-container">
                        <li className='list-item'>No.1</li>
                        <li className='list-item'>santoor</li>
                        <li className='list-item'>Lux</li>
                        <li className='list-item'>Life Boy</li>
                        <li className='list-item'>Nirma</li>
                        <li className='list-item'>Tip top</li>
                        <li className='list-item'>Aaj Kal</li>
                        <li className='list-item'>Wheel</li>
                        <li className='list-item'>Rin</li>
                        <li className='list-item'>Tide</li>
                        <li className='list-item'>Surf Exel</li>
                        <li className='list-item'>Tide</li>
                        <li className='list-item'>Detol</li>
                        <li className='list-item'>Vim</li>
                        <li className='list-item'>Fena</li>
                        <li className='list-item'>sargam</li>
                        <li className='list-item'>Ariel</li>
                        <li className='list-item'>Saphala</li>
                        <li className='list-item'>Dove</li>
                    </ul>
                    <ul className="list-item-container">
                        <li className='list-item'>Goldex</li>
                        <li className='list-item'>cello Stylo</li>
                        <li className='list-item'> fingrip</li>
                        <li className='list-item'>top Tip </li>
                        <li className='list-item'>elkos</li>
                        <li className='list-item'>scale</li>
                        <li className='list-item'>sketch</li>
                        <li className='list-item'>water color</li>
                        <li className='list-item'>pencil color</li>
                    </ul>
                </div>
        
               
                    
                </div>
            </div>
)}

export default TagPro;