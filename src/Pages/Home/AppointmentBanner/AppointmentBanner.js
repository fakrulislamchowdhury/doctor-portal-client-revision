import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from './../../../images/doctor.png';
import bg from './../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.5)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
};

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} style={{ width: 400, marginTop: '-110px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: "#5CE7ED" }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white', fontWeight: 700 }} >
                            Make an Appointment today
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa debitis rerum, assumenda similique exercitationem atque sed aliquid unde nulla fuga molestiae blanditiis nostrum odit alias maxime ipsam ex aperiam porro?
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: "#5CE7ED" }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default AppointmentBanner;