import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './Headersocials'
import ME from '../../assets/Me.png'
const Header = () => {
    return (
        <header>
            <div id='header' className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Anurag Rawat</h1>
                <h5 className='text-light'>Full-Stack Developer</h5>
                <CTA />

                <Headersocials />
                <div className='me'>
                    <img src={ME} alt='me' />
                </div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header