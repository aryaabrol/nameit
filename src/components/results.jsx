import React from 'react';
import NameCard from './namecard';
import './result.css';

const Results = ({ suggestnames }) => {
    const suggestmap = suggestnames.map((suggestname) => {
        return <NameCard suggest={suggestname}></NameCard>
    });
    return (
        <div className="result-container">
            {suggestmap}
        </div>
    );
};

export default Results;