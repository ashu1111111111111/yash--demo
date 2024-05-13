import React from 'react'
import './mointor.css'
import { Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';



export default function Mointor() {
  return (
    <div>
      <header>
        <div className="header-section container flex">

          <div className="header-left anim1 ">
            <h1>The World's leading Uptime mointoring service</h1>
            <h3>Get 50 monitors with 5-minute checks totally FREE.</h3>
            <button className="get-started-btn ">Start mointoring in the 30 secounds</button>
          </div>
          <div className="header-right">
            <img src="myImage.jpeg" alt="website" />
          </div>
        </div>
        
        <p className="white conatiner flex anim1">Currently, we keep an eye on '7,100,000' monitors for more than '1,900,000' users and companies.</p>
      </header>
      <div className="company-logo container ">
        <div className="logos flex">
          <img className="logo" src="GoDaddy_2016.svg" alt="logo1" />
          <img className="logo" src="nasa.png" alt="logo2" />
          <img className="logo" src="IBM_logo.svg" alt="logo3" />
          <img className="logo" src="expedia.png" alt="logo4" />
        </div>
      </div>
      <div className="parallaxtwo"> </div>
      <div className="feature-sec">
        <div className="feature-text container flex">
          <h1>All you really care about monitored in one place.</h1>
        </div>
        
        <div className="container feature-card">
        
          <Card className="card" sx={{ boxShadow: '0 0 10px #888' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h3'>Website monitoring</Typography>
              Be the first to know that your website is down! Reliable monitoring warns you before any significant trouble and saves you money.
            </CardContent>
            <Button variant="contained" sx={{ backgroundColor: 'greenyellow', '&:hover': { backgroundColor: '#3bd671' } }}>
              Website Mointoring
            </Button>
          </Card>


          <Card className="card" sx={{ boxShadow: '0 0 10px #888' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h3'>SSL monitoring</Typography>
              Don’t lose visitors because of expired SSL certificate. Get notified 30, 14 and 7 days before expiration so you have time to renew.
            </CardContent>
            <Button variant="contained" sx={{ backgroundColor: 'greenyellow', '&:hover': { backgroundColor: '#3bd671' } }}>
              Website Mointoring
            </Button>
          </Card>


          <Card className="card" sx={{ boxShadow: '0 0 10px #888' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h3'>Ping monitoring</Typography>
              Leverage one of the most used tools administrators use to check the availability of network devices.
            </CardContent>
            <Button variant="contained" sx={{ backgroundColor: 'greenyellow', '&:hover': { backgroundColor: '#3bd671' } }}>
              Website Mointoring
            </Button>
          </Card>

        </div>
        <div className="parallaxone"></div>
        
        <div className="container feature-card">
          <Card className="card" sx={{ boxShadow: '0 0 10px #888' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h3'>Port monitoring</Typography>
              Is the email service still UP? Or what about the critical database server? Let's check! Monitor any specific service running on any port.
            </CardContent>
            <Button variant="contained" sx={{ backgroundColor: 'greenyellow', '&:hover': { backgroundColor: '#3bd671' } }}>
              Website Mointoring
            </Button>
          </Card>


          <Card className="card" sx={{ boxShadow: '0 0 10px #888' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h3'>Keyword monitoring</Typography>
              Use keyword monitoring to check presence or absence of specific text in the request's response body (typically HTML or JSON).
            </CardContent>
            <Button variant="contained" sx={{ backgroundColor: 'greenyellow', '&:hover': { backgroundColor: '#3bd671' } }}>
              Website Mointoring
            </Button>
          </Card>


          <Card className="card" sx={{ boxShadow: '0 0 10px #888' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant='h3'>Cron job monitoring</Typography>
              Also known as heartbeat monitoring. Monitor recurring background jobs or intranet devices connected to the internet.
            </CardContent>
            <Button variant="contained" sx={{ backgroundColor: 'greenyellow', '&:hover': { backgroundColor: '#3bd671' } }}>
              Website Mointoring
            </Button>
          </Card>

        </div>
        <button className="get-started-btn container flex " style={{marginBottom:'20px'}}>Start mointoring in the 30 secounds</button>


        <div className="parallaxthree"> </div>

      </div>
    </div>
  )
}
