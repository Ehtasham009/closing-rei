import React from 'react'
// import { useMyContext } from './context';

// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledCom = styled.div`
    background-color: rgba(235, 235, 235, 0.9); padding: 40px 50px 0; color: #000;

    .content-holder{display: flex; gap: 40px; justify-content: space-between;}
    .content-holder > .grid:last-child{flex: 1 24%;}
    .about-content{max-width: 400px; line-height: 1.6;}
    h5{color: var(--secondary-color);}
    .footer-links{padding: 0; display: grid; grid-gap: 15px; margin: 0;}
    .footer-links li{list-style-type: none;}
    .footer-links li a{color: inherit;}
    .sub-footer{border-top: 1px solid #a7a7a7; margin-top: 40px; min-height: 80px; display: flex; align-items: center; justify-content: space-between;}

    .sub-footer .icons-holder .icon{--size: 40px; background: var(--secondary-color); color: white;}

    @media (max-width: 768px) {
        padding: 30px 0;

        .content-holder{flex-direction: column; grid-gap: 20px;}
        .sub-footer{flex-direction: column;}
    }

    
`;

function Footer() {
    return (
        <StyledCom className='p-section section-nine' data-scroll-section>
            <div className="container">
                <div className="content-holder">
                    <div className="grid align-content-start about-content" data-gap="20">
                        <h5>About</h5>
                        <div className="description-holder">
                            <p>
                                We strive hard to become brand builders for a better tomorrow. We will be best in providing consistently successful, unique, and forward-thinking software development and marketing with a tangible impact on your bottom line.
                            </p>
                        </div>
                    </div>
                    <div className="grid align-content-start" data-gap="20">
                        <h5>Contact Us</h5>
                        <ul className="footer-links">
                            <li className="auto-fr align-items-start" data-gap="10">
                                <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                                    <g style={{ stroke: "none", strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1, }} transform="translate(1.4066 1.4066) scale(2.81 2.81)">
                                        <path d="M 45 0 C 27.677 0 13.584 14.093 13.584 31.416 c 0 4.818 1.063 9.442 3.175 13.773 c 2.905 5.831 11.409 20.208 20.412 35.428 l 4.385 7.417 C 42.275 89.252 43.585 90 45 90 s 2.725 -0.748 3.444 -1.966 l 4.382 -7.413 c 8.942 -15.116 17.392 -29.4 20.353 -35.309 c 0.027 -0.051 0.055 -0.103 0.08 -0.155 c 2.095 -4.303 3.157 -8.926 3.157 -13.741 C 76.416 14.093 62.323 0 45 0 z M 45 42.81 c -6.892 0 -12.5 -5.607 -12.5 -12.5 c 0 -6.893 5.608 -12.5 12.5 -12.5 c 6.892 0 12.5 5.608 12.5 12.5 C 57.5 37.202 51.892 42.81 45 42.81 z"
                                        style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fillRule: "nonzero", opacity: 1, }} transform="matrix(1 0 0 1 0 0)" strokeLinecap="round" fill="currentColor"
                                        />
                                    </g>
                                </svg>
                                <a href="https://goo.gl/maps/sdCB8EXpdV1wU9t19"  target="_blank">4th Floor Office No. 408, Land Mark Plaza, Jail Road, Lahore</a>
                            </li>
                            <li className="auto-fr align-items-start" data-gap="10">
                                <svg fill="currentColor" width="20" height="20" viewBox="0 0 611.999 611.999">
                                    <path d="M312.809,6.809c-111.917,0-209.619,61.807-260.925,153.043c6.246-1.979,12.88-3.178,19.985-3.178 c20.036,0,39.353,9.472,57.603,27.921c11.392,3.872,23.381,7.439,36.067,10.547c-2.091,9.818-3.805,19.997-5.337,30.329 c24.702,43.335,13.851,71.003-6.562,94.859h0.818c0.351,14.246,1.356,28.098,2.718,41.688c7.77,10.033,18.964,22.961,34.902,39.248 c-4.968-25.488-8.164-52.637-8.941-80.936h115.34v83.027c-33.071,0.664-64.955,3.729-95.402,8.92 c10.299,10.111,19.256,18.33,27,24.988c22.161-2.818,45.137-4.545,68.402-5.027v8.746c9.865-6.129,21.28-10.373,35.366-10.373 c6.255,0,12.593,0.936,19.095,2.66c24.45,1.434,48.36,4.172,70.951,8.244c-2.926,9.834-6.186,19.223-9.687,28.207 c8.979,7.881,16.159,15.873,21.572,24.033c6.337-14.375,11.969-29.883,16.746-46.434c23.973,5.807,45.595,13.123,63.951,21.588 c-19.03,23.742-42.134,44.057-68.204,59.975c0.04,0.59,0.164,1.166,0.188,1.758c0.841,20.148-7.605,36.756-18.451,50.615 C536.896,535.572,611.999,429.4,611.999,306C611.999,141.024,477.783,6.809,312.809,6.809z M172.383,167.317 c-24.457-5.982-46.391-13.493-64.868-22.157c29.943-38.135,70.213-67.783,116.612-84.601 C202.372,87.389,184.575,124.021,172.383,167.317z M298.478,291.669h-115.34c0.875-31.868,4.661-62.432,10.784-90.62 c32.944,6.216,67.962,9.718,104.557,10.448L298.478,291.669L298.478,291.669z M298.478,182.608 c-33.732-0.695-66.936-3.837-97.512-9.423c18.311-63.173,48.983-110.473,84.634-126.741c4.263-0.444,8.557-0.777,12.878-1.011 V182.608L298.478,182.608z M534.741,168.898c22.356,36.057,36.192,77.915,38.633,122.771H471.166 c-0.842-34.168-4.709-66.61-11.082-96.528C488.299,188.229,513.569,179.306,534.741,168.898z M327.139,45.433 c4.322,0.234,8.617,0.567,12.882,1.011c35.654,16.269,66.33,63.57,84.64,126.745c-30.527,5.586-63.738,8.73-97.521,9.421V45.433z M431.088,413.686c-32.714-6.066-68.043-9.578-103.949-10.322V320.33h115.35C441.584,353.236,437.568,384.742,431.088,413.686z M327.139,291.669v-80.18c36.35-0.745,71.89-4.299,104.564-10.445c6.124,28.189,9.909,58.755,10.785,90.625H327.139z M401.492,60.561c46.396,16.818,86.664,46.465,116.605,84.596c-18.478,8.661-40.403,16.171-64.859,22.157 C441.046,124.021,423.249,87.389,401.492,60.561z M533.363,445.25c-21.073-10.223-46.067-18.969-73.837-25.721 c6.717-30.648,10.772-64.018,11.64-99.199h102.208C570.885,366.086,556.517,408.709,533.363,445.25z M390.421,487.043 c-60.026-48.242-76.812-24.527-104.047,2.703c-19.014,19.021-67.132-20.699-108.68-62.25 c-41.55-41.555-81.264-89.666-62.251-108.684c27.238-27.233,50.945-44.028,2.691-104.037 c-48.239-60.033-80.395-13.943-106.779,12.441c-30.459,30.448-1.605,143.92,110.541,256.082 c112.161,112.148,225.631,140.984,256.073,110.547C404.347,567.459,450.448,535.307,390.421,487.043z" />
                                </svg>
                                <a href="tel: +1 602 399 7672">+1 602 399 7672</a>
                            </li>
                            <li className="auto-fr align-items-start" data-gap="10">
                            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                                <g transform="translate(1.407 1.407) scale(2.81 2.81)">
                                    <path d="M 83.576 87.253 C 56.503 104.918 -15.416 32.615 3.794 6.316 c 0.902 -1.235 2.258 -2.065 3.736 -2.454 l 13.988 -3.681 c 2.512 -0.661 5.144 0.53 6.306 2.853 l 7.475 14.949 c 0.798 1.595 0.77 3.479 -0.073 5.051 l -5.855 10.907 c -1.145 2.133 -0.757 4.765 0.955 6.477 l 19.56 19.56 c 1.671 1.671 4.223 2.085 6.336 1.028 l 11.313 -5.657 c 1.477 -0.738 3.208 -0.773 4.712 -0.094 l 13.946 6.294 c 2.295 1.036 3.591 3.497 3.144 5.974 c -1.016 5.635 -2.104 11.666 -2.725 15.112 C 86.271 84.525 85.183 86.205 83.576 87.253 z"
                                    stroke="none" strokeWidth="1" fillRule="nonzero" strokeLinecap="round" />
                                </g>
                            </svg>
                                <a href="tel: +92 316 4848835">+92 316 4848835</a>
                            </li>
                            <li className="auto-fr align-items-start" data-gap="10">
                                <svg viewBox="0 0 122.88 85.57" height="20" width="20">
                                    <path d="M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z" fill="currentcolor"/>
                                </svg>
                                <a href="mailto: info@theusherhubsolutions.com">info@theusherhubsolutions.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid align-content-start" data-gap="20">
                        <h5>Business Hours</h5>
                        <div className="grid" data-gap="10">
                            <h6>Operational Days:</h6>
                            <div className="grid" data-gap="5">
                                <span>Monday - Friday : 9am to 7 pm (EST)</span>
                                <span>Holidays: All US calendar Holidays</span>
                            </div>
                        </div>
                        <h6 >Weekends Off</h6>
                    </div>
                    <div className="grid align-content-start" data-gap="20">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container sub-footer" >
                <div>
                    <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by <a href="#" className="text-secondary"> Usherhub Solutions Pvt.Ltd</a>.</p>
                </div>
                <div className="h-list icons-holder" data-gap="15">
                    <a href="https://www.facebook.com/profile.php?id=100083728162153" className="icon-rounded icon" target="_blank">
                        <svg width="20" height="20" viewBox="0 0 640 640" fill="currentcolor">
                            <path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/the-usher-hub-solutions/" className="icon-rounded icon" target="_blank">
                        <svg width="20" height="20" viewBox="0 0 640 640" fill="currentcolor">
                            <path d="M228.582 205.715h126.462v64.832h1.83c17.611-31.595 60.675-64.832 124.892-64.832C615.303 205.715 640 288.818 640 396.926v220.219H508.116V421.93c0-46.536-.969-106.442-68.576-106.442-68.67 0-79.194 50.658-79.194 103.052v198.605H228.581v-411.43zM137.152 91.43c0 37.855-30.721 68.576-68.576 68.576-37.855 0-68.587-30.721-68.587-68.576 0-37.855 30.732-68.576 68.587-68.576 37.855 0 68.576 30.721 68.576 68.576zM-.011 205.715h137.163v411.43H-.011v-411.43z"/>
                        </svg>
                    </a>
                    <a href="mailto:info@theusherhubsolutions.com" className="icon-rounded icon" target="_blank">
                        <svg width="20" height="20" viewBox="0 0 122.88 85.57" fill="currentcolor">
                            <path d="M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z"/>
                        </svg>
                    </a>
                    {/* <a href="" className="icon-rounded icon" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/>
                        </svg>
                    </a> */}
                </div>
            </div>
    </StyledCom>
  )
}

export default Footer;