import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const LayoutClient = () => {
    return (
        <div className='w-full mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutClient