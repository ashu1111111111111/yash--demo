import { useState } from 'react'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Forget.css'
import { Link } from 'react-router-dom';


export default function Forget() {
    const [email, setEmail] = useState('')
    console.log(email)
    return (
        <div className="forgetmain">
            <div className="forget">
                {/* <h2 style={{ color: "white", display: "flex", justifyContent: "center", marginTop:"0" }}>  VirtuVerse</h2>
                <p style={{ color: "white", display: "flex", justifyContent: "center" }}>Where the digital universe unfold</p> */}
                <h2 style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "0" }}>  UptimeRobot</h2>
                <p style={{ color: "white", display: "flex", justifyContent: "center", marginBottom: "20px" }}> Keeping Your Services Online</p>

                <h2 style={{marginBottom: "20px"}}> Forget password</h2>
                <p style={{marginBottom: "20px"}}>Don't worry you are two steps away from accessing your account </p>
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

                <p>we will send you a reset password link to your account</p>
                <Button variant="contained" fullWidth sx={{ mb: 1, mt: 2 }}>Send reset link</Button>
                <Link to='/' style={{ textDecoration: "none", color: "white", fontWeight: "1000", paddingLeft: "10px" }} >Back to sign in</Link>



            </div>
        </div>
    )
}
