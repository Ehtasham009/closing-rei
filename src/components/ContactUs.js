import React from 'react'
// import { useMyContext } from './context';

import WhyWorkwithUs_card from './WhyWorkwithUs_card';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledCom = styled.div`    
    .content-holder{ background:rgba(250, 250, 250, 0.9); padding: 40px; display: grid; grid-template-columns: 1fr 1fr; grid-gap: 30px; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);}
    .section-title{color: var(--secondary-color); font-size: 42px; text-align: left;}
    .items{display: grid; grid-gap: 15px;}
    
    .image-area .image-holder{display: flex; background: #fafafa; max-height: 300px; background-size: contain; padding-top: 30px}

    @media (max-width: 768px) {
        .content-holder{grid-template-columns: 1fr; padding: 0;}
        .image-area{display: none;}
        .left-area{padding: 40px 20px;}
        .form-control{min-height: 45px;}
    }
`;

function ContactUs() {
  return (
    <StyledCom className="p-section section-eight" data-scroll-section>
        <div className="container">
            <div className="content-holder">
                <div className="left-area">
                    <div className="grid" data-gap="10">
                        <h2 className="section-title">Ready to Transform Your Operations? </h2>
                        <div className="description-holder font-size-20">
                            <p>Join hundreds of global companies leveraging the best of call center outsourcing in the Philippines.</p>
                            <p>Fill out the contact form below to discover how we can tailor our services to meet your unique needs.</p>
                        </div>
                    </div>
                    <div className="image-area">
                        <div className="image-holder">
                            <img src="images/contact-form.webp" alt="contact us" />
                        </div>
                    </div>
                </div>
                <form action="" id="contact-us-form">
                    <div className="grid" data-gap="20">
                        <div className="items">
                            <div className="h-list f-no-wrap" data-gap="15">
                                <input className="width-100 form-control" type="text" name="first_name" placeholder="First Name" />
                                <input className="width-100 form-control" type="text" name="first_name" placeholder="Last Name" />
                            </div>
                            <div className="h-list f-no-wrap" data-gap="15">
                                <input className="form-control" type="text" name="email" placeholder="Email" />
                                <input className="form-control" type="number" name="phone" placeholder="Phone" />
                            </div>
                            <div className="h-list f-no-wrap" data-gap="15">
                                <select className="form-select" name="Region">
                                    <option value="none">Region</option>
                                    <option value="none">Asia, AU and NZ</option>
                                    <option value="none">North (US/Canada) and South America, and Europe</option>
                                    <option value="none">Other</option>
                                </select>
                                <select className="form-select" name="Timezone">
                                    <option value="none">Timezone</option>
                                    <option value="none">US - Eastern Time</option>
                                    <option value="none">US - Central Time</option>
                                    <option value="none">US - Mountain Time</option>
                                    <option value="none">US - Pacific Time</option>
                                    <option value="none">AU - Eastern Time</option>
                                    <option value="none">AU - Central Time</option>
                                    <option value="none">AU - Western Time</option>
                                    <option value="none">EU - Eastern Time</option>
                                    <option value="none">EU - Central Time</option>
                                    <option value="none">EU - Western Time</option>
                                    <option value="none">Singapore</option>
                                    <option value="none">Hong Kong</option>
                                    <option value="none">Middle East GMT +2</option>
                                    <option value="none">Middle East GMT +3</option>
                                    <option value="none">Middle East GMT +4</option>
                                </select>
                            </div>
                            <div className="h-list f-no-wrap" data-gap="15">
                                <select className="form-select" name="RegPurpose Of Inquiryion">
                                    <option value="none">Purpose Of Inquiry</option>
                                    <option value="none">Looking to Outsource</option>
                                    <option value="none">Looking for a Job</option>
                                    <option value="none">Introducing Products or Services</option>
                                    <option value="none">Contact HR or Recruitment</option>
                                    <option value="none">Other</option>
                                </select>
                                <select className="form-select" name="Service(s) You’re Interested In">
                                    <option value="none">Service(s) You’re Interested In</option>
                                    <option value="none">Outbound Calling</option>
                                    <option value="none">Back-Office Support</option>
                                    <option value="none">Customer Service & Support</option>
                                    <option value="none">Tech Support</option>
                                </select>
                            </div>
                            <input className="form-control" type="text" name="subject" placeholder="Subject" />
                            <textarea className="form-control" placeholder="Message" name="detail" rows="5"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary h-list" data-gap="10" data-button-height="50">
                                <span>Submit</span>
                                <svg width="18" height="15" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 10.5014L16.075 10.5014L11.5375 15.9514C11.3253 16.2066 11.2232 16.5357 11.2537 16.8663C11.2842 17.1968 11.4447 17.5017 11.7 17.7139C11.9553 17.926 12.2844 18.0281 12.6149 17.9976C12.9454 17.9672 13.2503 17.8066 13.4625 17.5514L19.7125 10.0514C19.7545 9.99171 19.7922 9.92904 19.825 9.86386C19.825 9.80136 19.825 9.76386 19.9125 9.70136C19.9692 9.55804 19.9988 9.40548 20 9.25136C19.9988 9.09725 19.9692 8.94469 19.9125 8.80136C19.9125 8.73886 19.9125 8.70136 19.825 8.63886C19.7922 8.57369 19.7545 8.51102 19.7125 8.45136L13.4625 0.951365C13.345 0.810261 13.1978 0.696785 13.0314 0.619009C12.8651 0.541233 12.6836 0.501066 12.5 0.501364C12.2079 0.500793 11.9249 0.602512 11.7 0.788863C11.5734 0.8938 11.4688 1.02268 11.3921 1.16811C11.3154 1.31354 11.2682 1.47268 11.2531 1.6364C11.238 1.80012 11.2553 1.96521 11.3041 2.12221C11.3529 2.27922 11.4322 2.42505 11.5375 2.55136L16.075 8.00136L1.25 8.00136C0.91848 8.00136 0.600537 8.13306 0.366116 8.36748C0.131696 8.6019 7.94069e-07 8.91984 7.65086e-07 9.25136C7.36104e-07 9.58288 0.131696 9.90083 0.366116 10.1352C0.600537 10.3697 0.91848 10.5014 1.25 10.5014Z" fill="currentcolor"/>
                                </svg> 
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    </StyledCom>
  )
}

export default ContactUs;