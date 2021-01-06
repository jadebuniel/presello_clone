import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout'
import Video from '../components/Video'
import {Context} from "../context/Context"
import {AnimateSharedLayout, AnimatePresence} from "framer-motion"
import VideoExp from './VideoExp'
import styled from 'styled-components'
import FilteredList from '../components/FilteredList'

const Header = styled.h1`
    padding-top: 12rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 2px;
`

const Properties = ({match}) => {
    const [ , , clicked, ] = useContext(Context)
    document.querySelector('body').style.overflowY = clicked ? "hidden" : "unset"

    const [data, , , , , ] = useContext(Context)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [match.params.page])


    return (
        <Layout>
            <Header>property search</Header>
            <FilteredList match={match} data={data}/>
        <AnimateSharedLayout >
            <Video/>
            <AnimatePresence>
                {clicked && <VideoExp/>}
            </AnimatePresence>
        </AnimateSharedLayout>
        </Layout>
    )
}

export default Properties
