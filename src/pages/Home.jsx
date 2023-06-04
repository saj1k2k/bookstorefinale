import React from 'react'
import s from '../assets/css/Home.module.css'
import {BooksLine} from '../components/index.js'


const Home = () => {
  return (
    <>
    <div className={s.main}>
        <BooksLine/>
    </div>
    </>
  )
}

export default Home