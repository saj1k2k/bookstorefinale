
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import s from '../assets/css/BooksLine.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import OneBooks from './OneBooks';
const BooksLine = () => {
  return (
    <>
        <div className={s.cardWrapper}>
            <h3>НАЗВАНИЕ КАТЕГОРИИ</h3>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                >
                <Button>
                    <ArrowBackIcon/> 
                </Button>
                <Button>
                    <ArrowForwardIcon/>
                </Button>
            </ButtonGroup>
        </div>

        <div className="">
            <OneBooks/>
            <OneBooks/>
            <OneBooks/>
        </div>
    </>
    
  )
}

export default BooksLine