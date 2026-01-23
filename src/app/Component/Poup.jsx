"use client"
import React from 'react';
import "../assets/css/poup.css"
import Link from 'next/link';

const Poup = ({loginupdate,login}) => {
  return (
    <div  className={`${login?"poup show":"poup"}`}>
       
      <div className="cta">
        <span className='close-me' onClick={()=>loginupdate(false)}> <img src="icons8-close-50.png" alt="" /></span>
        <h3 className='fs-40'>Are you an ?</h3>
      <div className="cta-butons">
        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/organization-backend`} target='_blank' className='c-btn' title='organization'>organization</Link>
        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/inspector-backend`} target='_blank' className='c-btn' title='inspector'>inspector</Link>
      </div>
      </div>
    </div>
  );
}

export default Poup;
