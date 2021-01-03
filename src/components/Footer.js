import React from 'react'
import {Outer ,Container} from "./GlobalStyled"
import styled from 'styled-components'


const navigations = [
    {
        name: 'Home',
        slug: 'home'
    },
    {
        name: 'Properties',
        slug: 'properties'
    },
    {
        name: 'Video Tours',
        slug: 'video-tours'
    },
    {
        name: 'Open House',
        slug: 'open-house'
    },
    {
        name: 'Podcast',
        slug: 'podcast'
    },
    {
        name: 'Interior Design',
        slug: 'interior-design'
    },
]
const locations = [
    {
        name: 'New Manila',
        slug: 'new-manila'
    },
    {
        name: 'San Juan',
        slug: 'san-juan'
    },
    {
        name: 'Quezon City',
        slug: 'quezon-city'
    },
    {
        name: 'Ayala Alabang',
        slug: 'ayala-alabang'
    },
    {
        name: 'BF Paranaque',
        slug: 'bf-paranaque'
    },
]
const informations = [
    {
        name: 'About',
        slug: 'about'
    },
    {
        name: 'Blog',
        slug: 'blog'
    },
    {
        name: 'Privacy Policy',
        slug: 'privacy-policy'
    },
    {
        name: 'Terms & Conditions',
        slug: 'terms-and-conditions'
    },
    {
        name: 'Sitemap',
        slug: 'sitemap'
    },
    {
        name: 'Find us on the Web',
        slug: 'find-us'
    },
]

const CustomOuter = styled(Outer)`
    background-color: black;
    margin-top: 8rem;
    padding: 3rem 0;
    hr{
        margin: 3rem 0;
        display: block;
        border: none;
        border-top: 2px solid rgba(200, 200, 200, 0.25);

        @media screen and (max-width: 900px){
            margin: 4rem 0;
        }
        
    }
    .copyright{
        color: #999;
        margin: 0 auto;
        margin-top: 4rem;
        font-size: 12px;
        max-width: 1200px;
        padding: 0 1rem;
        @media screen and (max-width: 900px){
            text-align: center;
            padding: 0;
        } 
    }
`

const RowOne = styled(Container)`
    display: flex;
    color: white;
    justify-content: space-between;
    padding: 0 1rem;

    @media screen and (max-width: 900px){
        flex-direction: column;
        justify-content: unset;
        gap: 2rem;
    }
    .newsletter{
        width: 100%;
        .header{
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 3px;
            @media screen and (max-width: 900px){
                text-align: center;
            }
        }
        .desc{
            margin-top: 1rem;
            font-size: 15px;
            @media screen and (max-width: 900px){
                text-align: center;
            }
        }
        .form{
            margin-top: 1.5rem;
            position: relative;
            background-color: white;
            @media screen and (max-width: 900px){
                margin-top: 2rem;
            }
            @media screen and (max-width: 600px){
                display: flex;
                flex-direction: column;
            }
            .input-text{
                font-size: 14px;
                padding: 1.2rem 1.5rem;
                width: 100%;
                border: none;
                &::placeholder{
                    font-style: italic;
                }
            }
            .button-submit{
                position: absolute;
                right: 0.4rem;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: 600;
                border: none;
                background-color: #E3C77C;
                padding: 0.8rem 4rem;
                cursor: pointer;

                @media screen and (max-width: 600px){
                    display: block;
                    position: relative;
                    right: 0;
                    width: 98%;
                    margin: 0 auto;
                    margin-bottom: 5px;
                    transform: translateY(0)
                }
                &:hover{
                    background-color: black;
                    color: #E3C77C;
                }

            }
        }
    }
    .social{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        @media screen and (max-width: 900px){
            width: 100%;
        }
        .social-links{
            display: flex;
            gap: 2rem;
            span{
                font-size: 1.8rem;
                cursor: pointer;
                &:hover{
                    color: #E3C77C;
                }
            }
        }
        .connect{
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
            font-size: 14px;
        }
    }
`

const RowTwo = styled(Container)`
    display: flex;
    color: white;
    gap: clamp(5rem, 10vw, 10rem);
    padding: 0 1rem;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
    a{
        color: white;
    }
    .container{
        @media screen and (max-width: 900px){
                margin: 0 auto;
            }
        h2{
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
            @media screen and (max-width: 900px){
                text-align: center;
            }
        }
        ul{
            width: 100%;
            margin-top: 2rem;
            @media screen and (max-width: 900px){
                text-align: center;
            }
            a{
                li{
                    font-size: 14px;
                    margin: 0.5rem 0;
                    font-weight: 300;

                    &:hover{
                        color: #E3C77C;
                    }
                    span{
                        margin-right: 5px;
                    }
                    .fa-mobile{
                            margin-right: 10px;
                        }
                }
            }
        }
    }
`

const Footer = () => {
    return (
        <CustomOuter>
            <RowOne>
                <div className="newsletter">
                    <h2 className="header">JOIN OUR NEWSLETTER</h2>
                    <p className="desc">Get the latest listings, news, and promotions once a week on your inbox.</p>
                    <form className="form" onSubmit={(e)=> e.preventDefault()}>
                        <input type="text" className="input-text" placeholder="Your email address"/>
                        <button className="button-submit" type="submit">subscribe</button>
                    </form>
                </div>
                <div className="social">
                    <div className="social-links">
                        <span className="fab fa-youtube"></span>
                        <span className="fab fa-facebook-f"></span>
                        <span className="fab fa-instagram"></span>
                    </div>
                    <p className="connect">connect with us</p>
                </div>
            </RowOne>
            <hr/>
            <RowTwo>
                <div className="container">
                    <h2>navigation</h2>
                    <ul>
                        {navigations.map((navigation, index) => (
                            <a href="/" key={index}><li >{navigation.name}</li></a>
                        ))}
                    </ul>
                </div>
                <div className="container">
                    <h2>key locations</h2>
                    <ul>
                        {locations.map((location, index) => (
                            <a href="/" key={index}><li >{location.name}</li></a>
                        ))}
                    </ul>
                </div>
                <div className="container">
                    <h2>information</h2>
                    <ul>
                        {informations.map((information, index) => (
                            <a href="/" key={index}><li >{information.name}</li></a>
                        ))}
                    </ul>
                </div>
                <div className="container">
                    <h2>get in touch</h2>
                    <ul>
                            <a href="/"><li><span className="fas fa-envelope-open"></span> info.presello@gmail.com</li></a>
                            <a href="/"><li><span className="fas fa-mobile"></span> 0966 256 9937</li></a>
                    </ul>
                </div>
            </RowTwo>
                        
            <p className="copyright">Copyright © 2018-2020 Presello Group.</p>
        </CustomOuter>
    )
}

export default Footer
