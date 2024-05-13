import React from 'react'
import './footer.css'
import Typography from '@mui/material/Typography';


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <div className="footer">
      <footer >
        <div className="footer-container container">
          <div className="footer-description">
            <Typography variant="h4"
              noWrap
              sx={{
                mr: 2,
                textDecoration: "bold",
                display: { xs: 'marginTop{{20px}}' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'white',

              }}
            >
              .UpTime

            </Typography>
            <p className="dwn">Downtime happens. Get notified!</p>
            <p className="desc-dwn">Join more than 1,900,000 happy users!<br></br> UptimeRobot is one of the most popular <br></br> website monitoring services in the world.</p>
            <div className="f-t-l">
              <FacebookIcon sx={{ color: 'grey', '&:hover': { color: 'white' }, fontSize: '30px' }}></FacebookIcon>
              <TwitterIcon sx={{ color: 'grey', '&:hover': { color: 'white' }, fontSize: '30px' }}></TwitterIcon>
              <LinkedInIcon sx={{ color: 'grey', '&:hover': { color: 'white' }, fontSize: '30px' }}></LinkedInIcon>
            </div>

          </div>
          <div className="footer-section  ">
            <div className="link-column flex">
              <h2>Mointoring</h2>
              <Link to='/monitor' className="hover-link">Website monitoring</Link>
              <Link to='/' className="hover-link">SSL monitoring</Link>
              <Link to='/' className="hover-link">Ping monitoring</Link>
              <Link to='/' className="hover-link">Port monitoring</Link>
              <Link to='/' className="hover-link">Cron job monitoring</Link>
              <Link to='/' className="hover-link">Keyword monitoring</Link>
            </div>

            <div className="link-column flex">
              <h2>Company.</h2>
              <Link to='/' className="hover-link">Pricing</Link>
              <Link to='/' className="hover-link">Blog</Link>
              <Link to='/' className="hover-link">Affiliate program</Link>
              <Link to='/' className="hover-link">Terms / Privacy</Link>
              <Link to='/aboutus' className="hover-link">About us</Link>
              <Link to='/' className="hover-link2">We are hiring!</Link>
            </div>


            <div className="link-column flex">
              <h2>Resources.</h2>
              <Link to='/' className="hover-link">Integrations</Link>
              <Link to='/' className="hover-link">API</Link>
              <Link to='/' className="hover-link">FAQs</Link>
              <Link to='/' className="hover-link">Help center</Link>
              <Link to='/' className="hover-link">Locations & IPs</Link>
              <Link to='/grid' className="hover-link">Grid</Link>


            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}
