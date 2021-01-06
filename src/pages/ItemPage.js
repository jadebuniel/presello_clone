import React, {useEffect, useState, useContext} from 'react'
import Layout from '../components/Layout'
import {Container} from '../components/GlobalStyled'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sanityClient from '../client'
import imageUrlBuilder from "@sanity/image-url"
import {Context} from '../context/Context'
import Card from '../components/Card'



const HeaderWide = styled(Container)`
    padding: 0 1rem;
    padding-top: 12rem;
    @media screen and (max-width: 1000px){
        display: none;
    }
    .first{
        display: flex;
        justify-content: space-between;
        color: #777;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        align-items: center;
        .status{
            font-size: 1.1rem;
        }
    }
    .second{
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0;
        align-items: center;
        gap: 2rem;
        .title{
            font-size: 1.8rem;
            font-weight: 500;
            color: #222;
        }
        .price{
            color: #222;
            font-size: 1.25rem;
            font-weight: 600;
            white-space: nowrap;
        }
    }
    hr{
        border: none;
        border-top: solid black 2.5px;
    }
`
const Cta = styled(Container)`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    color: #777;
    font-size: 1rem;
    span{
        cursor: pointer;
        &:hover{
            color: #E3C77C;
        } 
    }
    .fa-bookmark{
        font-size: 1.5rem;
        color: #bbb;
        cursor: pointer;
    }
`
const HeaderMobile = styled(Container)`
    color: #333;
    padding: 0 1rem;
    display: none;
    @media screen and (max-width: 1000px){
        display: block;
    }
    .fas{
        color: #777;
        margin-right: 5px;
    }
    .fa-map-marker-alt{
        margin-right: 10px;
    }
    .price{
        font-size: 2rem;
        font-weight: 600;
        margin-top: 2rem;
        @media screen and (max-width: 600px){
            font-size: clamp(1.5rem, 6vw, 2rem);
        }
    }
    .title{
        font-weight: 500;
        font-size: 1.5rem;
        margin-top: 0.5rem;
        @media screen and (max-width: 600px){
            font-size: clamp(1.25rem, 4vw, 1.5rem);
        }
    }
    .status{
        margin-top: 1rem;
        text-transform: capitalize;
    }
    .location{
        text-transform: capitalize;

    }
`


const StyledCarousel = styled(Carousel)`
    padding: 0 1rem;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 1000px){
        margin-top: 0;
        padding-top: 8rem;
    }
    div{
        /* max-height: 800px; */
        &:hover{
            cursor: pointer;
        }
        img{
            object-fit: cover;
            object-position: bottom;
        }

    }
`

const StyledDetails = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 0.45fr;
    padding: 0 1rem;
    margin-top: 3rem;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }

    .first-column{
        padding: 0 1.5rem 0 0;
        @media screen and (max-width: 1000px){
            padding: 0;
        }
        .details{
                display: flex;
                margin-top: 2rem;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 1rem;
            .detail{
                letter-spacing: 2px;
                .figures{
                    font-size: 1.5rem;
                    font-weight: 500;
                    @media screen and (max-width: 750px){
                        font-size: clamp(1rem, 3vw, 1.5rem);
                    }
                }
                .category{
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: 500;

                    @media screen and (max-width: 750px){
                        font-size: clamp(12px, 2vw, 14px);
                    }
                }
            }
        }
        .description{
            margin-top: 3rem;
            .desc{
                @media screen and (max-width: 750px){
                    font-size: clamp(14px, 3vw, 1rem);
                }
            }
        }
        .features{
            margin-top: 3rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media screen and (max-width: 650px){
                grid-template-columns: 1fr;
            }
            .neighbor-features{
                @media screen and (max-width: 650px){
                    margin-top: 3rem;
                }
            }
            ul{
                li{
                    @media screen and (max-width: 750px){
                    font-size: clamp(14px, 3vw, 1rem);
                }
                }
            }
        }
    }
    .header{
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 1.5rem;
            }
    .second-column{
        padding: 0 0 0 1.5rem;
        @media screen and (max-width: 1000px){
            padding: 0;
            margin-top: 2rem;
            }
        .interested{
            background-color: black;
            color: white;
            padding: 3rem 1.5rem;
            display: flex;
            flex-direction: column;
            text-align: center;
            .interested-header{

            }
            .desc{
                font-size: 0.9rem;
            }
        }
    }
`
const StyledLink = styled.a`
    padding: .5rem 1.8rem;
    border: 2px solid #E3C77C;
    font-size: 14px;
    color: black;
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    background-color: #E3C77C;
    text-transform: uppercase;
    &:hover{
        background-color: transparent;
        color: #E3C77C !important;
    }
    &::before{
        width: 0 !important;
    }
    @media screen and (max-width: 900px){
        display: block;
        width: 200px;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
        padding: .8rem 1.25rem !important;
        border: 2px solid #E3C77C !important;
    }
