import React, {useRef, useState} from 'react'
import {Outer, Container} from './GlobalStyled'
import styled from "styled-components"
import logo from '../images/logo.png'

const Navbar = styled(Outer)`
    background-color: transparent;
    position: fixed;
    z-index: 5;
`

const NavContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    position: relative;

    @media screen and (max-width: 900px){
        padding: 2rem 1rem;
        flex-direction: column;
        align-items: unset;
        overflow: visible;
    }
`
const LogoContainer = styled.div`
    img{
        width: 200px
    }

    @media screen and (max-width: 900px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

const NavList = styled.ul`
    display: flex;
    gap: 2rem;
    li{
        text-transform: uppercase;
        font-weight: 500;
        @media screen and (max-width: 900px){
            text-align: center;
        }
        a{
            color: white;
            position: relative;
            &:hover{
                color:  #E3C77C;
                &::before{
                    transform: scaleX(1)
                }
            }
            &::before{
                position: absolute;
                content: "";
                width: 100%;
                height: 2px;
                margin-top: 2rem;
                background-color: #E3C77C;
                display: block;
                transform: scaleX(0)
            }
            @media screen and (max-width: 900px){
                display: block;
                padding: 1.5rem 5rem;
                border: 2px solid transparent;
                &::before{
                    width: 0;
                }
                &:hover, &:focus{
                    border-color: #E3C77C;
                } 
            }
        }
    }
    @media screen and (max-width: 900px){
        position: absolute;
        background-color: black;
        flex-direction: column;
        width: 80%;
        height: 100vh;
        right: 0;
        bottom: 0;
        padding: 3rem 1rem;
        transform: translateY(100%) translateX(100%);
        gap: 0;
    }
    @media screen and (max-width: 500px){
        width: 100%;
    }
`
const Hamburger = styled.div`
    position: relative;
    width: 40px;
    height: 28px;
    display: none;
    cursor: pointer;

    span{
        position: absolute;
        background-color: white;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        &:nth-child(1){
            top: 0;
            left: 0;
        }
        &:nth-child(2){
            top: 50%;
            transform: translateY(-50%)
        }
        &:nth-child(3){
            top: 50%;
            transform: translateY(-50%)
        }
        &:nth-child(4){
            bottom: 0;
            left: 0;
        }
    }

    @media screen and (max-width: 900px){
        display: block;
    }
`
const StyledLink = styled.a`
    padding: .8rem 1.25rem;
    border: 2px solid #E3C77C;
    font-size: 14px;
    &:hover{
        background-color: rgba(255, 208, 0, 0.5);
        color: white !important;
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



const Nav = () => {
    const [navBar, setNavBar] = useState(false)

    const navCon = useRef()
    const navRef = useRef()


    document.addEventListener("DOMContentLoaded", () => {
        setNavBar(window.innerWidth >= 768 && false)
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768){
            setNavBar(false)
        } else {
            return
        }
    })
    document.addEventListener('scroll', () => {
        if (navCon.current) {
            if (window.pageYOffset >= 200){
                navCon.current.classList.add("nav-scrolled")
                navRef.current.classList.add('nav-outer-scrolled')
            } else {
                navRef.current.classList.remove('nav-outer-scrolled')
                navCon.current.classList.remove("nav-scrolled")
            }
        }
    })


    return (

        <Navbar ref={navRef} style={{backgroundColor: navBar ? `black` : null}}>
            <NavContainer ref={navCon}>
                <LogoContainer>
                    <img src={logo} alt=""/>
                    <Hamburger onClick={() => setNavBar(!navBar)} className={navBar ? "hamburger-active" : null}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburger>
                </LogoContainer>
                <NavList className={navBar ? "nav-active" : null}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Properties</a></li>
                    <li><a href="/">Location</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><StyledLink href="/">Book a Viewing</StyledLink></li>
                </NavList>
            </NavContainer>
        </Navbar>
    )
}

export default Nav
