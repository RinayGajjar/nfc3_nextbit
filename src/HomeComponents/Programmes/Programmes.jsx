import React from 'react'
import './Programmes.css'
import edu from '../Assets/edu.jpg'

const Programmes = () => {
  return (
    <div className='promain'>
        <h1 id='prohead'>OUR <span id='spanimpact'>PROGRAMMES</span></h1>

        <div className='procolumns'>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>EDUCATION</h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures</h3>
                </div>
            </div>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>ANIMAL RESCUE</h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures</h3>
                </div>
            </div>
        </div>

        <div className='procolumns'>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>BLOOD DONATION</h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures</h3>
                </div>
            </div>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>BEACH CLEAN UP </h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures</h3>
                </div>
            </div>
        </div>

        <div className='procolumns'>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>TREE PLANTATION</h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures</h3>
                </div>
            </div>
            <div className='procol1'>
                <div id='edu'><img src={edu} alt="" /></div>
                <div className='procolint'>
                    <h1 id='proh1'>FUNDRAISING</h1>
                    <h3 id='proh3'>Nurturing minds, fueling growth, <br />empowering children's futures</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programmes