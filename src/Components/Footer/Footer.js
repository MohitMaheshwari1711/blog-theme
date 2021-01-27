import React from 'react';
import { NavLink } from "react-router-dom";

import './Footer.css';

export default function Footer() {
    return (
            <div className="footer">
                <div>
                    <p style={{ color: 'black', fontfamily: "Roboto Condensed, sans-serif" }}>
                         Writen and coded by 
                        <NavLink to="https://www.maheshwari-mohit.in">Mohit Maheshwari</NavLink>.
                    </p>
                </div>
                <div>
                    <p style={{ color: 'black', fontfamily: "Roboto Condensed, sans-serif" }}> 
                        Inspired from 
                        <NavLink to="https://blog.logrocket.com/">Log Rocket</NavLink>.
                    </p>
                </div>
            </div>
    )
}
