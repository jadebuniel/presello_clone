import React, {useContext, useState, useEffect, useRef} from 'react'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Card from '../components/Card'
import {Context} from "../context/Context"
import {Container} from "../components/GlobalStyled"
import styled from 'styled-components'
import {AnimateSharedLayout, AnimatePresence} from "framer-motion"
import VideoExp from './VideoExp'

// STYLES

const Header = styled.h1`
    padding-top: 10rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 2px;
`
const List = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(365px, 1fr));
    gap: 2rem;
    padding: 0 1rem; 
    margin-top: 2rem;

`
const Filter = styled(Container)`
    display: flex;
    padding: 0 1rem;
    select{
        border: 1px solid rgba(150,150,150, 0.5);
        outline: none;
        padding: 0.5rem;
        font-size: 1rem;
        margin-top: 4rem;
        option{
            padding: 0.5rem;
        }
    }
`

const Properties = () => {

    const [ , , clicked, ] = useContext(Context)
    document.querySelector('body').style.overflowY = clicked ? "hidden" : "unset"

    const [data, , , , , ] = useContext(Context)
    useEffect(() => {
        console.log(data)
    },[])

    return (
        <Layout>
            <Header>property search</Header>
            <Filter>
            <select name="sort" id="sort">
                <option value="price">Sort by Price</option>
                <option value="date">Sort by Date Added</option>
                <option value="lot">Sort by Lot Area</option>
                <option value="floor">Sort by Floor Area</option>
            </select>
            <select name="order" id="order">
                <option value="high">Highest First</option>
                <option value="low">Lowest First</option>
            </select>

            </Filter>
            <List>
            {data && data.map((house, index) => (
                <Card house={house} key={index} />
            ))}
            </List>
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
