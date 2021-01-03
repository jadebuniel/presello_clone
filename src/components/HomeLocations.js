import React, {useState, useContext, useEffect} from 'react'
import {Context} from "../context/Context"
import LocationCard from './LocationCard'
import {Container} from './GlobalStyled'
import styled from "styled-components"

const StyledLocation = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
    padding: 0 1rem;
`
const Header = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 3rem;
    letter-spacing: 3px;
`

const HomeLocations = () => {
    const [, , , , data, ] = useContext(Context)
    const [popularLoc, setPopularLoc] = useState(null)

    useEffect(() => {
        if (data){
            setPopularLoc(data.filter(da => da.popular === true))
        }
    }, [data])
    return (
        <>
        <Header>popular property locations</Header>
        <StyledLocation>
            {popularLoc && popularLoc.map((loc, index) => (
                <LocationCard key={index} data={loc}/>
            ))}
        </StyledLocation>
        </>
    )
}

export default HomeLocations
