import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import api from '../../api'
import {
    Button,
    Alert,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import AnimateButton from '../../../components/@extended/AnimateButton';
import { useNavigate } from 'react-router-dom';
import MainRoutes from '../../../routes/MainRoutes';

const AuthLogin = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
      if(user)
      {
          console.log(user.role);
          if (user.role === "ADMIN") {
              navigate('/admin');
          }
          if (user.role === "CREATOR") {
              navigate('/creator');
          }
      }
  }, [user]);
    const [errorMsg, setErrorMsg] = useState('');
    const [message, setMessage] = useState('');
    const [password,setpassword] = useState('');
    const [email, setemail] = useState('');
    const handleemailChange = (event) => {
        setemail(event.target.value);
    };

    const handlepasswordChange = (event) => {
        setpassword(event.target.value);
    };

    const handleVerifypassword = async () => {
        console.log('fandle pass');
        setErrorMsg('');
        setMessage('');
        navigate('/');
        /*
        try {
            //write login api here
            // const response = await axios.post(api+'api/commons/login', {"mobileNo": email,"password": password });
            // <Alert severity="success">{response.data.message}</Alert>
            // const { token } = response.data;
            const response = {};
            console.log({"email": email,"password": password });
            const token = response.headers.auth;
            localStorage.clear();
            localStorage.setItem('token', token);
            console.log('token',token);
            localStorage.setItem('user', JSON.stringify(response.data.data));
            if(response.data.data)
            {
                console.log(response.data.data.role);
                if (response.data.data.role === "ADMIN") {
                    navigate('/admin');
                }
                if (response.data.data.role === "CREATOR") {
                    navigate('/creator');
                }
                <MainRoutes />
            }

            setMessage(response.data.message);
        } catch (error) {
            setErrorMsg(error.response.data.message);
            console.error(error.response.data.message);
        }
        */
    };

    return (
        <div style={{gap: 10, display: 'inline-grid',width: '100%'}}>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <OutlinedInput
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleemailChange}
            />
            {errorMsg!=='' && <Alert severity="error">{errorMsg}</Alert>}
            {message!=='' && <Alert severity="success">{message}</Alert>}
            <div id='ApiResponse'></div>
                    {/* <label>{response.data.message}</label> */}
                    <InputLabel htmlFor="password">Enter password:</InputLabel>
                    <OutlinedInput
                        type="text"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlepasswordChange}
                    />
                    {/* <button onClick={handleVerifypassword}>Verify password</button> */}
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={handleVerifypassword}
                        >
                            Login
                        </Button>
                    </AnimateButton>
        </div>
    );
};

export default AuthLogin;