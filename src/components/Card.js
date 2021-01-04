import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import imageUrlBuilder from "@sanity/image-url"

const StyledCard = styled.div`
    width: 365px;
    height: 475px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.15);
    margin: 0 auto;
    position: relative;
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
        }
        .rooms{
            display: flex;
            gap: 5rem;
            margin-top: .5rem;
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
    const [location, setLocation] = useState()

    const urlFor = (source) => {
        return builder.image(source)
    }

    useEffect(() => {
        const fetchLocation = async () => {
            const data = await sanityClient
            .fetch(`*[_type=="location" && _id=="${house.location._ref}"]`)
            setLocation(data[0].location)

        }
        fetchLocation()
    }, [house.location._ref])
    return (
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
    )
}

export default Card
