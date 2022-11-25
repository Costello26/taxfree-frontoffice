import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material'
import Regula from '../../assets/Png/Regula.png'
const RegulaInfo = () => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box sx={{ flexGrow: 1, height: "700px"}}>
                <Box
                    sx={{ width: "100%", height: "700px", borderRadius: "40px", textAlign: "center", boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.15)" , padding:"25px 0"}}>
                    <Typography
                        sx={{
                            fontFamily: "Montserrat",
                            color: '#325ECD',
                            fontWeight: "600",
                            fontSize: "25px"
                        }}
                    >
                        Shaxsingizni tasdiqlovchi xujjatni scaner qurilmasiga ochiq holda joylashtiring
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: '#325ECD',
                        fontWeight: "600",
                        fontSize: "25px"
                    }}
                    >
                        Положите в открытом виде документ подтверждающий <br />
                        Вашу личность на устройство сканирование
                    </Typography>
                    <Box
                      sx={{
                        width: "527px",
                        height: "527px",
                        background: "#F3F6FF",
                        border: "2px solid rgba(50, 94, 205, 0.1)",
                        borderRadius:"50%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        margin:"25px auto"
                    }}
                    >
                        <Avatar 
                          src={Regula} 
                          alt="regula" 
                          sx={{
                            width: "482px",
                            height: "320px"
                        }}
                          />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default RegulaInfo;
