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
            <div className='main__layout'>
                <Sidebar />
                <div className='main__layout__content'>
                    <Navbar/>
                    <div className='layout__content__main col-12'>
                        <Routes>
                            <Route path="/" element={<Aboutme />}></Route>
                            <Route element={<Portfolio />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
        
    )
}

export default MainLayout
