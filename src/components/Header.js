import React from 'react';
import './Header.css'

const Header = ({ htext, hexpand }) => {
    return (
        <div className="headcontainer">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`headimage ${hexpand ? 'headimage-expand' : 'headimage-contract'}`} alt="headimage"></img>
            <h1 className="head-text">{htext}</h1>

        </div>
    )
}

export default Header;