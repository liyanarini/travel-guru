import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const {img, id, name, title} = props.place;
    return (
        <div key={id} className="card-body">
            <Link to={`/booking/${name}`}>
            <img src={img} alt="" />
            <h4 className="img-title">{title}</h4>
            </Link>
        </div>
    );
};

export default Card;