import React from 'react';
import { Container , Box, Typography, Avatar } from '@mui/material';


import helpMe from '../../assets/Png/helpMe.png'
const Footer = () => {
    return (
        <Box sx={{bgcolor:"#F6F6F7" , padding:"15px 0" , borderTop:"2px solid #D7D8DA"}}>
            <Container maxWidth="xl"
            sx={{display: "flex" , justifyContent:"space-between" , alignItems:"center"}}
            >
                 <Box >
                    <Typography
                    sx={{
                        color:"#777B82",
                        fontSize:"16px",
                        fontWeight:"400"
                    }}
                    >
                    © 2021 Государственный налоговый комитет. 
                    </Typography>
                    <Typography
                    sx={{
                        paddingTop:"5px",
                        color:"#777B82",
                        fontSize:"16px",
                        fontWeight:"400"
                    }}
                    >
                    Электронные налоговые услуги: портал электронных <br /> государственных услуг налоговых органов.
                    </Typography>
                 </Box>
                 <Box 
                 sx={{display: "flex" , justifyContent:"space-between" , alignItems:"center"}}
                 >
                    <Avatar sx={{width:"50px" , height:"50px"}} alt='help me' src={helpMe} />
                    <Typography sx={{pl:"10px" , fontWeight:"400" , fontSize:"20px"}}>
                    Помощь и поддержка
                    </Typography>
                 </Box>
            </Container>
        </Box>
    );
}

export default Footer;
