import React from 'react'
import {Outer, Container} from './GlobalStyled'
import styled from 'styled-components'
import heroImage from "../images/hero.jpg"

const StyledHero = styled(Outer)`
    height: 100vh;
    width: 100%;
    background-image: url(${heroImage});
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.1);
`
const HeroContainer = styled(Container)`
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    @media screen and (max-width: 900px){
        align-items: center;
        gap: 3rem;
    }
    h1{
        font-family: 'Libre Baskerville', serif;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 4rem;

        @media screen and (max-width: 1200px){
            font-size: clamp(2rem, 6vw, 4rem);
        }
        @media screen and (max-width: 900px){
            text-align: center;
            font-size: clamp(2rem, 7vw, 2.5rem);
        }
    }
    *{
        z-index: 2;
    }
`

const Hero = () => {
    return (
        <StyledHero>
            <Overlay/>
            <HeroContainer>
            <h1><span>Invest</span> in your future.</h1>
            <h1><span>Invest</span> with Presello.</h1>
            </HeroContainer>
        </StyledHero>
    )
}

export default Hero
