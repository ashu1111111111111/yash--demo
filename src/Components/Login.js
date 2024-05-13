import React, { useState } from 'react'
import './Login.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControlLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useUser } from './UserContext'; // Update the path to UserContext based on your file structure

function Login() {
    const { setUserName } = useUser();
    const history = useNavigate();
    const { enqueueSnackbar } = useSnackbar(); // Move useSnackbar here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [viewer, setViewer] = useState();
    const handleVisibility = () => {
        setViewer((prev) => !prev);
    };

    async function submit(e) {
        e.preventDefault();
    
        try {
          const response = await axios.post("http://localhost:8002/login", {
            email,
            password,
          });
    
          if (response.status === 200) {
            // Successful login
            const userName = response.data.user.name;
            setUserName(userName);
    
            // Display success message using Snackbar
            enqueueSnackbar("Login successful", { variant: "success" });
    
            history("/", { state: { id: email } });
          } else {
            // Handle other responses, if needed
            enqueueSnackbar("Login failed. Please check your details.", {
              variant: "error",
            });
          }
        } catch (error) {
          // Handle Axios errors here
          if (error.response) {
            if (error.response.status === 400) {
              enqueueSnackbar("Login failed. Invalid credentials.", {
                variant: "error",
              });
            } else {
              enqueueSnackbar(
                "Login failed. Please try again later.",
                { variant: "error" }
              );
            }
          } else if (error.request) {
            enqueueSnackbar("Network error. Please check your internet connection.", {
              variant: "error",
            });
          } else {
            enqueueSnackbar("An error occurred. Please try again later.", {
              variant: "error",
            });
          }
        }
      }
    return (
        <div className='mainlogin' >
            <div className='Layout' id='pop-up'>
                <h2 style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "0" }}>  UptimeRobot</h2>
                <p style={{ color: "white", display: "flex", justifyContent: "center", marginBottom: "20px" }}> Keeping Your Services Online</p>

                <TextField id="outlined-basic" type="text" label="Email Id" variant="outlined" fullWidth sx={{
                    mb: 2, '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                        '&.Mui-focused': {
                            color: 'white', // Change the label color to white when focused
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                }}

                    value={email} onChange={(e) => setEmail(e.target.value)}

                />
                <TextField id="outlined"
                    label="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={viewer ? "text" : "password"}
                    // type={viewer ? "password" :"text"  }

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" onClick={handleVisibility}>
                                {viewer ? <VisibilityRoundedIcon sx={{ color: "white" }} /> : <VisibilityOffIcon sx={{ color: "white" }} />}
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined" fullWidth sx={{
                        mb: 2, '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white', // Change the label color to white when focused
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                    }}

                />


                <div style={{ display: "flex", justifyContent: "space-between" }}>



                    {/* <label htmlFor="Remember"> Remember Password</label> */}
                    <FormControlLabel
                        control={<Checkbox sx={{
                            color: 'white', // Change checkbox color to white
                            '&.Mui-checked': {
                                color: 'white', // Change checkbox tick color to white
                            },
                            '&.Mui-checked .MuiSvgIcon-root': {
                                borderColor: 'white', // Change checkbox border color to white
                            },
                        }} />}
                        label="Remember password"
                        sx={{
                            color: 'white', // Change label color to white
                        }}
                    />
                    <Link to='/forget' style={{ textDecoration: "none", color: "white", fontWeight: "1000", marginTop: "10px", fontSize: "17px" }} >Forget Password</Link>
                </div>
                <Button variant="contained" fullWidth sx={{ mb: 1, mt: 2 }} onClick={submit}>Login</Button>
                <h5 >or</h5>
                <a href='/' style={{ display: "flex", justifyContent: "center", textDecoration: "none", color: "white", marginBottom: "10px", fontWeight: "1000" }}>Login via OTP</a>
                <div className='icon' >
                    <FacebookRoundedIcon sx={{ color: "orange" }} onClick={() => { window.open("https://www.facebook.com/login/", "blank") }
                    } />
                    < GoogleIcon sx={{ color: "orange" }} onClick={() => { window.open("https://www.google.com/account/about/", "blank") }
                    } />

                </div>
                <div className='signup' style={{ marginTop: "10px" }}>
                    <label style={{ color: "white" }}>don't have an account?</label>
                    <Link to='/account' style={{ textDecoration: "none", color: "white", fontWeight: "1000", paddingLeft: "10px" }} >Sign Up</Link>
                </div>

            </div>
        </div>
    )
}

export default Login