`
const StyledSuggestion = styled(Container)`
    padding: 0 1rem;    

    .suggest-header{
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.5rem;
        letter-spacing: 3px;
        text-align: center;
        margin-top: 12rem;
    }
    .list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
        @media screen and (max-width: 420px){
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
`


const ItemPage = ({match, location}) => {

    const [loc, setLocation] = useState('')
    const [suggest, setSuggest] = useState(null)

    const [houses, , , , , ] = useContext(Context)
    // console.log(location.state)

    useEffect(() => {
        if (houses){
            const locHouse = houses.filter(house => house.location._ref === location.state.location._ref && house._id !== location.state._id)
            setSuggest(locHouse.slice(0, 3))
        }
    }, [houses, location.state._id])


    useEffect(() => {
        window.scrollTo(0,0)
    }, [location.state._id])
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
    })

    useEffect(() => {
        const fetchLocation = async () => {
            const data = await sanityClient
            .fetch(`*[_type=="location" && _id=="${location.state.location._ref}"]`)
            setLocation(data[0].location)

        }
        fetchLocation()
        // console.log(location.state)
    }, [])

    const builder = imageUrlBuilder(sanityClient)

    const urlFor = (source) => {
        return builder.image(source)
    }

    return (
        <Layout>
            <HeaderWide>
                <div className="first">
                    <p className="location"><span className="fas fa-map-marker-alt"></span> {loc}</p>
                    <p className="status">available</p>
                </div>
                <div className="second">
                    <p className="title">{location.state.title}</p>
                    <p className="price">₱ {location.state.price}</p>
                </div>
                <hr/>
            </HeaderWide>
            <StyledCarousel 
             infiniteLoop={true} thumbWidth={50} showThumbs useKeyboardArrows showStatus stopOnHover swipeScrollTolerance={0} swipeable={width <= 768 ? true : false} showIndicators={width <= 768 ? false : true} autoPlay={true} interval={8000} dynamicHeight>
                {location.state.images.map((image, index) => (
                <div>
                    <img src={urlFor(image.asset._ref)} key={index} alt="CarouselImage"/>
                </div>
                ))}
            </StyledCarousel>
        <HeaderMobile>
            <p className="price">₱ {location.state.price}</p>
            <p className="title">{location.state.title}</p>
            <p className="status"><span className="fas fa-flag"></span> available</p>
            <p className="location"><span className="fas fa-map-marker-alt"></span> {loc}</p>
        </HeaderMobile>
        <StyledDetails>
            <div className="first-column">


                <Cta>
                    <span className="fas fa-bookmark"></span>
                    <span>add to compare</span>
                </Cta>

                
                <div className="details">
                    <div className="detail">
                        <p className="figures"><span className="fas fa-bed"></span> {location.state.bedrooms}</p>
                        <p className="category">bedrooms</p>
                    </div>
                    <div className="detail">
                        <p className="figures"><span className="fas fa-shower"></span> {location.state.bathrooms}</p>
                        <p className="category">bathrooms</p>
                    </div>
                    <div className="detail">
                        <p className="figures"><span className="fas fa-car"></span> {location.state.carparks}</p>
                        <p className="category">car parks</p>
                    </div>
                    <div className="detail">
                        <p className="figures"><span className="fas fa-border-all"></span> {location.state.floor}<span className="unit">&#13217;</span></p>
                        <p className="category">floor area</p>
                    </div>
                    <div className="detail">
                        <p className="figures"><span className="fas fa-ruler-combined"></span> {location.state.lot}<span className="unit">&#13217;</span></p>
                        <p className="category">lot area</p>
                    </div>
                </div>


                <div className="description">
                    <h3 className="header">description</h3>
                    <p className="desc">{location.state.description}</p>
                </div>


                <div className="features">
                    <div className="home-features">
                        <h3 className="header">home features</h3>
                        <ul className="feature-list">
                            {location.state.homefeatures.map((home, index) => (
                                <li key={index} className="feature-item">✓ {home}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="neighbor-features">
                        <h3 className="header">neighborhood features</h3>
                        <ul className="feature-list">
                            {location.state.neighborhoodfeatures.map((home, index) => (
                                <li key={index} className="feature-item">✓ {home}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="second-column">
                <div className="interested">
                    <h3 className="header interested-header">interested in this property?</h3>
                    <p className="desc">Our listings are in high demand, so don’t wait until your chance is over. Talk to one of our agents now to schedule a viewing.</p>
                    <StyledLink href="/">Book a Viewing</StyledLink>
                </div>
            </div>
        </StyledDetails>
        
        <StyledSuggestion>
            <h3 className="suggest-header">suggested properties</h3>
            <div className="list">
                {suggest && suggest.map((sug, index) => (
                    <Card key={index} house={sug} />
                ))}
            </div>
        </StyledSuggestion>
       
        </Layout>
    )
}

export default ItemPage
