import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Box, Button, Container } from '@mui/material';

const Bar = () => {
    const [userCountBtn , setUserCountBtn] = useState("outlined")
    const [taxFreeSummaBtn , setTaxFreeSumma] = useState("contained")
    const [USD , setUSD]= useState()

    function handleBtn(){
        setUserCountBtn("contained")
        setTaxFreeSumma("outlined")
    }
    function handleBtn2(){
        setTaxFreeSumma("contained")
        setUserCountBtn("outlined")
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
            <Box>
                <Button variant={taxFreeSummaBtn}
                onClick={handleBtn2}
                    sx={{
                        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.05)",
                        borderRadius: "26px",
                    }}
                >USD</Button>
                  <Button variant={userCountBtn}
                  onClick={handleBtn}
                    sx={{
                        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.05)",
                        borderRadius: "26px",
                    }}
                >UZS</Button>
            </Box>
        </Container >
    );
}
export default Bar;
