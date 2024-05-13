import React, { useState } from 'react'
import './CreateAccount.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"
import { useUser } from './UserContext';
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function CreateAccount() {
    const { setUserName } = useUser();
    const history = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log(email)
    const [password, setPassword] = useState('')
    console.log(password)
    const [viewer, setViewer] = useState()
    const { enqueueSnackbar } = useSnackbar(); // Move useSnackbar here

    const handleVisibility = () => {
        setViewer((prev) => !prev);
    }
    async function submit(e) {
        e.preventDefault();
    
        try {
          const response = await axios.post("http://localhost:8002/account", {
            name,
            email,
            password,
          });
    
          if (response.status === 200) {
            // Successful registration
            const userData = response.data.user;
            setUserName(userData.name);
    
            // Display success message using Snackbar
            enqueueSnackbar("Registered successfully", { variant: "success" });
    
            history("/", { state: { id: email } });
          } else {
            // Handle other responses, if needed
            enqueueSnackbar("Registration failed. Please check your details.", {
              variant: "error",
            });
          }
        } catch (error) {
          // Handle Axios errors here
          if (error.response) {
            if (error.response.status === 400) {
              enqueueSnackbar("Registration failed. User already exists.", {
                variant: "error",
              });
            } else {
              enqueueSnackbar(
                "Registration failed. Please try again later.",
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
        <div className='accountmain'>
            <div className='account'>




                <h2 style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "0" }}>  UptimeRobot</h2>
                <p style={{ color: "white", display: "flex", justifyContent: "center", marginBottom: "20px" }}> Keeping Your Services Online</p>
                <h3 style={{ color: "white", }} > Create an Account</h3>
                <div className='icon' >
                    <FacebookRoundedIcon sx={{ color: "orange" }} onClick={() => { window.open("https://www.facebook.com/login/", "blank") }
                    } />
                    < GoogleIcon sx={{ color: "orange" }} onClick={() => { window.open("https://www.google.com/account/about/", "blank") }
                    } />
                </div>
                <h5 style={{ color: "white", }}  >or</h5>
                <h4 style={{ color: "white", }} >Sign up with Email</h4>
                <div className='signup' style={{ marginTop: "10px" }}>
                    <label style={{ color: "white" }}>Already have an account?</label>
                    <Link to='/' style={{ textDecoration: "none", color: "white", fontWeight: "1000", paddingLeft: "10px" }} >Sign in</Link>
                </div>


                <TextField id="outlined-basic" type="text" label="Name" variant="outlined" fullWidth sx={{
                    mb: 2, mt: 2, '& .MuiOutlinedInput-root': {
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

                    value={name} onChange={(e) => setName(e.target.value)}

                />

                <TextField id="outlined-basic" type="email" label="Email Id" variant="outlined" fullWidth sx={{
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
                <Button variant="contained" fullWidth sx={{ mb: 1, mt: 2 }} onClick={submit}>Create</Button>
                <Link to='/login' style={{ textDecoration: "none", color: "white", fontWeight: "1000", paddingLeft: "10px" }} >Back to sign in</Link>





            </div>
        </div>
    )
}
