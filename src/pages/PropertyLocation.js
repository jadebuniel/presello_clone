import React, {useContext, useState, useEffect} from 'react'
import Layout from '../components/Layout'
import {Container} from '../components/GlobalStyled'
import styled from 'styled-components'
import {Context} from '../context/Context'
import FilteredList from '../components/FilteredList'


const StyledPropertyLocation = styled(Container)`
    padding: 0 1rem;
    .header{
        padding-top: 12rem;
        text-align: center;
        font-weight: 600;
        font-size: 1.8rem;
        text-transform: uppercase;
    }
`



const PropertyLocation = ({match, location}) => {

    const [data, , , , ,] = useContext(Context)
    const [houses, setHouses] = useState(null)
    const [state, setState] = useState(null)
    // if (data){
    //     console.log(location.state, data)
    // }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        setState(Array.isArray(location.state) ? location.state[0] : location.state)
    }, [data])

    useEffect(() => {
        setHouses(data && data.filter(da => state && state._id === da.location._ref))
    }, [state, data])

    document.title = `Properties for sale in ${state && state.location} | Presello`

    return (
        <Layout>
            <StyledPropertyLocation>
                <h3 className="header">properties for sale in {state && state.location}</h3>
                <FilteredList match={match} data={houses}/>
            </StyledPropertyLocation>
            
        </Layout>
    )
}

export default PropertyLocation
