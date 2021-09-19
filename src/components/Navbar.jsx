import React from 'react';
import {Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';

// import icon from '../images/cover.jpg'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar  size="large"/>
                <Typography.Title level={2} className="logo" >
                    <Link to="/">Freetech Hub</Link>
                </Typography.Title>
            </div>
            
        </div>
    )
}

export default Navbar
