import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import UserIcons from '../../assets/Png/UserIcons.png'
const UserInfo = () => {
    return (
        <Card sx={{
            width: "550px", height: "220px", display: 'flex', boxShadow: "0px 0px 15px rgba(160, 160, 160, 0.3)",
            borderRadius: "30px"
        }}>
            <Avatar
                src={UserIcons}
                sx={{
                    width: "158px",
                    height: "164px",
                    borderRadius: "0"
                }}
            />
            <Box>
                <CardContent>
                    <Typography sx={{fontSize:"18px", fontWeight:"500"}} component="div">
                        FISh: Hellen Mirren
                    </Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"500"}} component="div">
                        Telefon: +44-7871234567
                    </Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"500"}} component="div">
                    Visa: 400*******9010
                    </Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"500"}} gutterBottom component="div">
                    Visa FISh: Hellen Mirren
                    </Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"500", display:"flex"}} gutterBottom component="div">
                    Holati:
                    <Typography sx={{color: "#12B903" , fontSize:"18px", fontWeight:"500"}}>Shaxsi tasdiqlangan</Typography> 
                    </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
            </Box>
        </Card>
    );
}

export default UserInfo;
