import React from 'react'
import styled from "styled-components"
import LocationCard from './LocationCard'
import handshake from "../images/handshake.png"
import key from "../images/key.png"
import {useHistory} from 'react-router-dom'

const data = [
    {
        image: handshake,
        header: "sell my property",
        desc: "Have your property listed among the hottest selling properties in the Metro.",
        button: "list my property"
    },
    {
        image: key,
        header: "buy a property",
        desc: "Choose your dream home or next investment from our property listings.",
        button: "view listings for sale"
    },
]

const styles = {
    width: "unset",
    height: "unset",
    display: "block",
    margin: "0 auto"
}
const resetMargin = {
    margin: "unset"
}

const StyledHowCanWeHelp = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 4rem;

    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
        justify-content: unset;
    }
`
const HeaderText = styled.div`
    text-align: center;
    max-width: 520px;
    margin: 0 auto;
    margin-top: 8rem;
    h3{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 550;
        letter-spacing: 2px;
    }
    p{
        margin-top: 1.5rem;
        font-size: 15px;
        line-height: 1.7;
    }

`

const HowCanWeHelp = () => {
    const history = useHistory()
    return (
        <>
        <HeaderText>
            <h3>how can we help you?</h3>
            <p>We at Presello are committed to deliver the best brokering service in the market. Whether you are looking to sell your property or purchase your next investment, we are here to assist you.</p>
        </HeaderText>
        <StyledHowCanWeHelp>
            {data.map((da, index) => (
                <LocationCard key={index} image={da.image} header={da.header} desc={da.desc} button={da.button} style={styles} reset={resetMargin} onClick={() => history.push('/properties/1')}/>
            ))}

        </StyledHowCanWeHelp>
        </>
    )
}

export default HowCanWeHelp
