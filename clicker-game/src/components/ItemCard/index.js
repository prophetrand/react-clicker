import React from "react";
import "./style.css";

function ItemCard(props) {
    let mainImage = props.image;
    return (
        <div className="click-item">
            <img src={props.image} />
            {/* <div className="img-container" style={{backgroundImage: `url(${mainImage}`}}>
            </div> */}
        </div>
    )
}

export default ItemCard;