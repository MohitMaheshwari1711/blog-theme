import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import db from '../../firebase';
import getDate from '../Helper';
import './BlogDetails.css';



export default function BlogDetails() {

    const { id } = useParams();
    const [blogData, getBlogData] = useState({});

    useEffect(() => {
        db.collection("blogs").doc(id).get().then(
            doc => {
                getBlogData({
                    ...doc.data(),
                    date: doc.data().date.seconds
                });
            }
        );
    }, [])

    return (
        <section className="features">
            <div className='blog-details'>
                <div className="wrapper-details">
                    <div className='image-container-details'>
                        <img src={blogData.userImage} className="image--cover-details" alt='...' />
                    </div>
                    <div style={{ display: 'grid' }}>
                        <span className='username-details'>{blogData.username}</span>
                        {
                            blogData.date && (
                                <span className='date-details'>{getDate(blogData.date)}</span>
                            )
                        }
                    </div>
                </div>
                <div className='blog-container'>
                    <div style={{ width: '78%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h1>{blogData.title}</h1>
                        {
                            blogData.subtitle === "" ? <div style={{ height: '1rem' }}></div> : <h2>{blogData.subtitle}</h2>
                        }
                    </div>
                    <div>
                        <img src={blogData.thumbnailUrl} className='featured-image img-fluid' alt='...' />
                        <div style={{ width: '78%', marginLeft: 'auto', marginRight: 'auto' }}>
                            { blogData.details &&
                                (
                                    blogData.details.map(
                                        (val, index) => {
                                            if (typeof (val) === 'string') {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <p>{val}</p>
                                                        <br />
                                                    </React.Fragment>
                                                )
                                            } else {
                                                if (val['subtitle']) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <h1>{val['subtitle']}</h1>
                                                        </React.Fragment>
                                                    )
                                                } else if (val['ul']) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <ul>
                                                                {
                                                                    val['ul'].map(
                                                                        (val, ind) => {
                                                                            return (<li key={ind}>{val}</li>)
                                                                        }
                                                                    )
                                                                }
                                                            </ul>
                                                            <br />
                                                        </React.Fragment>
                                                    )
                                                }
                                            }
                                        }
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
