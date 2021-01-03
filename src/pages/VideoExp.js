import React, {useContext} from 'react'
import styled from "styled-components"
import { motion} from "framer-motion"
import {Context} from "../context/Context"


const VideoExpanded = styled(motion.div)`

        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.8);
        display: grid;
        place-items: center;
        z-index: 15;
        .video-container{
            width: 70%;
            height: 40vw;
            iframe{
                width: 100%;
                height: 100%;
            }

            @media screen and (max-width: 900px){
                width: 80%;
                height: 50vw;
            }
        }
`



const VideoExp = () => {
    const [ , , clicked, setClicked] = useContext(Context)
    return (
        <VideoExpanded
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            onClick={() => setClicked(!clicked)}
            >
            <motion.div className="video-container"
                layoutId="video"
            >
                <iframe 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                src="https://www.youtube.com/embed/HR8sBDFiA3w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='unique'>
                </iframe>
            </motion.div>
        </VideoExpanded>
    )
}

export default VideoExp
