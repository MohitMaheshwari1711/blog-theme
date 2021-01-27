import React from 'react';
import { NavLink } from 'react-router-dom';

import getDate from '../Helper';
import './Card.css';

export default function Card({ title, userImage, thumbnailUrl, date, details, username, id }) {


    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 120) + "..." : str;
    }


    return (
            <NavLink className="feature-container" to={{ pathname: `/details/${id}` }} style={{textDecoration: 'none'}}>
                <img src={thumbnailUrl} alt="Flexbox Feature" />
                    <div style={{ width: '10%' }}>

                </div>
                <div style={{ width: '60%' }}>
                    <div>
                        <h2>{title}</h2>
                        <p>{truncate(details)}</p>
                    </div>
                    <div className="wrapper">
                        <img src={userImage} className="image--cover" alt='...' />
                        <div style={{ display: 'grid' }}>
                            <span className='username'>{username}</span>
                            <span className='date'>{getDate(date.seconds)}</span>
                        </div>
                    </div>
                </div>
            </NavLink >
    )
}





