import { Button } from "@mui/material";
import React from "react";
import './compStyles.css';

const NewArrival = () => {
    return <>

        <div id='new-arrival-container'>

            <div id='new-arrival-textBox'>
                <div id='new-arrival-heading'>NEW ARRIVALS DAILY</div>
                <div id='new-arrival-title'>The Fall Shop</div>
                <div id='new-arrival-content'>Ready for the fall closet of your dreams? The one-stop shop for all your seasonal essentials are back.</div>
                <Button variant='outlined' id='new-arrival-btn' >TAKE ME TO FALL</Button>
            </div>

            <div id='new-arrival-imageBox'>
                <img width='100%' height="100%" src="https://cf-assets-clover-app.thredup.com/uploads/2021-09-23/092521-pwa-primary-fallShop-fc836564.jpg" alt="New arrival image" />
            </div>

        </div>

    </>
}

export default NewArrival;