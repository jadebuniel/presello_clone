import React, {useContext} from 'react'
import FeaturedList from '../components/FeaturedList'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Video from '../components/Video'
import HomeLocations from '../components/HomeLocations'
import HowCanWeHelp from '../components/HowCanWeHelp'
import {Context} from "../context/Context"
import {AnimateSharedLayout, AnimatePresence} from 'framer-motion'
import VideoExp from './VideoExp'
import WeArePresello from '../components/WeArePresello'
import WhatClientsAreSaying from '../components/WhatClientsAreSaying'

const Home = () => {
    const [ , , clicked, ] = useContext(Context)
    document.querySelector('body').style.overflowY = clicked ? "hidden" : "unset"
    return (
        <Layout>
            <Hero/>
            <FeaturedList/>
        <AnimateSharedLayout >
        <Video/>
            <AnimatePresence>
                {clicked && <VideoExp/>}
            </AnimatePresence>
        </AnimateSharedLayout>
        <HomeLocations/>
        <WeArePresello/>
        <HowCanWeHelp/>
        <WhatClientsAreSaying/>
        </Layout>
    )
}

export default Home
