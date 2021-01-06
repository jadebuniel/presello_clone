import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import imageUrlBuilder from "@sanity/image-url"
import {Link, useHistory} from 'react-router-dom'

const StyledCard = styled.div`
    width: clamp(375px, 30vw, 400px);
    height: 475px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.15);
    /* margin: 0 auto; */
    position: relative;
    color: black;
    &:hover{
        box-shadow: 0 0 20px rgba(37, 37, 37, 0.4);
    }

    @media screen and (max-width: 1207px){
        margin: 0 auto;
    }
    @media screen and (max-width: 420px){
        width: clamp(250px, 85vw, 375px);
        height: 550px;
    }
    img{
        width: 100%;
        height: 45%;
        object-fit: cover;
    }
    .location{
        background: rgba(180, 180, 180, 0.9);
        position: absolute;
        top: 20px;
        left: 20px;
        border-radius: 20px;
        padding: 0 10px;
        color: white;
        text-transform: uppercase;
        font-size: 1rem;
        cursor: pointer;

        &:hover{
            background-color: #555;
        }
    }
`
const CardDetails = styled.div`
        height: 100%;
        width: 100%;
        padding: 1rem;
        .price{
            font-weight: 600;
            font-size: 1.6rem;
            @media screen and (max-width: 420px){
                font-size: clamp(1.2rem, 6.5vw, 1.6rem);
            }
            span{
                font-size: 1rem;
                margin-right: 0.25rem;
                font-weight: 400;
            }
        }
        .title{
            font-weight: 500;
            font-size: 1rem;
            margin-top: .5rem;
            cursor: pointer;
            &:hover{
                    color: #E3C77C;
                }
            @media screen and (max-width: 420px){
                font-size: clamp(0.8rem, 3.8vw, 1rem);
            }
        }
        .rooms{
            display: flex;
            gap: 5rem;
            margin-top: .5rem;
            @media screen and (max-width: 420px){
                gap: clamp(2rem, 10vw, 5rem);
            }
        }
        .status{
            margin-top: 0.5rem;
            text-transform: uppercase;
            font-weight: 500;
        }
        .cta{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1.8rem;
            margin-bottom: 1.8rem;
            p{
                text-transform: uppercase;
                font-weight: 600;
                font-size: 18px;
                cursor: pointer;
                &:hover{
                    color: #E3C77C;
                }
            }
            .fas{
                font-size: 1.7rem;
                cursor: pointer;
                color: #aaa;
                &:hover{
                    color: #E3C77C;
                }
            }
        }

`
const builder = imageUrlBuilder(sanityClient)

const Card = ({house}) => {

    const history = useHistory()

    const [location, setLocation] = useState()
    const [info, setInfo] = useState()


    const urlFor = (source) => {
        return builder.image(source)
    }

    useEffect(() => {
        const fetchLocation = async () => {
            const data = await sanityClient
            .fetch(`*[_type=="location" && _id=="${house.location._ref}"]`)
            setLocation(data[0].location)
            setInfo(data)

        }
        fetchLocation()
    }, [house.location._ref])
    
    const handleOnClick = (e) => {
        if (e.target.className.includes("location")){
            e.preventDefault()
            history.push(`/property-location/${info[0].slug.current}/1`, [info[0]])
        }
    }
    return (
        <Link to={{
            pathname: `/property/${house.slug.current}`,
            state: house
        }}
        onClick={(e) => handleOnClick(e)}
        >
        <StyledCard>
            <img src={urlFor(house.thumb.asset._ref)} alt=""/>
            <CardDetails>
                <p className="price"><span>₱</span>{house.price}</p>
                <p className="title">{house.title}</p>
                <div className="rooms">
                    <p><span className="fas fa-bed"></span> {house.bedrooms} Bedrooms</p>
                    <p><span className="fas fa-shower"></span> {house.bathrooms} Bathrooms</p>
                </div>
                <p className="status">available</p>
                <div className="cta">
                    <p>add to compare</p>
                    <span className="fas fa-bookmark"></span>
                </div>
            </CardDetails>
            <p className="location"><span className="fas fa-map-marker-alt"></span> {location}</p>
        </StyledCard>
        </Link>
    )
}

export default Card
