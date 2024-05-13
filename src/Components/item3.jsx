import React from 'react'
import { Link } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './item3.css'
function Item3() {
    return (
        <div className='full-item'>
            <div className='item3'>
                <div className='icon3'>
                    <Link to="#" className="black-link-item3">It’s easy to switch from<br />Android to iPhone.</Link><br />
                </div>
                <div className='text'>
                    <Link to="#" className="para">Anjali no longer worries about her phone heating up after long gaming sessions.</Link><br />

                    <div className="link-container3">
                        <Link to="#" className="blue-link-item3">Watch her film <PlayCircleFilledWhiteOutlinedIcon /></Link>
                        <Link to="#" className="blue-link-item3" style={{ marginLeft: "10px" }}>Discover more stories <KeyboardArrowRightIcon /></Link>
                    </div>
                </div>
            </div>
            <div className='image-item3'></div>
        </div>
    )
}

export default Item3;