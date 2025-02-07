import React from 'react'
import kabuter from './images/kabuter.jfif';
import t1 from '../images/t1.jpg'

export default function img() {
  return (
    <div>
        <img src={kabuter} alt="" />
        <div className="left">
          <img src={t1} alt="" className='t1' />
          </div>


    </div>
  )
}
