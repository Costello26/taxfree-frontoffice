import React from 'react';
import { Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';
import SoliqIcon from '../../assets/svg/soliq-icon.svg'
import cls from './RegulaInfo.module.scss'

const RegulaInfo = ({imgSrc, heading, textUZ, textRU}) => {
  const { selectedLang } = useSelector((state) => state.lang)
  console.log(selectedLang)
  return (
    <Container maxWidth="md" disableGutters>
      <Box sx={{ 
        flexGrow: 1, 
        //height: '650px',
        //marginBottom: '50px',
      }}>
        <Box
          sx={{
            maxWidth: '100%',
            //height: '650px',
            borderRadius: '40px',
            textAlign: 'center',
            backgroundColor: '#FFF',
            padding: '100px 35px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center' 
          }}
        >
          <div className={cls['image']}>
            <img className={cls['image-exp']} clas src={imgSrc} alt="helper-icon" />
          </div>
          <div className={cls['spoiler']}>
            <img src={SoliqIcon} alt="soliq-logo"/>
            <span className={cls['heading']} dangerouslySetInnerHTML={{__html: `${heading}`}}></span>
            <span className={cls['description']} dangerouslySetInnerHTML={{__html: `${textUZ}`}}></span>
            <br/>
            <span className={cls['description']} dangerouslySetInnerHTML={{__html: `${textRU}`}}></span>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default RegulaInfo;
