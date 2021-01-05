import React, {useEffect} from 'react'
import Layout from '../components/Layout'
import {Container} from '../components/GlobalStyled'
import styled from 'styled-components'
import { useEmblaCarousel } from 'embla-carousel/react'
import image from '../images/hero.jpg'

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
        .title{
            font-size: 1.8rem;
            font-weight: 500;
            color: #222;
        }
        .price{
            color: #222;
            font-size: 1.25rem;
            font-weight: 600;
        }
    }
    hr{
        border: none;
        border-top: solid black 2.5px;
    }
`
const OuterCarousel = styled(Container)`
    padding: 0 1rem;
`
const Carousel = styled(Container)`
    overflow: hidden;
    position: relative;
    left: 50%;
    transform: translateX(calc(-50% - 1rem));
    margin: 0 1rem;
    margin-top: 2rem;
    max-width: calc(1300px - 2rem);
    height: 600px;
    @media screen and (max-width: 1000px){
        padding-top: 10rem;
        margin-top: 0;
    }
    img{
        width: 100%;
        height: 70%;
        object-fit: cover;

        @media screen and (max-width: 800px){
            height: 100%;
        }
    }
`
const CarouselContainer = styled.div`
    display: flex;
`
  const Slide = styled.div`
    min-width: 100%;
    cursor: grab;
    &:active{
        cursor: grabbing;
    }
  `
const HeaderMobile = styled(Container)`
    padding: 0 1rem;
    margin-top: 2rem;
    z-index: 5;
    .cta{
        cursor: pointer;
    }
`

const ItemPage = ({match, location}) => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false})

    useEffect(() => {
        if (emblaApi) {
        }
        }, [emblaApi])
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Layout>
            <HeaderWide>
                <div className="first">
                    <p className="location"><span className="fas fa-map-marker-alt"></span> manila</p>
                    <p className="status">available</p>
                </div>
                <div className="second">
                    <p className="title">Elegant Luxury House and lot for Sale in Manila</p>
                    <p className="price">₱ 38,700,000 - 52,450,000</p>
                </div>
                <hr/>
            </HeaderWide>
            <OuterCarousel>
            <Carousel ref={emblaRef}>
            <CarouselContainer>
                <Slide>
                    <img src={image} alt=""/>
                </Slide>
                <Slide>
                    <img src={image} alt=""/>
                </Slide>
                <Slide>
                    <img src={image} alt=""/>
                </Slide>
                <Slide>
                    <img src={image} alt=""/>
                </Slide>
            </CarouselContainer>
            </Carousel>
            </OuterCarousel>
            <HeaderMobile>
                <div className="cta">
                    <span className="fas fa-bookmark"></span>
                    <span>add to compare</span>
                </div>
            </HeaderMobile>
        </Layout>
    )
}

export default ItemPage
