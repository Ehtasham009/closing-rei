import React from 'react'
// import { useMyContext } from './context';

// import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledCom = styled.div`    
    padding: 110px 60px 0; position: relative;  min-height: 100vh; position: relative; 
    
    video{position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -9999; opacity: 0.2}
    .banner-content-holder{display: grid; grid-template-columns: 3fr 2fr; grid-gap: 40px; align-content: center; min-height: calc(100vh - 130px); padding: 30px 0;}
    .banner-content{
        color: var(--primary-color);  padding: 70px 0 40px 0;

        h1{font-size: 48px; color: var(--primary-color);}
        h3{color: var(--secondary-color);}
        p{font-size: 22px; font-weight: 500; margin-top: 10px}
        .bottom-area{
            gap: 20px; font-family: var(--font-weight-700);  display: none;
            
            
            .talk-button{--size: 90px; height: var(--size); width: var(--size); border-radius: var(--size); background: #fff; padding: 5px; font-size: 22px; text-align: center; color: var(--primary-color); display: grid; align-items: center; justify-content: center; align-items: center; align-content: center; margin: 50px; position: relative;}
            .talk-button::before{content: ""; animation: talkButtonAnimation_1 2s forwards infinite; transition: 1s all; height: var(--size); width: var(--size); border-radius: var(--size); position: absolute;  border: 2px solid #fff;}
            .talk-button::after{content: ""; animation: talkButtonAnimation_2 2s forwards infinite; animation-delay: 1s; height: var(--size); width: var(--size); border-radius: var(--size); position: absolute;  border: 2px solid #fff;}
            .talk-button > span{color: var(--secondary-color);}

            
        }
    }
`;

function HeroBanner() {
  return (
    <StyledCom className="main-banner section section-one" data-scroll-section>
        <video width="750" height="500" autoPlay muted loop>
            <source src="/videos/hero-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="banner-content-holder">
            <div className="banner-content">
                <h1 className="wow bounceInDown">
                    Your Success Is Our Mission with Closing REI Call Center Excellence
                </h1>
                <p className="wow bounceInUp">
                    Power your company's growth with top-notch call center outsourcing from Closing REI.
                    Stay ahead in your industry with scalable, cost-effective solutions tailored to your business needs.
                </p>
                <a className="btn btn-primary" href="#">Book A Discovery Call</a>
                <div className="wow bounceInUp bottom-area">
                    <div className="services-changer-slider">
                        Let's 
                        <div className="slide-alan">
                            <div className="slide-maske">
                                <div className="slide-grup">
                                    <div className="slide">Talk</div>
                                    {/* <div className="slide">Meet</div>      
                                    <div className="slide">Talk</div>
                                    <div className="slide">Meet</div>       */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wow flipInX image-holder">
                {/* <img src="images/banner-chr.png" alt="" /> */}
            </div>
        </div>
    </StyledCom>
  )
}

export default HeroBanner;