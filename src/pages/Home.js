import React from 'react'
import FeaturedList from '../components/FeaturedList'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout>
            <Hero/>
            <FeaturedList/>
        </Layout>
    )
}

export default Home
