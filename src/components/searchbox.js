import React from 'react';
import './searchbox.css'

const Searchbox = ({ change }) => {
    return (
        <div className="searchcontainer">
            <input onChange={(event) => change(event.target.value)} placeholder="add something" className="box"></input>
        </div>

    );
};

export default Searchbox;