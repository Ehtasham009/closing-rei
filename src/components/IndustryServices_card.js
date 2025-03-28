import React from 'react'
import { ReactSVG } from 'react-svg'

import styled from 'styled-components';



const StyledCom = styled.div`    
    width: 150px; transition:  0.5s;
    
    .category-card {width: 300px; height: 100%; display: grid; grid-template-columns: 1fr; justify-items: center; align-content: flex-start; text-align: center; grid-gap: 20px; padding: 20px; background: rgba(255, 255, 255, 1); border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.15);}
    p{font-size: 14px; }

    &:hover {transform: scale(1.1) rotate(-2deg); width: 450px; }
`;

function IndustryServices_card({id, image, tittle, description}) {
    return (
        <StyledCom id={id}>
            <div className='category-card'>
                <div className='icon-holder'>
                    <ReactSVG src={image} />
                </div>
                <h5>{tittle}</h5>
                <div className='description-holder'>
                    <p>{description}</p>
                </div>
            </div>
        </StyledCom>
    )
}

export default IndustryServices_card;