import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../context/Context"
import Card from './Card'
import {Container} from "./GlobalStyled"
import styled from "styled-components"

const Featured = styled(Container)`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(365px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(365px, 1fr));
    margin-top: 2rem;
    gap: 2rem;
    padding: 0 1rem;
    
    @media screen and (max-width: 420px){
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

`
const Header = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 8rem;
    letter-spacing: 3px;
    @media screen and (max-width: 420px){
        font-size: clamp(0.8rem, 5vw, 1.5rem);
    }
`

const FeaturedList = () => {
    const [data, , , ,] = useContext(Context)
    const [houses, setHouses] = useState(null)
    useEffect(() => {
        setHouses(data && data.filter(da => da.featured === true))
    }, [data])
    return (
        <>
        <Header>featured properties</Header>
        <Featured>
            {houses && houses.map((house, index) => (
                <Card key={index} house={house}/>
            ))}
        </Featured>
        </>
    )
}

export default FeaturedList
