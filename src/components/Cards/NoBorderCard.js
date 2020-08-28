import React from 'react';

export const NoBorderCard = (props) => {
    return(
    <div className="card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
    )
}