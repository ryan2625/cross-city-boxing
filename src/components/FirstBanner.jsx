import React from 'react'
import fightBanner from './fightBanner.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Navbar from './Navbar'
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import '../styles/FirstBanner.css'

function FirstBanner() {
  return (
    <div className='mainBanner'>
        <Navbar />
        <div className="pictureHolder">
            <span className="text">
                FIGHT LIKE <br /> A <span className="red">CHAMPION</span>
            </span>
        </div>
        <div className="categories">
            <ul>
                <li>
                    <div className="icon">
                        <SportsMmaIcon />
                    </div>
                    Training
                </li>
                <li>
                <div className="icon">
                    <EmojiEventsIcon />
                    </div>
                    Tournaments
                    
                </li>
                <li>
                <div className="icon">
                    <LocationOnIcon />
                    </div>
                    Locations
                </li>
            </ul>
        </div>
    </div>
  )
}

export default FirstBanner