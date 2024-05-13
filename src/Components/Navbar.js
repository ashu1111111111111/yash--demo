import React from 'react'
import './navbar.css'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';

import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { Stack } from '@mui/material';
import { Drawer } from '@mui/material';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { useUser } from './UserContext'; // Update the path to UserContext based on your file structure

// import Grids from './Components/grid';
import axios from 'axios';





export default function Navbar() {
  //cgt
  const [deviceLocation, setDeviceLocation] = useState(null);

  // Function to get the device's geolocation
  const getDeviceLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setDeviceLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting device location:', error.message);
          alert("Error getting device location:")
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // State to store the current weather data
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = '9a2c3977c278a79dbedbc6996405a880';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Effect hook to fetch weather data when device location is available
  useEffect(() => {
    if (deviceLocation) {
      fetchWeatherData(deviceLocation.latitude, deviceLocation.longitude);
    }
  }, [deviceLocation]);

  // Effect hook to get the device location on component mount
  useEffect(() => {
    getDeviceLocation();
  }, []);
  //cgtend


























  const { userName } = useUser();//updated



  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const handleClickpro = () => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setLoading(false);
          clearInterval(timer);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);
  };






  return (
    <div className="navbar">
      {loading && <LinearProgress variant="determinate" value={progress} sx={{ height: '2px' }} color="error" />}
      <AppBar position='static' sx={{ backgroundColor: 'black' }}>

        <Toolbar>
          <div className="text">

            








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
            <div className="menu">
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
          <div className="links">
            <Stack direction='row' spacing={2} sx={{ display: 'flex', gap: '50px' }}>
            
              <Link to='/pricing'><Button sx={{ color: 'white', '&:hover': { color: '#3bd671' } }} onClick={handleClickpro}>Pricing</Button></Link>
           
            </Stack>

            <div className="login-reg">
              <Link to='/login'><Button sx={{ color: 'white' }}>Login</Button></Link>
              <Link to='/account'>Register for free</Link>
            </div>
          </div>
          <Drawer
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}>


            <div className="login-reg">
              <Button sx={{ color: 'white', '&:hover': { color: '#3bd671' } }}>Login</Button>
              <Link to="/">Register for free</Link>
            </div>


          </Drawer>




      
        </Toolbar>

      </AppBar>


    </div>
  )
}
