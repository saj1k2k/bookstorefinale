import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import s from '../assets/css/OneBook.module.css'
import { Link } from 'react-router-dom';



const OneBooks = ({price, image, title, isbn13}) => {




    return (
        <div className={s.bookWrapper}>
            <div className="card-top">
                <img src={image} alt={title} />
            </div>
            
            <div className="card-bottom">
                <div className="">
                        <span className='text-blue-300'>{price}</span>
                        <p>{title}</p>
                </div>
                <div className={s.buttonsWrapper}>
                    <Link to={`/product/${isbn13}`} className="btn btn-dark m-1">
                        <Button variant="contained">
                                Buy Now
                        </Button>
                    </Link>

                    <Button variant="outlined">CART</Button>

                </div>
            </div>
                
        </div>
    )
}

export default OneBooks