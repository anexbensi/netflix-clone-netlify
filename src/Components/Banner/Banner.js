import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className='description'>is a long established fact that a reader will be distracted by the readable content of a page when looking
             at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner