import React from "react";
import "./compStyles.css";

const Offer = ({ percent }) => {
    return <>
        <div className='offer-circle'>
            <div className='offer-percent-text'>SHOP</div>
            <div className='offer-percentage'>{percent}</div>
            <div className='offer-percent-text'>OFF</div>
        </div>
    </>
}

const OfferBox = () => {
    return <>

        <div id='offer-container'>
            <div id='offer-message-box'>
                <div id='offer-message-heading'>Up to 50% Off</div>
                <div id='offer-message-details'>Save on your first order with sign up <span className='offer-links'>Details</span></div>
                <div id='offer-message-shopnow'><span className='offer-links'>SHOP NOW</span></div>
            </div>
            <div id='offer-percentage-box'>
                <Offer percent='20%' />
                <Offer percent='30%' />
                <Offer percent='40%' />
                <Offer percent='50%' />
            </div>
        </div>

    </>
}

export default OfferBox;