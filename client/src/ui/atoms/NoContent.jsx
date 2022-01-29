import { Box } from '@mui/material';
import logo from '../../assets/no_content.png';
import '../styles.css';

export const NoContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
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
        }}>Brak danych do wyświetlenia</p>
      </div>
    </Box>
  );
};
