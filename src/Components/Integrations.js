import TelegramIcon from '@mui/icons-material/Telegram';
import GroupsIcon from '@mui/icons-material/Groups';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'
import SmsIcon from '@mui/icons-material/Sms';
import './Integrations.css'
import { useState } from 'react';



function Integrations() {
    const [isHovered, setIsHovered] = useState(false);

    const handleEmailEnter = () => {
        setIsHovered(true);
    };

    const handleEmailLeave = () => {
        setIsHovered(false);
    };

    const [isSMSHovered, setIsSMSHovered] = useState(false);
    const handleSMSEnter = () => {
        setIsSMSHovered(true);
    };

    const handleSMSLeave = () => {
        setIsSMSHovered(false);
    };





    return (
        <div>
            {/* <div style={{ backgroundColor: "#131a26", textAlign: "center" }}>
                <h1 style={{ color: "white", padding: "40px" }}>Downtime happens.</h1>
                <h2 style={{ color: "orange", padding: "10px" }}>Get notified!</h2>
                <p style={{ padding: "40px" }}>Everyone knows it happens. But it’s important to know it before customers do.</p>
            </div> */}

            {/* <Box sx={{ backgroundColor: '#131a26', textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: 'white', padding: '20px' }}>
                    Downtime happens.
                </Typography>
                <Typography variant="h3" sx={{ color: 'orange', padding: '10px' }}>
                    Get notified!
                </Typography>
                <Typography variant="body1" sx={{ padding: '40px', fontSize:"18px" }}>
                    Everyone knows it happens. But it’s important to know it before customers do.
                </Typography>
            </Box> */}




            <Box
                sx={{
                    backgroundColor: '#131a26',
                    textAlign: 'center',
                    padding: '20px',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                    
                }}
            >
                <Typography className="anim-dt" variant="h2" sx={{ color: 'white' }}>
                    Downtime happens.
                </Typography>
                <Typography className="anim-lt" variant="h3" sx={{ color: 'orange', padding: '10px' }}>
                    Get notified!
                </Typography>
                <Typography className="anim-rt" variant="body1" sx={{ fontSize: '18px', padding: '20px' }}>
                    Everyone knows it happens. But it’s important to know it before customers do.
                </Typography>
            </Box>


            <div className='entire-card-int'>
                {/* <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < EmailIcon   sx={{color:'#4285f4',fontSize:'60px'}}/>
                        <Typography variant="h6" component="h4" >
                            E-mail
                        </Typography>
                    </CardContent>
                </Card> */}
                <Card className='cards-int'
                    onMouseEnter={handleEmailEnter}
                    onMouseLeave={handleEmailLeave}
                >
                    <CardContent className='card-int'>
                        {isHovered ? (
                            <p
                                style={{ color: 'black', textAlign: 'center' }}
                            >
                                E-mail is a basic form of outages notifications. Get alerted!
                            </p>
                        ) : null}
                        {isHovered ? null : (
                            <EmailIcon sx={{ color: '#4285f4', fontSize: '60px' }} />
                        )}
                        {isHovered ? null : (
                            <Typography variant="h6" component="h4">
                                E-mail
                            </Typography>
                        )}
                    </CardContent>
                </Card>




                <Card className='cards-int'
                    onMouseEnter={handleSMSEnter}
                    onMouseLeave={handleSMSLeave}
                >
                    <CardContent className='card-int'>
                        {isSMSHovered ? (
                            <p
                                style={{ color: 'black', textAlign: 'center' }}
                            >
                                Get alerted instantly by SMS, even when you are offline!
                            </p>
                        ) : null}
                        {isSMSHovered ? null : (
                            < SmsIcon sx={{ color: 'blue', fontSize: '60px' }} />
                        )}
                        {isSMSHovered ? null : (
                            <Typography variant="h6" component="h4">
                                SMS
                            </Typography>
                        )}
                    </CardContent>
                </Card>





                {/* <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < SmsIcon sx={{ color: 'blue', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            SMS
                        </Typography>
                    </CardContent>
                </Card> */}
                <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < CallIcon sx={{ color: 'black', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            VoiceCall
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < TwitterIcon sx={{ color: '#00acee', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            Twitter
                        </Typography>
                    </CardContent>
                </Card>
            </div>







            <div className='entire-card-int'>
                <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < TelegramIcon sx={{ color: '#0088cc', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            Telegram
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < SmsIcon sx={{ color: '#7289d9', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            Discord
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < FacebookIcon sx={{ color: '#3b5998', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            Facebook
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='cards-int'>
                    <CardContent className='card-int'>
                        < GroupsIcon sx={{ color: '#464EB8 ', fontSize: '60px' }} />
                        <Typography variant="h6" component="h4" >
                            Microsoft Teams
                        </Typography>
                    </CardContent>
                </Card>
            </div>








        </div >
    )
}

export default Integrations