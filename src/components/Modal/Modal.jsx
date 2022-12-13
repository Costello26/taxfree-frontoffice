import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckBox from '../../assets/Png/CheckBox.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal(props) {
  console.log(props);
  const [open, setOpen] = React.useState(props.state);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
   setOpen(props.state)
  }, [props]);
  return (
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
          <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '540px',
                    height: '500px',
                    background: '#FFFFFF',
                    borderRadius: '40px',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={CheckBox}
                    alt="CheckBox"
                    style={{ width: '150px', height: '150px' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 600,
                      textAlign: 'center',
                      mt: '55px',
                    }}
                  >
                    Shaxsga doir ma`lumotlar tasdiqlandi!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 600,
                      textAlign: 'center',
                      mt: '35px',
                    }}
                  >
                    Личные данные подтверждены!
                  </Typography>
                </Box>
      </Modal>
  );
}
