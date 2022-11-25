import React from 'react';
import { Box, Container, Avatar, Typography, TextField, Button } from '@mui/material';
import QrCode from '../../assets/Png/QrCode.png'
import ScanBtn from '../../assets/Png/Scanme.png'
import User from '../../assets/Png/User.png'
import UserKey from '../UserKey/UserKey';
import QRGenerator from "../QRGenerator/QRGenerator"
import { borderRadius } from '@mui/system';
const ScanCheck = () => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box sx={{ flexGrow: 1, height: "1200px" }}>
                <Box sx={{ display: "flex", alignItems: "center", borderRadius: "40px", boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.2)", marginTop: "150px", }}>
                    <Box sx={{ width: "50%", height: "700px", borderBottomLeftRadius: "40px", borderTopLeftRadius: "40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", padding: "50px 0" , borderRight:" 2px dashed rgba(50, 94, 205, 0.2)" }}>
                        <Typography
                            sx={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "#325ECD",
                                textAlign: "center"
                            }}
                        >
                            Ro’yxatdan o’tish uchun Soliq ilova orqali <br />
                            Qr-kodni skaner qiling!
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "#325ECD",
                                textAlign: "center",
                                padding: "15px 0"
                            }}
                        >
                            Для подтверждения личности просим  <br />
                            отсканировать QR код с помощью <br />
                            приложения Soliq
                        </Typography>
                        <QRGenerator/>
                        {/* <Avatar src={QrCode} alt="Tax Free"
                            sx={{ width: "332px", height: "332px", borderRadius: "0px" }}
                        /> */}
                        <Avatar src={ScanBtn} alt="Tax Free"
                            sx={{
                                width: "332px",
                                height: "92px",
                                borderRadius: "0px",
                                padding: "35px 0"
                            }}
                        />
                    </Box>
                    <Box sx={{ width: "50%", height: "700px", padding: "50px 0" }}>
                        <Avatar src={User} alt="user Icon" sx={{ width: "164px", height: "164px", display: "block", margin: " 0 auto 25px" }} />
                        <Typography sx={{
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            fontSize: "30px",
                            textAlign: "center",
                            color: "#325ECD"
                        }}
                        >
                            Chet el fuqarosini  <br />
                            TaxFree summasini ro’yxatga olish.
                        </Typography>

                       <Container maxWidth="sm">
                       <TextField
                            id="outlined-basic"
                            label="Telefon raqam"
                            variant="outlined"
                            borderRadius="25px"
                            sx={{
                                width: "100%",
                                height: "56px",
                                bgcolor: "rgba(50, 94, 205, 0.05)",
                                margin:"38px 0",
                            }}
                            />
                       </Container>
                       <Container maxWidth="sm">
                       <Button variant="contained" 
                             sx={{
                                width: "100%",
                                height: "56px",   
                                borderRadius:"25px",
                                bgColor:"#325ECD"
                            }}>Contained</Button>
                       </Container>

                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default ScanCheck;
