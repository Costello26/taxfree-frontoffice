import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import TaxFree from '../../assets/Png/TaxFreeLogo.png';
import UserKey from '../UserKey/UserKey';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const ListUsers = () => {
  const { selectedLang } = useSelector(state => state.lang)
  const navigate = useNavigate()
  const selectInspector=()=>{
    navigate("/login")
  }
  return (
    <Container maxWidth="xl" disableGutters className="container">
      <Box sx={{ flexGrow: 1, height: '700px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            boxShadow: ' 0px 0px 15px rgba(0, 0, 0, 0.08)',
            marginTop: '40px',
            background: '#FFF',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '650px',
              bgcolor: '#F1FAFF',
              borderBottomLeftRadius: '20px',
              borderTopLeftRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={TaxFree} alt="taxfree soliq service" style={{ width: '350px' }} />
            {/* <Avatar
              src={TaxFree}
              alt="Tax Free"
              sx={{ width: '400px', borderRadius: '0px' }}
            /> */}
            {/* <Typography
              sx={{
                fontWeight: '400',
                fontSize: '40px',
              }}
            >
              Tizimiga kirish!
            </Typography> */}
          </Box>
          <Box sx={{ width: '50%', height: '650px' }}>
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: 700,
                fontSize: '28px',
                marginTop: '36px',
                textAlign: 'center',
              }}
              dangerouslySetInnerHTML={{ __html: `${globalLocales.signIn.header[selectedLang]}` }}
            >
              
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Link
                to="/login"
                style={{ textDecoration: 'none' }}
                onClick={selectInspector}
              >
                <UserKey
                  fullname="Olimov Asqarali Turg'unovich"
                  jshr="31511941051487"
                  stir="200523221"
                />
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: 'none' }}
                onClick={selectInspector}
              >
                <UserKey
                  fullname="Sodiqov Shamshod Salimovich"
                  jshr="31511941051487"
                  stir="200523221"
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ListUsers;
