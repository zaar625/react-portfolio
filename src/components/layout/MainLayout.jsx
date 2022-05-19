import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

import Sidebar from '../sidebar/Sidebar'
import './main-layout.scss'
import Portfolio from '../../pages/Portfolio'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboutme from '../../pages/Aboutme'
import Navbar from '../navbar/Navbar'


const MainLayout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)
    console.log(themeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')
        console.log(themeClass,colorClass)
        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))

    }, [dispatch])


    return (
        <BrowserRouter>
            <div className={`main__layout ${themeReducer.mode} ${themeReducer.color}`}>
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
