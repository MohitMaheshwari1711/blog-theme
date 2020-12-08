import React from 'react';
import './BlogDetails.css'


export default function BlogDetails() {
    return (
        <section className="features">
            <div className='blog-details'>
                <div class="wrapper-details">
                    <div className='image-container-details'>
                        <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" class="image--cover-details" />
                    </div>
                    <div style={{ display: 'grid' }}>
                        <span className='username-details'>Mohit Maheshwari</span>
                        <span className='date-details'>6 Dec, 2019</span>
                    </div>
                </div>
                <div className='blog-container'>
                    <div style={{ width: '78%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h1>Implementing animated toasts in React</h1>
                        <h2>Learn how to make a toast component with animations using React, Framer Motion, and Zustand</h2>
                    </div>
                    <div>
                        <img src='https://blog.logrocket.com/wp-content/uploads/2020/12/implementing-animated-toasts-react-nocdn.png' className='featured-image img-fluid' />
                        <div style={{width: '78%', marginLeft: 'auto', marginRight: 'auto'}}>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
