import { Box, Typography } from '@mui/material';
import logo from '../../assets/unknown_error.png';

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
            <img style={{display: "block", "margin-left": "auto", "margin-right": "auto"}} src={logo}/>
            <p style={{ color: "#333333", opacity: 0.5, "text-align": "center" }}>Wystąpił nieoczekiwany błąd</p>
          </div>
        )
      }
    </Box>
  );
};
