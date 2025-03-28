import React, { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const StyledCom = styled.div`    
    background: url('/images/countries-we-deal-bg.webp') no-repeat center center / cover; color: white;

    // .section-title{color: white}
`;

function CountriesweDeal() {

    return (
        <StyledCom className="p-section section-five " data-scroll-section>
            <div className="container">
                <div className="section-title-holder">
                    <h2 className="section-title"><span>Countries We Support</span> At Our Closing REI Call Center </h2>
                    <p className="text-center font-size-18 mt-2">No matter where you are in the world, Closing REI call center outsourcing solutions are here to help. </p>
                </div>
                <div className='image-holder'>
                    <img src='/images/countries-we-deal.webp' alt='Countries We Deal' />
                </div>
            </div>
        </StyledCom>
    );
}

export default CountriesweDeal;