import React, { useState, createContext, useEffect } from "react"
import sanityClient from "../client"

export const Context = createContext()

export const ContextProvider = (props) => {
    const [houses, setHouses] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [location, setLocation] = useState(null)

    useEffect(()=> {
        const fetchData = async () => {
            const data = await  sanityClient
            .fetch(`*[_type=="houses"]{
                bathrooms,
                bedrooms,
                carparks,
                description,
                featured,
                floor,
                homefeatures,
                images,
                lot,
                neighborhoodfeatures,
                price,
                slug,
                title,
                thumb,
                location
              }`)
              setHouses(data)
        }
        const fetchLocation = async () => {
            const data = await sanityClient
            .fetch(`*[_type=="location"]`)
            setLocation(data)
        }
        fetchData()
        fetchLocation()
    },[])


    return(

        <Context.Provider value={[houses, setHouses, clicked, setClicked, location, setLocation]}>
            {props.children}
        </Context.Provider>
    )
}