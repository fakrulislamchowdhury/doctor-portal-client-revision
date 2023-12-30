import React from 'react';
import Grid from '@mui/material/Grid';
import chair from './../../../images/chair.png';
import bg from './../../../images/bg.png';
import { Box, Button, Container, Typography } from '@mui/material';

const BannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 550
}

const Banner = () => {
    return (
        <Container style={BannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} sx={{ textAlign: 'left' }} style={verticalCenter}>
                    <Box>
                        <Typography variant='h4'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'justify ', my: 5, fontSize: 14, color: 'grey', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur impedit, error ab odio dignissimos amet sapiente delectus reiciendis expedita, culpa esse sed eaque eum! Accusantium laudantium aperiam impedit.
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: "#5CE7ED" }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{ width: '550px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;