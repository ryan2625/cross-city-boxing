import React from 'react'
import '../styles/SecondBanner.css'
import womanFighting from "./womanFighting.jpg"

function SecondBanner() {
  return (
    <div className="secondBanner">
      <img src={womanFighting} alt="" id="fightPic"/>
      <div className="lorem">
        <h1 id="catchLine">WHY SHOULD YOU JOIN US?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto blanditiis quisquam molestias ab aspernatur voluptate adipisci odit voluptas mollitia, inventore amet corporis. Facilis est ex cupiditate voluptatibus fugit quam. Sapiente.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, fugiat, libero accusantium ab quam officiis 
        </p>
        <button>Take a free lesson</button>
      </div>
    </div>
  )
}

export default SecondBanner