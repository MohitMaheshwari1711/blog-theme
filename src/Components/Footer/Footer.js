import React from 'react';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <p style={{ color: 'black', fontfamily: "Roboto Condensed, sans-serif" }}> Writen and coded by <a href="https://www.maheshwari-mohit.in" target="_blank">Mohit Maheshwari</a>.</p>
            </div>
            <div>
                <p style={{ color: 'black', fontfamily: "Roboto Condensed, sans-serif" }}> Inspired from <a href="https://blog.logrocket.com/" target="_blank">Log Rocket</a>.</p>
            </div>
        </div>
    )
}
