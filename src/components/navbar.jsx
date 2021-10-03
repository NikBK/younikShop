import React from "react";
import "./compStyles.css";

const navbarItems = ['Women', 'Premium', 'Designer', 'Shoes', 'Handbags', 'Accessories', 'Plus', 'Maternity', 'Kids', 'Sale', '|', 'Brands', 'Goody Boxes', 'Rescues'];

const NavItem = ({ name }) => {
    return <>
        <div className='navbar-item'>{name}</div>
    </>
}

const NavBar = () => {
    return <>

        <div id='navbar'>
            {navbarItems.map((item, ind) => {
                return <NavItem key={ind} name={item} />
            })}
        </div>

    </>
}

export default NavBar;