import { Box, Typography } from '@mui/material';
import logo from '../../assets/unknown_error.png';
import '../styles.css';

export const Error = ({ error }) => {
  return (
    <Box class={'message-box'}>
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : (
          <div>
            <img className={'box-img'} src={logo}/>
            <p className={'box-p'}>Wystąpił nieoczekiwany błąd</p>
          </div>
        )
      }
    </Box>
  );
};
