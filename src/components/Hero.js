import React from 'react'
import {Outer, Container} from './GlobalStyled'
import styled from 'styled-components'
import heroImage from "../images/hero.jpg"

const StyledHero = styled(Outer)`
    height: 100vh;
    width: 100%;
    background-image: url(${heroImage});
    /* position: relative; */
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.05);
`

const Hero = () => {
    return (
        <StyledHero>
            <Overlay/>
        </StyledHero>
    )
}

export default Hero
