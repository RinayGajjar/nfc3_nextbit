import React from 'react'
import ngotitle from '../Assets/ngotitle.png'
import './Title.css'

const Title = () => {
  return (
    <div className='titlemain'>
        <div className='titleLeft'>
            <h1 id='titlename'>ANMOL JEEVAN,</h1>
            <h2 id='titlemsg1'>a place where</h2>
            <h1 id='titlemsg2'>Hearts are <span id='titlespan'>united,</span> <br /> Lives are <span id='titlespan'>transformed,</span><br /> and sustainable <span id='titlespan'>changes</span> <br /> are created <span id='titlespan'>for all.</span></h1>
        </div>
        <div className='titleRight'>
            <img src={ngotitle} alt="" />
        </div>
    </div>
  )
}

export default Title