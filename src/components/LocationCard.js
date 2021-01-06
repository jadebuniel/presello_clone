import React from 'react'
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../client"
import {useHistory} from 'react-router-dom'

const Card = styled.div`
    width: 380px;
    border: 1px solid rgba(200, 200, 200, 0.4);
    margin: 0 auto;
    color: black;
    cursor: pointer;

    @media screen and (max-width: 420px){
        width: clamp(250px, 85vw, 375px);
    }

    img{
        width: 100%;
        height: 45%;
        object-fit: cover;
    }
    .text{
        margin-top: 1rem;
        padding: 0 1rem;
        .location{
            text-transform: uppercase;
            font-size: 1.25rem;
            font-weight: 500;
            text-align: center;
            letter-spacing: 2px;
            @media screen and (max-width: 420px){
                font-size: clamp(1rem, 5vw, 1.25rem);
            }
        }
        .desc{
            margin-top: 1rem;
            text-align: center;
            font-size: 15px;
            color: #333;
            line-height: 1.7rem;
            @media screen and (max-width: 420px){
                font-size: clamp(0.8rem, 3vw, 1rem);
                line-height: 1.5;
            }
        }
        button{
            display: block;
            margin: 0 auto;
            margin-top: 1.5rem;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            background: none;
            padding: 0.6rem 1rem;
            border: 2px solid black;
            letter-spacing: 2px;
            margin-bottom: 2rem;
            cursor: pointer;

            &:hover{
                background-color: #E3C77C;
                border-color: #E3C77C;
            }
        }
    }
    &:hover{
        border-color: #E3C77C;
        box-shadow: 0 0 20px rgba(37, 37, 37, 0.2);
    }
`

const builder = imageUrlBuilder(sanityClient)


const LocationCard = ({data, image, header, desc, button, style, reset, notLocation}) => {

    const history = useHistory()

    const urlFor = (source) => {
        return builder.image(source)
    }
    // console.log(data)
    const handleClickLocation = () => {
        history.push(`/property-location/${data.slug.current}/1`, [data])
        console.log(`location`)
    }
    const handleClickNotLocation = () => {
        history.push('/properties/1')
        console.log(`not location`)
    }
    return (
        
        <Card style={reset} onClick={() => notLocation ? handleClickLocation() : handleClickNotLocation()}>
            <img src={image || urlFor(data.thumb.asset._ref)} alt="" style={style}/>
            <div className="text">
                
                <p className="location">{header || data.location}</p>
                <p className="desc">{desc || data.description}</p>

                <button>{button || "view listings here"}</button>
            </div>
        </Card>
    )
}

export default LocationCard
