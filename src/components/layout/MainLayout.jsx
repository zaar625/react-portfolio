import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './main-layout.scss'
import Portfolio from '../../pages/Portfolio'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboutme from '../../pages/Aboutme'
import Navbar from '../navbar/Navbar'


const MainLayout = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <div className='layout__content'>
                <Navbar/>
                <div className='layout__content-main'>
                    <Routes>
                        <Route path="/" element={<Aboutme />}></Route>
                        <Route element={<Portfolio />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        
    )
}

export default MainLayout
