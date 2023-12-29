import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from "./../../../images/fluoride.png";
import cavity from "./../../../images/cavity.png";
import whitening from "./../../../images/whitening.png";



const services = [
    {
        name: 'fluoride Treatement',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eos!",
        img: fluoride
    },
    {
        name: 'cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eos!",
        img: cavity
    },
    {
        name: 'Teeth whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eos!",
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={{ marginTop: "50px" }}>
                <Typography variant="h6" component="div" color="text.primary">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" style={{ marginTop: "20px", fontWeight: "bold" }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service
                                key={service.name}
                                service={service}
                            >
                            </Service>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;