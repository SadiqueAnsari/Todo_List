// RegistrationForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../Api/api';
// import { userLogin } from '../Api/api';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {

  const navigate= useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      // console.log("val",values)
      try {
        let result = await userApi.userLogin(values)
        console.log("res", result)
        if(result.status===200){
          alert(result.data.message)
          navigate('/user/addtask')
          localStorage.setItem("token",result.data.token)
        }

      } catch (err) {
        alert(err.response.data.message)
        console.log(err)
      }
    },
  });

  return (
    <Container  maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%', marginTop: 20 }}>

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            margin="normal"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
            Login
          </Button>
          <Typography variant="p">Don't have an account ? <Link to="/"> Signup</Link></Typography>

        </form>
      </Paper>
    </Container>
  );
};

export default Login;
