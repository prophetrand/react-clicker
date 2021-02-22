import React from "react";
import "./style.css";

function ItemCard(props) {
    // let mainImage = props.image;
    // console.log(props);
    return (
        <div className="click-item">
            <img src={process.env.PUBLIC_URL + props.image} />
            {/* <div className="img-container" style={{backgroundImage: `url(${mainImage}`}}>
            </div> */}
        </div>
    )
}

export default ItemCard;