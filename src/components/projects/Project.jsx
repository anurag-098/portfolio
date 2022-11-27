import React from 'react'
import './project.css'
import Cineview from "../../assets/Screenshot 2022-07-10 002908.png"


const data = [
    {
        id: 1,
        image: Cineview,
        title: "Cineview-One Stop Destination",
        github: "",
        demo: "https://cineview-alpha.vercel.app"
    }
]
const Project = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className='container projects_container'>
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className='project_item'>
                            <div className='project_item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='project_item-cta'>
                                <a href={github} className='btn' target="_blank">Github</a>
                                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Project