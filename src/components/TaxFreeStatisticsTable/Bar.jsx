import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const Bar = () => {
    const { selectedLang } = useSelector(state => state.lang)
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
                >
                    {globalLocales.stats.sum[selectedLang]}
                </Button>
                  <Button variant={userCountBtn}
                  onClick={handleBtn}
                    sx={{
                        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.05)",
                        borderRadius: "26px",
                        ml:"20px"
                    }}
                >{globalLocales.stats.count[selectedLang]}</Button>
            </Box>
            <Box sx={{
              border:"1px solid #325ECD",
              borderRadius:"26px"
            }}>
                <Button variant={USD}
                onMouseOver={(e)=>{e.target.style.border="none"}}
                onClick={ChangeCurrency1}
                    sx={{
                        borderRadius: "26px",
                        border:"none"
                    }}
                >USD</Button>
                  <Button variant={UZB}
                  onMouseOver={(e)=>{e.target.style.border="none"}}
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
