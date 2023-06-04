import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import s from '../assets/css/SharedLayout.module.css'


const SharedLayout = () => {
  return (
    <main className={s.wrapper}>
        <Navbar />
            <div className={s.content}>
                <Outlet  />
            </div>

        <Footer />
    </main>
  )
}

export default SharedLayout