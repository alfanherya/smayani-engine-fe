import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
    return (
        <>
        <section className='hero'>
            <div className='container'>
                <div className='row'>   
                    <Heading subtitle='Welcome To Smayani School' title='Best School Education' />
                    <p>Sekolah berbalut islami, dengan balutan religi yang siap mengantarkan ke cita-cita dan menuju masa depan yang lebih baik</p>
                    <div className='button'>
                        <button className="primary-btn">
                            Get Started Now <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                        <button>
                            View Profile Sekolah <i className="da fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
        </>
    )
}

export default Hero