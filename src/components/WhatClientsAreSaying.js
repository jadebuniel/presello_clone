import React from 'react'
import {Container} from './GlobalStyled'
import stars from '../images/stars.png'
import styled from 'styled-components'
import Slider from "react-slick"

const StyledSlider = styled(Container)`
padding: 0 1rem;
overflow: hidden;
&:hover{
    cursor: grab;
}
&:active{
    cursor: grabbing;
}
    div{
        outline: none;
        padding: 1rem 0;
        .review{
            color: #777;
            font-size: 1.1rem;
            font-weight: 500;
            font-style: italic;
            text-align: center;
        }
        .author{
            margin-top: 3rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1px;
            text-align: center;
        }
    }
`
const Header = styled.div`
    margin: 0 auto;
    margin-top: 8rem;
    h3{
        text-align: center;
        font-weight: 550;
        text-transform: uppercase;
        font-size: 1.5rem;
        letter-spacing: 2px;
    }
    img{
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
    }
`

const WhatClientsAreSaying = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
            breakpoint: 900,
            settings: {
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
            settings: {
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
    ]
    }
    return (
        <>
        <Header>
            <h3>what clients are saying</h3>
            <img src={stars} alt=""/>
        </Header>
        <StyledSlider>
            <Slider {...settings}>
            <div>
                <p className="review">Superb service from accomodating and friendly staff.</p>
                <p className="author">jennylyn</p>
            </div>
            <div>
                <p className="review">This is how real estate agents should sell properties.</p>
                <p className="author">migs amper</p>
            </div>
            <div>
                <p className="review">One of the best real estate service group in the Philippines, they have so many houses for sale!! I didn't even know there were that many. Good work Presello Team. </p>
                <p className="author">essence berondo</p>
            </div>
            <div>
                <p className="review">Nice and well made videos. For investors like me this is what we want to see...worth looking into.</p>
                <p className="author">ferdie</p>
            </div>
            </Slider>
        </StyledSlider>
        </>
    )
}

export default WhatClientsAreSaying
