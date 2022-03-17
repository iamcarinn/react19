import React from "react";

const ListItem = ({text}) => {

    return (
        <div className='list-item-container'>
            <li className="li">{text}</li>
        </div>
    )
}

export default ListItem;