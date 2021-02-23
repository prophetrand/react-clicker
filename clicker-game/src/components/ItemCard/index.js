import React from "react";
import "./style.css";

function ItemCard(props) {
    return (
        // onClick function below requires anonymous function to prevent it from being called automatically
        <div className="click-item" onClick={() => props.selectChibi(props.id)}>
            <img src={process.env.PUBLIC_URL + props.image} />
        </div>
    )
}

export default ItemCard;