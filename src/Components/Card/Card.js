import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export default function Card({ title, userImage, thumbnailUrl, subtitle, time, details, username, id }) {
    return (
            <Link className="feature-container" to={{ pathname: `/details/${id}` }} style={{textDecoration: 'none'}}>
                <img src={userImage} alt="Flexbox Feature" />
                <div style={{ width: '10%' }}>

                </div>
                <div style={{ width: '60%' }}>
                    <div>
                        <h2>{title}</h2>
                        <p>Learn how to make a toast component with animations using React, Framer Motion, and Zustand, plus some custom Hooks...</p>
                    </div>
                    <div class="wrapper">
                        <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image--cover" />
                        <div style={{ display: 'grid' }}>
                            <span className='username'>{username}</span>
                            <span className='date'>{time}</span>
                        </div>
                    </div>
                </div>
            </Link >
    )
}





