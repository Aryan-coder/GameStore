import React from 'react'

export default function Nav() {
  return (<div className='Nav' >
    <i className='logo' >PlayNow</i>
    <ul className='options' >
        <li>STORE</li>
        <li>FAQ</li>
        <li>HELP</li>
        <li>UNREAL-ENGINE</li>
    </ul>
    <ul className='account' >
        <li>LANGUAGE</li>
        <li>SIGN IN</li>
        <li className='signup' >SIGN UP</li>
    </ul>
  </div> )
}
