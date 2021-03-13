import React from 'react';
import './namecard.css';

const url = "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggest }) => {
    return (
        <a className="link" target="blank" href={`${url}${suggest}`}>
            <div className="name-card">
                <p className="name">{suggest}</p>
            </div>
        </a>
    );
};

export default NameCard;