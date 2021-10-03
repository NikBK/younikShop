import { Apple, FacebookRounded, Instagram, Pinterest, Shop, Twitter } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './compStyles.css';

const company = ['About Us', 'Blog', 'Resale Report', 'Our Impact', 'Newsroom', 'Investors', 'Careers', 'FAQ', 'Return Policy'];
const shop = ['Women', 'Kids', 'Juniors', 'Designer', 'Maternity', 'Plus', 'Shoes', 'Handbags', 'Accessories'];
const brands = ['J.Crew', 'Ann Taylor LOFT', 'Banana Republic', 'BCBGMAXAZRIA', 'Lululemon Athletica', 'Talbots', 'Free People', 'Lilly Pulitzer', 'Madewell', 'Shop All Brands'];
const more = ['Goody Boxes', 'Rescues', 'Gift Cards', 'Sell on Thredup', 'Order a Clean Out Kit', 'Payouts'];

const SocialMediaIcons = () => {
    return <>

        <div>
            <FacebookRounded sx={{ fontSize: "30px" }} className='circle-icon' />
            <Instagram sx={{ fontSize: 30 }} className='circle-icon' />
            <Pinterest sx={{ fontSize: 30 }} className='circle-icon' />
            <Twitter sx={{ fontSize: 30 }} className='circle-icon' />
        </div>

    </>
}

const Social = () => {
    return <>

        <div id='social'>

            <div id='connect'>
                CONNECT WITH US
                <SocialMediaIcons />
            </div>

            <div id='app-store'>
                GET THE APP
                <Button variant="contained" color='success' style={{ padding: '0 2px', margin: 4 }} >
                    <Apple sx={{ fontSize: "30px" }} />
                    <div>
                        <span style={{ fontSize: '8px' }}>Download on the</span>
                        <br />
                        <span style={{ fontSize: '12px' }}>App Store</span>
                    </div>
                </Button>
                <Button variant="contained" backgroundColor='black' style={{ padding: '0 2px', margin: 4 }}  >
                    <Shop sx={{ fontSize: "30px" }} />
                    <div>
                        <span style={{ fontSize: '8px' }}>GET IT ON</span>
                        <br />
                        <span style={{ fontSize: '12px' }}>Google Play</span>
                    </div>
                </Button>
            </div>

        </div>

    </>
}

const Footer = () => {
    return <>

        <div id='footer'>

            <Social />
            <div id='company'>
                <h5>THE COMPANY</h5>
                {
                    company.map((item, ind) => {
                        return <div key={ind}>{item}</div>
                    })
                }
            </div>
            <div id='shop'>
                <h5>SHOP DEPARTMENTS</h5>
                {
                    shop.map((item, ind) => {
                        return <div key={ind}>{item}</div>
                    })
                }
            </div>
            <div id='brands'>
                <h5>SHOP BRANDS</h5>
                {
                    brands.map((item, ind) => {
                        return <div key={ind}>{item}</div>
                    })
                }
            </div>
            <div id='more'>
                <h5>MORE WAYS TO SHOP</h5>
                {
                    more.map((item, ind) => {
                        return <div key={ind}>{item}</div>
                    })
                }
            </div>

        </div>

    </>
}

export default Footer;