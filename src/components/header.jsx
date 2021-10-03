import { FavoriteBorder, PersonOutline, Search, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./compStyles.css";

const Header = () => {
    return <>

        <div id='header'>
            <div id='logo'>YouNik</div>
            <div className='header-sections'>SHOP</div>
            <div className='header-sections'>SELL</div>
            <div className='header-sections'>ABOUT</div>
            <div id='search-bar'>
                <Search id='search-icon' />
                <input type="text" placeholder='Search' id='search-input' />
            </div>
            <FavoriteBorder id='fav-icon' />
            <PersonOutline id='profile-icon' />
            <ShoppingCart id='cart-icon' />
            <Button variant="contained" disabled>CHECK OUT</Button>
        </div>

    </>
}

export default Header;