import React from 'react';

const Orders = (props) => {
    return (
        <div>
        <p onClick={(e) => props.consoleLogText(e.target.textContent)}>Order: {props.order}</p>
        </div>
    )
}

export default Orders;