import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './compStyles.css';

const HomeCard = ({ bgColor, title, text, underlinedText, image }) => {
    return <>

        <Card sx={{ width: '32.4%' }} className='home-card' style={{ backgroundColor: bgColor }}>

            <CardActionArea>

                <CardContent style={{ padding: '40px' }}>

                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>

                    <Typography variant="body1" color="text.primary">
                        {text}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div" style={{ textDecoration: 'underline', marginTop: '20px', fontWeight: '550', letterSpacing: '.1rem' }}>
                        {underlinedText}
                    </Typography>

                </CardContent>

                <CardMedia
                    component="img"
                    height="auto"
                    image={image}
                    alt="card-image"
                />

            </CardActionArea>

        </Card>

    </>
}

const HomeCards = () => {
    return <>

        <div id='homecards-container'>

            <HomeCard
                bgColor='rgb(87, 144, 224)'
                title='Pep in Your Step'
                text='Get your boots on and head out for some fall fun.'
                underlinedText='SHOP BOOTS'
                image='https://cf-assets-clover-app.thredup.com/uploads/2021-09-09/boots-6fcedce3.png'
            />

            <HomeCard
                bgColor='rgb(255, 197, 222)'
                title='Thrift this Outfit'
                text='And many more. Meet our new tool for recreating outfits with 100% secondhand. '
                underlinedText='START BUILDING OUTFITS'
                image='https://cf-assets-clover-app.thredup.com/uploads/2021-08-26/merchBlock-thriftTheLook-500dcad1.png'
            />

            <HomeCard
                bgColor='rgb(237, 171, 47)'
                title='Sweet Sweaters'
                text='The best fall classics to snuggle up in (and save big on).'
                underlinedText='SHOP SWEATERS'
                image="https://cf-assets-clover-app.thredup.com/uploads/2021-09-09/merchBlock-sweaters-62f45135.png"
            />

        </div>

    </>
}

export default HomeCards;