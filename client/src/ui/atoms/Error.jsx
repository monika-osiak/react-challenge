import { Box, Typography } from '@mui/material';
import logo from '../../assets/unknown_error.png';
import '../styles.css';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : (
          <div>
            <img style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} src={logo}/>
            <p style={{
              color: '#333333',
              opacity: 0.5,
              textAlign: 'center',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '19.2px',
              lineHeight: '29px',
              marginTop: 0
            }}>Wystąpił nieoczekiwany błąd</p>
          </div>
        )
      }
    </Box>
  );
};
