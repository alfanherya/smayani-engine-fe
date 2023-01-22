import React from "react"
import { homeAbout } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Awrapper from "./Awrapper"
import "./about.css"

const AboutCard = () => {
    return (
        <>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        <div className="img2">
                            <img src="./images/bg2.webp" alt="foto" />
                        </div>
                    </div>
                    <div className="right row">
                        <Heading title='Sekolah Pencetak Cendekiawan Muslim' />
                        <div className="items">
                            {homeAbout.map((val) => {
                                return (
                                    <div className='item flexSB'>
                                        <div className="img">
                                            <img src={val.cover} alt='' />
                                        </div>
                                        <div className="text">
                                            <h2>{val.title}</h2>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Awrapper />
        </>
    )
}

export default AboutCard