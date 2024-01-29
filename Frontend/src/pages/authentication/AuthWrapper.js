import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthCard from './AuthCard';
import Logo from '../../components/Logo';
import AuthFooter from '../../components/cards/AuthFooter';
import loginFrame  from '../../assets/images/loginFrame.png'
// assets
import AuthBackground from '../../assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }) => (
  <Box sx={{ minHeight: '100vh', backgroundColor: '#252E3B' }}>
    <AuthBackground />
    <div style={{display: 'flex'}}>
      <Grid item xs={12} className='col-md-6' sx={{ width: '50%' }}>
        <img src={loginFrame} width={'100%'} />
      </Grid>

      <Grid item xs={12} className='col-md-6' sx={{width: '50%'}}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: '100vh' }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;
