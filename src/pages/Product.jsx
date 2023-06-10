import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import s from '../assets/css/Product.module.css'


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
        <div className={s.pageContainer}>
            
            {/* ИМЭГЭ */}
            <div className={s.imageContainer}>
                <img src={info.image} alt="" />
            </div>
            {/* ИНФА ПО КНИГЕ */}
            <div className={s.fullInfoContainer}>
                <ul>
                    <li>{info.title}</li>
                    <li>{info.authors}</li>
                    <li>{info.publisher}</li>
                    <li>{info.pages}</li>
                </ul>
            </div>
            {/* КОНТЕЙНЕР С ЦЕНОЙ И КНОПКАМИ */}
            <div className={s.productDetailsContainer}>
                <h4>{info.price}</h4>
                <Button variant="contained">Contained</Button>
            </div>
        </div>
    )
}

export default Product