import React from "react";

function Card(props){
    return(
        <div className="cards">
            <div className="card">
                <img src={props.src} alt="movie thumbnail" className="card_img" />
                <div className="cardInfo">
                    <span className="cardCatg"> A Netflix Orignal Series </span>
                    <h3 className="cardTitle"> {props.sname} </h3>
                    <a href={props.link} target="_blank">
                        <button>WATCH NOW</button>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Card;