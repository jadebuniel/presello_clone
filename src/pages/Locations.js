import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout'
import {Container} from '../components/GlobalStyled'
import styled from 'styled-components'
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import Video from '../components/Video'
import VideoExp from './VideoExp'
import {Context} from '../context/Context'
import LocationCard from '../components/LocationCard'


const StyledLocations = styled(Container)`
    padding: 0 1rem;
    .header{
        padding-top: 12rem;
        text-align: center;
        font-weight: 600;
        font-size: 1.8rem;
        text-transform: uppercase;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
        column-gap: 1rem;
        row-gap: 2rem;
        margin-top: 4rem;

        @media screen and (max-width: 420px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    }
`
const Locations = () => {

    const [ , , clicked, , data, ] = useContext(Context)
    document.querySelector('body').style.overflowY = clicked ? "hidden" : "unset"

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Layout>
            <StyledLocations>
                <h3 className="header">key Locations</h3>
                <div className="grid">

                    {data && data.map((place, index) => (
                        <LocationCard key={index} data={place} notLocation={true}/>
                    ))}

                </div>
            </StyledLocations>
            <AnimateSharedLayout >
            <Video/>
                <AnimatePresence>
                    {clicked && <VideoExp/>}
                </AnimatePresence>
            </AnimateSharedLayout>
        </Layout>
    )
}

export default Locations
