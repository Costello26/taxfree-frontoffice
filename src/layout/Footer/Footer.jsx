import React from 'react';
import { Container , Box, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import helpMe from '../../assets/Png/helpMe.png'
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const Footer = () => {
    const { selectedLang } = useSelector(state => state.lang)

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
                    {globalLocales.footer.copyright[selectedLang]}
                    </Typography>
                    <Typography
                    sx={{
                        paddingTop:"5px",
                        color:"#777B82",
                        fontSize:"14px",
                        fontWeight:"400"
                    }}
                    dangerouslySetInnerHTML={{__html: `${globalLocales.footer.description[selectedLang]}`}}
                    >
                    
                    </Typography>
                 </Box>
                 <Box 
                 sx={{display: "flex" , justifyContent:"space-between" , alignItems:"center"}}
                 >
                    <Avatar sx={{width:"40px" , height:"40px"}} alt='help me' src={helpMe} />
                    <Link to="/"
                        
                        style={{
                        paddingLeft:"10px" , 
                        fontWeight:"400" , 
                        fontSize:"16px", 
                        color: "#000", 
                        //textDecoration: "none",
                        display: "block"
                        
                        }}>
                          <span dangerouslySetInnerHTML={{__html: `${globalLocales.footer.help[selectedLang]}`}}></span>  
                    </Link>
                 </Box>
            </Container>
        </Box>
    );
}

export default Footer;
