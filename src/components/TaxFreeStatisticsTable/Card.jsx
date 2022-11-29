import { Box, Container, Grid, Typography } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
let cards = [
    { 
        name:"Jami TaxFree",
        src:"./Images/All.png",
        statistic:1.5,
        status:"mlrd",
        color:"#325ECD"
    },
    { 
        name:"Tasdiqlangan",
        src:"./Images/Success.png",
        statistic:300.6,
        status:"mln",
        color:"#12B903"
    },
    { 
        name:"Qisman tasdiqlangan",
        src:"./Images/chart.png",
        statistic:31.2,
        status:"mln",
        color:"#FD9717"
    },
    { 
        name:"Rad etilgan",
        src:"./Images/Failed.png",
        statistic:1.5,
        status:"mlrd",
        color:"#CA0218"
    },
    { 
        name:"Muddati o’tib ketgan",
        src:"./Images/block.png",
        statistic:1.5,
        status:"mlrd",
        color:"#000000"
    },
    { 
        name:"Murojaat etilmagan",
        src:"./Images/x.png",
        statistic:1.5,
        status:"mlrd",
        color:"#DBB491"
    },
]
const Card = () => {
    return (
        <Container maxWidth="xl">
            <Grid container columns={12} justifyContent="space-between">
               {
                 cards.map((arr , ky)=>{
                   return(
                    <Grid xs={1.8}>
                    <Box sx={{
                        height: "140px",
                        background: "#FFFFFF",
                        boxShadow: "0px 0px 15px rgba(160, 160, 160, 0.1)",
                        borderRadius: "20px",
                        // padding:"20px",
                        color:arr.color
                    }}>
                       <Box sx={{height:"60px", display:"flex", alignItems:"center"  , p:"0 20px"}}>
                       <img src={arr.src} alt="" style={{ width: "20px", height: "20px" }} />
                       <Typography
                         sx={{
                            fontWeight: 500,
                            fontSize: "18px",
                            pl:"15px"
                        }}
                       >{arr.name}</Typography>
                       </Box>
                       <Typography
                       sx={{
                       textAlign:"center",
                       padding:"8px 0",
                       fontSize:"25px",
                       fontWeight:700
                    }}
                       >
                        {arr.statistic} {arr.status}
                       </Typography>
                    </Box>
                </Grid>
                     )
                })
               }
            </Grid>
        </Container>
    );
}

export default Card;
