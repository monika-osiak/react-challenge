import { Box } from '@mui/material';
import logo from '../../assets/no_content.png';
import '../styles.css';

export const NoContent = () => {
  return (
    <Box class={'message-box'}>
      <div>
        <img className={'box-img'} src={logo}/>
        <p className={'box-p'}>Brak danych do wyświetlenia</p>
      </div>
    </Box>
  );
};
