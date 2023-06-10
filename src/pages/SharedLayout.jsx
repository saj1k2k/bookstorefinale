import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import s from '../assets/css/SharedLayout.module.css'
import Sidebar from '../components/Sidebar/Sidebar';



const SharedLayout = () => {
  return (
    <main className={s.wrapper}>
        
        <Navbar />
        <Sidebar/>
            <div className={s.content}>
                <Outlet  />
            </div>

        <Footer />
    </main>
  )
}

export default SharedLayout