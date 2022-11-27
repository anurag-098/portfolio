import React from 'react'
import './skill.css'
import 'react-multi-carousel/lib/styles.css';
import "../../script.js"

const sdata = [
    {
        id: 1,
        prog: "95",
        cls: "progress progress-1",
        title: "HTML"
    },
    {
        id: 2,
        prog: "70",
        cls: "progress progress-2",
        title: "CSS"
    },
    {
        id: 3,
        prog: "55",
        cls: "progress progress-3",
        title: "Javascript"
    },
    {
        id: 4,
        prog: "60",
        cls: "progress progress-4",
        title: "ReactJs"
    },
    {
        id: 5,
        prog: "70",
        cls: "progress progress-5",
        title: "ExpressJs"
    },
    {
        id: 6,
        prog: "58",
        cls: " progress progress-6",
        title: "MongoDB"
    },
    {
        id: 7,
        prog: "65",
        cls: "progress progress-7",
        title: "NodeJs"
    },
    {
        id: 8,
        prog: "72",
        cls: "progress progress-8",
        title: "GitHUB"
    },
    {
        id: 9,
        prog: "80",
        cls: "progress progress-9",
        title: "Bootstrap"
    },
]
const Skill = () => {
    // const circleSelection = document.querySelector('.circles');
    // const circles = document.querySelectorAll('.circle');
    // const progressCircles = document.querySelectorAll('.progress');
    // const progressText = document.querySelectorAll('.circles h1');
    // let bol = false;
    // window.addEventListener("scroll", function () {
    //     if (pageYOffset > circleSelection.offsetTop - 600 && bol === false) {
    //         for (let i = 0; i < circles.length; i++) {
    //             let radius = progressCircles[i].r.baseVal.value;
    //             let circumference = radius * 2 * Math.PI;
    //             progressCircles[i].style.strokeDasharray = circumference;
    //             function setProgress(percent) {
    //                 progressCircles[i].style.strokeDashoffset = circumference - (percent / 100) * circumference;

    //             }
    //             const progress = circles[i].CDATA_SECTION_NODE.prog;
    //             progressText[i].innerHTML = progress + "%";
    //             setProgress(progress);
    //             bol = true;
    //         }
    //     }
    // });
    return (

        <section id='skills' className='skill'>
            <h2>
                Skills
            </h2>
            <p>Aspiring to become a valuable member of an organization where i can contribute to its growth through my knowledge, skills and hardwork.</p>
            <div className='circles'>
                {
                    sdata.map(({ id, prog, cls, title }) => {
                        return (
                            <div key={id} className='circle' data-prog={prog}>
                                <svg width="200" height="200">
                                    <circle
                                        r="50"
                                        cx="100"
                                        cy="100"
                                        class="track"
                                    >
                                    </circle>
                                    <circle
                                        r="50"
                                        cx="100"
                                        cy="100"
                                        class={cls}
                                    >
                                    </circle>
                                </svg>
                                <div className='circle-inner'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Skill



