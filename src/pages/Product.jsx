import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'


const Product = () => {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState([])
    const {isbn13} =  useParams()
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
        .then(response => response.json())
        .then(json => setInfo(json))
        .then(json => setLoading(false))
    }, [])
    if (loading){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div>
                <img src={info.image} alt="" />
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Product