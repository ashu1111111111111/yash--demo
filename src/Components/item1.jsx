import React from 'react'
import { Link } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import './item1.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function Item1() {
    return (
        <div className='item'>
            <div className='icon'>
                <Link to="#" className="white-link"><AppleIcon sx={{ color: "white" }} />WATCH</Link><br />
            </div>
            <div className='text'>
                <Link to="#" className="red-link">series 8</Link><br />
                <Link to="#" className="custom-link" >A healthy leap ahead.</Link>
                <div class="link-container">
                    <Link to="#" className="blue-link">Learn more <KeyboardArrowRightIcon /></Link>
                    <Link to="#" className="blue-link">Buy <KeyboardArrowRightIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default Item1;

