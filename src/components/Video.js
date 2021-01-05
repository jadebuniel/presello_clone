import React, {useContext} from 'react'
import {Container} from "./GlobalStyled"
import styled from "styled-components"
import image from "../images/thumb.jpg"
import play from "../images/play.png"
import {motion} from "framer-motion"
import {Context} from "../context/Context"


const VideoStyled = styled(Container)`
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    padding: 0 1rem;
    margin-top: 10rem;
    position: relative;

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
    .text{
        background-color: black;
        padding: 6rem 3rem;
        @media screen and (max-width: 1000px){
            padding: 4rem 3rem; 
        }
        .first{
            color: white;
            font-size: 14px;
            font-weight: 600;
        }
        .second{
            color: white;
            margin-top: 1rem;
            font-size: 1.4rem;
            letter-spacing: 2px;
            font-weight: 500;
            @media screen and (max-width: 420px){
                font-size: clamp(1rem, 5vw, 1.4rem);
            }
        }
        .third{
            color: white;
            margin-top: 1rem;
            font-size: 14px;
            font-weight: 300;
            @media screen and (max-width: 420px){
                font-size: clamp(12px, 4vw, 14px);
            }
        }
        .btn-group{
            display: flex;
            gap: 2rem;
            margin-top: 1.5rem;
            @media screen and (max-width: 1000px){
                flex-direction: column;
            }
            @media screen and (max-width: 900px){
                flex-direction: row;
            }
            @media screen and (max-width: 550px){
                flex-direction: column;
            }
            button{
                padding: 0.75rem 1.5rem;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                white-space: nowrap;
            }
            .outline{
                background: none;
                color: white;
                border: white 2px solid;
                span{
                    margin-left: 8px;
                }
                &:hover{
                    color: #E3C77C;
                    border-color: #E3C77C;
                }
            }
            .fill{
                background: #E3C77C;
                border: #E3C77C 2px solid;

                &:hover{
                    background: none;
                    color: #E3C77C;
                }

            }
        }
    }
    .preview{
        position: relative;
        .preview-img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: grid;
            place-items: center;
            cursor: pointer;
            
            img{
                width: 80px;
            }
        }
    }
`

const Video = () => {
    const [ , , clicked, setClicked] = useContext(Context)
    return (
        <VideoStyled>
            <div className="text">
                <p className="first">OUR LATEST HOUSE TOUR</p>
                <p className="second">SHOCKINGLY HUGE MANSION | ICONIC HERITAGE MANSION IN AYALA ALABANG</p>
                <p className="third">Elegant and Massive this Half Hectare Mansion lies inside the exclusive Ayala Alabang village, the massive space and lot area is fit for a king.</p>
                <div className="btn-group">
                    <button className="outline" onClick={() => setClicked(true)}>WATCH VIDEO <span className="fas fa-play"></span></button>
                    <button className="fill">BOOK A VIEWING</button>
                </div>
            </div>

            <motion.div className="preview" layoutId="video" initial={false} onClick={() => setClicked(!clicked)}>
                <img src={image} alt="" className="preview-img"/>
                <div className="overlay">
                    <img src={play} alt=""/>
                </div>
            </motion.div>

        </VideoStyled>
    )
}

export default Video
