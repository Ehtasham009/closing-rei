import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import IndustryServices_card from './IndustryServices_card';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StyledCom = styled.div`    
    
    .items-holder {
        display: flex;
        overflow-x: scroll;
        padding: 20px 0;
        max-width: 100% !important;
        width: 100% !important;
    }
`;

function BusinessOperations() {
    const cardData = [
        {
            id: 1,
            image: '/images/outbound_call_center_solutions.svg',
            tittle: 'Inbound Services',
            description: 'Efficient assistance with pre-and post-sale support needs, including order processing, troubleshooting, and customer experience (CX) management.'
        },
        {
            id: 2,
            image: '/images/customer_service_outsourcing.svg',
            tittle: 'Outbound Services',
            description: 'Generate and qualify leads, set appointments, and consummate sales. Conduct studies and promote special events and product launches.'
        },
        {
            id: 3,
            image: '/images/back_office_support.svg',
            tittle: 'Back-Office Support',
            description: 'Optimize your operations by outsourcing tasks like data entry, payroll, and document processing, enabling your team to focus on core goals.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
        {
            id: 4,
            image: '/images/ai_solutions.svg',
            tittle: 'AI Solutions',
            description: 'Drive innovation to your business with the power of artificial intelligence.'
        },
    ];

    const itemsHolderRef = useRef(null);

    useEffect(() => {
        const itemsHolder = itemsHolderRef.current;

        gsap.to(itemsHolder, {
            x: () => -(itemsHolder.scrollWidth - itemsHolder.clientWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: itemsHolder,
                start: 'top center',
                end: () => `+=${itemsHolder.scrollWidth - itemsHolder.clientWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });
    }, []);

    return (
        <StyledCom className="p-section section-four " data-scroll-section>
            <div className="">
                <div className="section-title-holder">
                    <h2 className="section-title">Outsourcing Solutions in the Closing REI for Your <span>Business Operations</span></h2>
                    <p className="text-center font-size-18 mt-2">Providing world-class business process outsourcing solutions in the Closing REI to empower your global success.</p>
                </div>
                <div className="items-holder  px-4" ref={itemsHolderRef}>
                    {cardData.map(card => (
                        <IndustryServices_card key={card.id} image={card.image} tittle={card.tittle} description={card.description} />
                    ))}
                </div>
            </div>
        </StyledCom>
    );
}

export default BusinessOperations;