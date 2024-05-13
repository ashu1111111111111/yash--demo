import React from 'react'
import { Link } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import './item2.css'
function Item2() {
    return (
        <div className='item2'>
            <div className='icon2'>
                <Link to="#" className="black-link-item2"><AppleIcon />Trade In</Link><br />
            </div>
            <div className='text2'>
                <Link to="#" className="upgrade2">Upgrade and save. It’s that easy.</Link><br />
                <div className="link-container2">
                    <Link to="#" className="blue-link2">See what your device is worth</Link>
                </div>
            </div>
        </div>
    )
}

export default Item2;