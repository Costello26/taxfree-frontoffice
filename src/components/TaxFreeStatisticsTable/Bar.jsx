import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Box, Button, Container } from '@mui/material';

const Bar = () => {
    const [userCountBtn , setUserCountBtn] = useState("outlined")
    const [taxFreeSummaBtn , setTaxFreeSumma] = useState("contained")
    const [USD , setUSD]= useState("outlined")
    const [UZB , setUZB] = useState("contained")

    function handleBtn(){
        setUserCountBtn("contained")
        setTaxFreeSumma("outlined")
    }
    function handleBtn2(){
        setTaxFreeSumma("contained")
        setUserCountBtn("outlined")
    }
    function ChangeCurrency1(){
        setUSD("contained")
        setUZB("outlined")
    }
    function ChangeCurrency2(){
        setUSD("outlined")
        setUZB("contained")
    }
    return (
        <Container maxWidth="xl" sx={{ marginTop: "25px", marginBottom: "25px", display:"flex", justifyContent:"space-between" }}>
            <Box>
                <Button variant={taxFreeSummaBtn}
                onClick={handleBtn2}
                    sx={{
                        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.05)",
                        borderRadius: "26px",
                    }}
                >TaxFree summasi</Button>
                  <Button variant={userCountBtn}
                  onClick={handleBtn}
                    sx={{
                        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.05)",
                        borderRadius: "26px",
                        ml:"20px"
                    }}
                >Foydalanuvchilar soni</Button>
            </Box>
            <Box sx={{
              border:"1px solid #325ECD",
              borderRadius:"26px"
            }}>
                <Button variant={USD}
                onClick={ChangeCurrency1}
                    sx={{
                        borderRadius: "26px",
                        border:"none"
                    }}
                >USD</Button>
                  <Button variant={UZB}
                  onClick={ChangeCurrency2}
                    sx={{
                        borderRadius: "26px",
                        border:"none"
                    }}
                >UZS</Button>
            </Box>
        </Container >
    );
}
export default Bar;
