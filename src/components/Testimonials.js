import React from 'react'
// import { useMyContext } from './context';

// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const StyledCom = styled.div`    
    background: rgba(0, 11, 58, 0.95);
    .section-title{width: fit-content; flex-direction: column; margin: 0 auto; text-align: center; color: #fff; }
    .items-holder{
        // display: grid; grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); 

        .item{
            display: grid; grid-template-columns: auto 1fr; align-items: center; grid-gap: 50px; justify-items: center; position: relative; padding: 40px; 
            .image-holder{--size: 300px; height: var(--size); width: var(--size); border-radius: 20px; border: 5px solid #fff;}
            .content-area{
                position: relative; color: #fff; display: grid; grid-template-columns: 1fr ; 
            
                // .rating-holder{width: 150px; height: 26px; background: url('/images/rating-icon.png');}
            }
        }
    }
`;

function Testimonials() {
    const TestimonialsData = [
        {
            id: 1,
            name: "kate Rogers",
            image: "/images/reviews/client-1.jpg",
            rating: 5,
            description: "Not to be confused with a success story or case study, a testimonia l is a creative way to share a statement made by a happy customer who can Not to be confused with a success story or case study, a testimonia l is a creative way to share a statement made by a happy customer who can ."
        },
        // {
        //     id: 2,
        //     name: "kate Rogers",
        //     image: "/images/reviews/client-1.jpg",
        //     rating: 4,
        //     description: "Not to be confused with a success story or case study, a testimonia l is a creative way to share a statement made by a happy customer who can Not to be confused with a success story or case study, a testimonia l is a creative way to share a statement made by a happy customer who can ."
        // },
    ]

  return (
    <StyledCom className="p-section section-seven" data-scroll-section >
        <div className="container">
            <div className="section-title-holder">
                <h2 className="section-title">What Our Satisfied <br /> <span> Clients Say About Us</span></h2>
            </div>
            <div className="items-holder">
                {TestimonialsData.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="image-holder">
                            <LazyLoadImage src={item.image} alt={item.name} />
                        </div>
                        <div className="content-area">
                            <h3 className="mb-md-3 font-weight-700">{item.name}</h3>
                            <div className="description-holder">
                                <p>{item.description}</p>
                            </div>
                            <div className="rating-holder mt-2">
                                {Array.from({ length: item.rating }, (_, i) => (
                                    <span key={i} style={{ color: "#F99F1C", fontSize: "35px" }}>★</span>
                                ))}
                                {Array.from({ length: 5 - item.rating }, (_, i) => (
                                    <span key={i + 5} style={{ color: "#F99F1C", fontSize: "35px" }}>☆</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </StyledCom>
  )
}

export default Testimonials;