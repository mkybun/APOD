import React, { useState } from 'react';



export default function Navbar(props) {

  return (
    <div>
      <p className='header-nav'>Astronomy Picture Of The Day</p>
      <p className='subtext'>ALL PHOTOS PROVIDED BY NASA, USING THE APOD NASA API</p>
      <p className='subtext'>CREATED BY: KARINA ZUNIGA </p>
      <p className='subtext'>CHECK OUT THE CODE ON
      <a className='subtext' id='link' href="https://github.com/mkybun/APOD">GITHUB</a> || KARINA'S <a className='subtext' id='link' href="https://www.linkedin.com/in/karina-zuniga/">LINKEDIN</a>
      </p>
    </div>
  );
}
