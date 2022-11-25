import React from 'react';

const Taxfree = () => {
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
            </Box>
        </Card>
    );
}

export default Taxfree;
