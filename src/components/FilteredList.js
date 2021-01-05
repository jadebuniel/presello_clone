import React, {useState, useEffect} from 'react'
import {Container} from './GlobalStyled'
import styled from 'styled-components'
import Card from './Card'
import {Link} from 'react-router-dom'



// STYLES


const List = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
    gap: 2rem;
    padding: 0 1rem; 
    margin-top: 2rem;
    @media screen and (max-width: 420px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

`
const Filter = styled(Container)`
    display: flex;
    padding: 0 1rem;
    gap: 5px;
    @media screen and (max-width: 1207px){
        justify-content: center;
    }
    select{
        border: 1px solid rgba(150,150,150, 0.5);
        outline: none;
        padding: .75rem 1rem;
        font-size: 1rem;
        margin-top: 4rem;
        option{
            padding: 0.5rem;
        }
    }
`
const StyledPagination = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    margin-top: 4rem;
    .results{
        span{
            font-weight: 600;
        }
    }
    .pages{
        span{
            background-color: white;
            border: 1px solid #888;
            padding: 3px 8px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 5px;
            cursor: pointer;
            &:hover{
                border-color: #333;
                background-color: #f5f5f5;
            }
            }
            .active{
                background-color: #E3C77C;
                border-color: #E3C77C;

                &:hover{
                    background-color: #E3C77C;
                    border-color: #E3C77C;
                }
    }
        }
`

const FilteredList = ({match, data}) => {

    const [sort, setSort] = useState('price')
    const [order, setOrder] = useState('high')
    const [houses, setHouses] = useState(null)
    const [pagination, setPagination] = useState(null)

    const itemsToDisplay = 9

    const pages0 = data && Array.from(Array(Math.ceil(data.length / itemsToDisplay)).keys())
    const pages = pages0 && pages0.map(page => page + 1)

    useEffect(() => {
        if (data) {
            setHouses(data.sort((a,b) => {
                // const sorted = -1
                
                // return sorted * a.price.split(' - ')[0].replace(/,/g, '').localeCompare(b.price.split(' - ')[0].replace(/,/g, ''))
                return parseInt(b.price.split(' - ')[0].replace(/,/g, '')) - parseInt(a.price.split(' - ')[0].replace(/,/g, ''))
            }))
            if (houses){
                const content =  houses
                setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
            }

        }

    }, [data, houses])
    useEffect(() => {
        if (houses){
            const content =  houses
            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
        }
    }, [match.params.page, houses])

    const handleOrder = (e) => {
        setOrder(e.target.value)
            switch(sort){
                case 'price':
                    if (e.target.value === 'high'){
                        setHouses(data.sort((a,b) => {

                            return parseInt(b.price.split(' - ')[0].replace(/,/g, '')) - parseInt(a.price.split(' - ')[0].replace(/,/g, ''))
                        }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    } else {
                        setHouses(data.sort((a,b) => {
                            return parseInt(a.price.split(' - ')[0].replace(/,/g, '')) - parseInt(b.price.split(' - ')[0].replace(/,/g, ''))
                        })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    }
                    break;

                case 'date':
                    if (e.target.value === 'high'){
                        setHouses(data.sort((a,b) => {
                            
                            const timeA = new Date (a._createdAt).getTime()
                            const timeB = new Date (b._createdAt).getTime()
                            return timeB - timeA
                        }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    } else {
                        setHouses(data.sort((a,b) => {
                            
                            const timeA = new Date (a._createdAt).getTime()
                            const timeB = new Date (b._createdAt).getTime()
                            return timeA - timeB
                        })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    }
                    break;
                    

                case 'lot':
                    if (e.target.value === 'high'){
                        setHouses(data.sort((a,b) => {
                            return parseInt(b.lot.split(' - ')[0].replace(/,/g, '')) - parseInt(a.lot.split(' - ')[0].replace(/,/g, ''))
                        }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    } else {
                        setHouses(data.sort((a,b) => {
                            return parseInt(a.lot.split(' - ')[0].replace(/,/g, '')) - parseInt(b.lot.split(' - ')[0].replace(/,/g, ''))
                        })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    }
                    break;

                case 'floor':
                    if (e.target.value === 'high'){
                        setHouses(data.sort((a,b) => {
                            return parseInt(b.floor.split(' - ')[0].replace(/,/g, '')) - parseInt(a.floor.split(' - ')[0].replace(/,/g, ''))
                        }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    } else {
                        setHouses(data.sort((a,b) => {
                            return parseInt(a.floor.split(' - ')[0].replace(/,/g, '')) - parseInt(b.floor.split(' - ')[0].replace(/,/g, ''))
                        })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((parseInt(match.params.page) * itemsToDisplay))))
                        }
                    }
                    break;
                    default:
                        return
            }
        }
    const handleSort = (e) => {
        setSort(e.target.value)

        switch(e.target.value){
            case 'price':
                if (order === 'high'){
                    setHouses(data.sort((a,b) => {
                        return parseInt(b.price.split(' - ')[0].replace(/,/g, '')) - parseInt(a.price.split(' - ')[0].replace(/,/g, ''))
                    }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                } else {
                    setHouses(data.sort((a,b) => {
                        return parseInt(a.price.split(' - ')[0].replace(/,/g, '')) - parseInt(b.price.split(' - ')[0].replace(/,/g, ''))
                    })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                }
                break;

            case 'date':
                if (order === 'high'){
                    setHouses(data.sort((a,b) => {
                        
                        const timeA = new Date (a._createdAt).getTime()
                        const timeB = new Date (b._createdAt).getTime()
                        return timeB - timeA
                    }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                } else {
                    setHouses(data.sort((a,b) => {
                        
                        const timeA = new Date (a._createdAt).getTime()
                        const timeB = new Date (b._createdAt).getTime()
                        return timeA - timeB
                    })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                }
                break;
                

            case 'lot':
                if (order === 'high'){
                    setHouses(data.sort((a,b) => {
                        return parseInt(b.lot.split(' - ')[0].replace(/,/g, '')) - parseInt(a.lot.split(' - ')[0].replace(/,/g, ''))
                    }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                } else {
                    setHouses(data.sort((a,b) => {
                        return parseInt(a.lot.split(' - ')[0].replace(/,/g, '')) - parseInt(b.lot.split(' - ')[0].replace(/,/g, ''))
                    })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                }
                break;

            case 'floor':
                if (order === 'high'){
                    setHouses(data.sort((a,b) => {
                        return parseInt(b.floor.split(' - ')[0].replace(/,/g, '')) - parseInt(a.floor.split(' - ')[0].replace(/,/g, ''))
                    }))
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                } else {
                    setHouses(data.sort((a,b) => {
                        return parseInt(a.floor.split(' - ')[0].replace(/,/g, '')) - parseInt(b.floor.split(' - ')[0].replace(/,/g, ''))
                    })) 
                        if (houses){
                            const content =  houses
                            setPagination(content.slice(((parseInt(match.params.page) - 1) * itemsToDisplay), ((match.params.page - 1) *(itemsToDisplay - 1)) + itemsToDisplay))
                        }
                }
                break;
                default:
                    return

        }
    }


    return (
        <>
           <Filter>
            <select name="sort" id="sort" onChange={(e) => handleSort(e)}>
                <option value="price">Sort by Price</option>
                <option value="date">Sort by Date Added</option>
                <option value="lot">Sort by Lot Area</option>
                <option value="floor">Sort by Floor Area</option>
            </select>
            <select name="order" id="order" onChange={(e) => handleOrder(e)}>
                <option value="high">{sort === 'price' ? 'Highest First' : sort === 'date' ? 'Newest First' : sort === 'lot' ? 'Largest First' : sort === 'floor' ? 'Largest First' : 'Highest First'}</option>
                <option value="low">{sort === 'price' ? 'Lowest First' : sort === 'date' ? 'Oldest First' : sort === 'lot' ? 'Smallest First' : sort === 'floor' ? 'Smallest First' : 'Lowest First'}</option>
            </select>

            </Filter>
            <List>
            {pagination && pagination.map((house, index) => (
                <Card house={house} key={index} />
            ))}
            </List>

            <StyledPagination>
                <p className="results"><span>{data ? data.length : 'No'}</span> Properties found.</p>
                <div className="pages">
                    {pages && pages.map((page, index) => (
                        <Link to={`/properties/${page}`} key={index}><span className={match.params.page == page ? "active" : null}>{page}</span></Link>
                    ))}
                </div>
            </StyledPagination>






        </>
    )
}

export default FilteredList
