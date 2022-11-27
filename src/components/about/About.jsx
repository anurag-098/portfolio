import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={ME} alt='about image' />
                    </div>
                </div>
                <div className='about_content'>
                    <p>
                        I am always energetic and eager to learn new skills.
                        I have experience working as part of a team and individually.
                        I am flexible in my working hours, being able to work evenings and weekends.
                        I specialize in HTML, CSS & JavaScript and have professional experience working with MERN.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About