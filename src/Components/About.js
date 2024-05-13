import React from 'react'
import './about.css'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }





export default function About() {
 const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div>
    <div className="about">
        
            <div className="header-img container flex">
            <img src="about.webp" alt="" />
            </div>

            
    </div>
    <div className="about-header-text container flex">
                <h1 style={{color:'black'}}>Learn about Uptime.com</h1>
                <p style={{color:'black'}}>Our passion is peace of mind. Meet the company trusted to monitor the world's top websites.</p>
            </div>
            <div className="big-section-feature container flex">

                <div className="feature-img">
                    <img src="about-img-1.webp" alt="" />
                </div>
                <div className="feature-description flex">
                    <h3>Monitoring since 2013</h3>
                    <p style={{color:'black'}}>Uptime.com was founded after we experienced a major web outage and couldn’t find a solution that was both affordable and user-friendly.
Turns out we weren’t alone.</p>
                </div>
                

             </div>

             <div className="big-section-feature container flex">

                <div className="feature-img">
                    <img src="company-gur.webp" alt="" />
                </div>
                <div className="feature-description flex">
                    <h3>Thousands of customers later...</h3>
                    <p style={{color:'black'}}>Our unique combination of top-rated website monitoring technology and 100% dedicated human support has gotten us recognized as one of the world's best solutions to use (and work with) for nearly a decade..</p>
                </div>
                

             </div>

             <div className="about-header-text container flex">
                <h1>Our core values are a superpower</h1>
                <p style={{color:'black'}}>See the values Uptime.com was built on.</p>
            </div>


            <div className="about">

            <div className="review-big-section-feature container flex">

                <div className="review-feature-img">
                    <img src="review.webp" alt="" />
                </div>
                <div className="review-feature-description flex">
                    <h3>"Interesting work with amazing people"</h3>
                    <p style={{color:'black'}}>"The collaboration is incredible. Everyone is smart and engaged, sharing ideas and looking for improvement. And getting feedback from customers who love what we do for them makes it all very satisfying. The fully-remote work really suits my lifestyle, and company-wide meetups are always a lot of fun as well."</p>
                </div>
                

             </div>
            </div>
            <div className="rating container">
            <Box
        
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        size='large'
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55,color: 'yellow' }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2, color: 'gold' }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </div>




    </div>
    
  )
}
