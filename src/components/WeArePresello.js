import React from 'react'
import {Container} from './GlobalStyled'
import styled from "styled-components"
import image from '../images/living.jpg'

const StyledWe = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 0.85fr;
    padding: 0 1rem;
    margin-top: 10rem;
    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
    .preview{
        img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
        @media screen and (max-width: 900px){
            grid-row: 2/3;
        }
    }
    .text{
        background-color: black;
        padding: 5rem 3rem;
        .presello{
            color: white;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 3px;
        }
        .header{
            color: white;
            text-transform: uppercase;
            margin-top: 1rem;
            font-size: 1.3rem;
            font-weight: 600;
            letter-spacing: 2.5px;
        }
        .desc{
            color: white;
            margin-top: 1rem;
            font-size: 15px;
            font-weight: 300;
            line-height: 1.7;
        }
        .cta{
            margin-top: 2rem;
            display: flex;
            gap: 2rem;
            @media screen and (max-width: 1050px){
                flex-direction: column;
                gap: 1rem;
            }
            @media screen and (max-width: 900px){
                flex-direction: row;
                gap: 2rem;
            }
            @media screen and (max-width: 550px){
                flex-direction: column;
                gap: 1rem;
            }
            button{
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 2px;
                padding: 0.7rem 1.5rem;
                cursor: pointer;
            }
            .outline{
                background-color: transparent;
                color: white;
                border: 2px solid white;
                &:hover{
                    color: #E3C77C;
                    border-color: #E3C77C;
                }
            }
            .filled{
                background-color: #E3C77C;
                border: 2px solid #E3C77C;

                &:hover{
                    background-color: transparent;
                    color: #E3C77C;
                }
            }
        }
    }
`



const WeArePresello = () => {
    return (
        <StyledWe>
            <div className="preview">
                <img src={image} alt="Living Room"/>
            </div>
            <div className="text">
                <p className="presello">we are presello</p>
                <p className="header">upscale real estate in metro manila</p>
                <p className="desc">Presello Group offers the best house and lots for sale in Quezon City, and San Juan Metro Manila. House and lots and Preselling Condos for Sale.</p>
                <div className="cta">
                    <button className="outline">about us</button>
                    <button className="filled">view listings</button>
                </div>
            </div>
        </StyledWe>
    )
}

export default WeArePresello
