import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
       <div className="firstFooter">
            <h1 className='leftPosition'>READY FOR YOUR <span>NEXT</span> LESSON?</h1>
            <ul className='rightPosition footerIcons'>
                <li>
                    <InstagramIcon />
                </li>
                <li>
                    <TwitterIcon />
                </li>
                <li>
                    <FacebookIcon />
                </li>
            </ul>
       </div>
       <div className="firstFooter">
        <p className='leftPosition legal'>crosscityboxing@gmail.com</p>
        <p className='rightPosition legal'>2023 Cross City Boxing. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer