import React from 'react'
// import { useMyContext } from './context';

import WhyWorkwithUs_card from './WhyWorkwithUs_card';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledCom = styled.div`    
background: rgba(255, 255, 255, 0.8); 
.items-holder{
		display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));; grid-gap: 40px;  
	}
`;

function WhyWorkwithUs() {
    const cardData = [
        {
            id: 1,
            tittle: 'High Quality, Low Cost',
            description: 'Our services aren’t only affordable but they are high-quality, allowing you to have peace of mind that this area of your business is covered.'
        },
        {
            id: 2,
            tittle: 'Customized to Your Business',
            description: 'Our call center services are always tailored to meet the needs of your business, never offering cookie-cutter solutions.'
        },
        {
            id: 3,
            tittle: 'Years of Experience',
            description: 'Our substantial experience in this industry gives us a competitive advantage over similar companies.'
        },
        {
            id: 4,
            tittle: '24/7 Advanced Customer Support',
            description: 'Business is constantly happening, so our 24/7 services are an effective way to keep an eye on your business at all times.'
        },
        {
            id: 5,
            tittle: 'Excellent English',
            description: 'Our call center outsourcing services are operated by a team that is highly proficient in the English language.'
        },
        {
            id: 6,
            tittle: 'Well Trained Associates',
            description: 'We know that every business is unique and our associates are always getting additional training to give your potential and new clients the best experience possible.'
        },
    ] 

  return (
    <StyledCom className="p-section section-six " data-scroll-section>
        <div className="container ms-2">
            <div className="section-title-holder">
                <h2 className="section-title"><span >Why Work with </span> Closing REI</h2>
                <p className="text-center font-size-18 mt-3">Call center outsourcing in the Closing REI is more sophisticated than ever. Business owners around the globe are taking advantage of the hands-on support that tailors to the needs of their customers while capitalizing on additional free time and resources within the business. We can help build a sense of brand loyalty while factoring in customer feedback, both positive and negative.</p>
            </div>
            <div className="items-holder">
                {cardData.map((card, key) => (
                    <WhyWorkwithUs_card id={card.id} tittle={card.tittle} description={card.description} />
                ))}
            </div>
        </div>
    </StyledCom>
  )
}

export default WhyWorkwithUs;