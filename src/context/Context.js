import React, { useState, createContext, useEffect } from "react"
import sanityClient from "../client"

export const Context = createContext()

export const ContextProvider = (props) => {
    const [houses, setHouses] = useState(null)

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
                location{
                _ref
              }
              }`)
              setHouses(data)
        }
        fetchData()
    },[])


    return(

        <Context.Provider value={[houses, ]}>
            {props.children}
        </Context.Provider>
    )
}