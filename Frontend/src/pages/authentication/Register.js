import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';
import { useState } from 'react';
import RegisterType from '../../components/RegisterType';

// ================================|| REGISTER ||================================ //

const Register = () => {
  const [Step,setStep] = useState(1);
  const [type,setType] = useState('Audience');
  const changeStep = () => {
    setStep(Step+1);
  };
  const updateVariableType = (event) => {
    console.log('type',event.target.value);
    const newVariableType = event.target.value;
    setType(newVariableType);
  };
  return <AuthWrapper>
        {Step===1 && <>
          <div className="card">
      <h2>I want to register as...</h2>
      <div className="radio-container">
        <input
          type="radio"
          id="audience"
          name="registration"
          value="Audience"
          checked={type === "Audience"}
          onChange={updateVariableType}
        />
        <label htmlFor="audience">Audience</label>
        <p>Want to discover and book an event, want to manage my previous bookings</p>
      </div>
      <div className="radio-container">
        <input
          type="radio"
          id="creator"
          name="registration"
          value="Creator"
          checked={type === "Creator"}
          onChange={updateVariableType}
        />
        <label htmlFor="creator">Creator</label>
        <p>Want to create an event and list it to the audience.</p>
      </div>
    </div>
        <button onClick={changeStep}>Continue</button>
</>}
        {
          Step===2 &&         
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h3">Sign up</Typography>
              <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Already have an account?
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <FirebaseRegister type={type}/>
          </Grid>
        </Grid>
        }

  </AuthWrapper>
  };

export default Register;
