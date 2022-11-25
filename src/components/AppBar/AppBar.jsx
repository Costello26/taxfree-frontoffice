import React from 'react';
import { ButtonGroup, Button, Container } from '@mui/material'
const AppBar = () => {
    return (
        <Container maxWidth='xl'>
            <ButtonGroup variant="contained" aria-label="button group" sx={{marginTop:"59px" , width:"100%" , borderRadius:"20px"}}>
                <Button variant='contained'  sx={{width:"50%", padding:"15px 10px", borderRadius:"20px", fontWeight:'700', fontSize:"20px"}}>Ro’yxatga olish</Button>
                <Button variant='outline' sx={{width:"50%", padding:"15px 10px", borderRadius:"20px", fontWeight:'700', fontSize:"20px"}}>Statistika</Button>
            </ButtonGroup>
        </Container>
    );
}

export default AppBar;
