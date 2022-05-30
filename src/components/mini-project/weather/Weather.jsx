import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './weather.scss'

const api = {
    key: "52adf1bb16f14bf661b1190e2e4d45db",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const locationData = [
    'Seoul',
    'Incheon',
    'Ulsan',
    'Gyeongju',
    'Busan',
    'Jeju'
];

const Weather = () => {

    const [weather , setWeather]= useState({});
    const [preweather, setPreWeather] = useState([]);
    
    //당일 날씨 받아오기
    const weatherFetch = async(location)=>{
        const {data} = await axios.get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`);
        setWeather(data);
        weatherPreFetch(location)
    }
    useEffect(()=>{
        weatherFetch(locationData[0]);
        // weatherPreFetch(locationData[0]);
    },[])

    //예보5일 날씨 받아오기
    const weatherPreFetch = async(location) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=52adf1bb16f14bf661b1190e2e4d45db`)
        const res = data.list.filter(it => new RegExp("06:00:00","i").test(it.dt_txt))
        let prediction = []
        res.forEach((item)=>{
            prediction.push(...item.weather)
        })
        setPreWeather(prediction)
    }
    //날짜 반환
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    // 당일 날씨에 따라 배경이미지 변경
    const background =(w) => {
        switch(w){
            case "Clear":
                const clear = require('../../../assets/images/weather/clear.jpg');
                return clear;
            case "Clouds":
                const clounds = require('../../../assets/images/weather/cloud.jpg');
                return clounds;
            case "Rain": 
                const rain = require('../../../assets/images/weather/rain.jpg');
                return rain;
            case "Snow":
                const snow = require('../../../assets/images/weather/snow.jpg');
                return snow;
            default:
                return 'Not data'
        }
        
    }
    console.log(weather)

    return (
        <>
        {   
            Object.keys(weather).length !== 0 ? (
                <div className='weather col-4 col-md-12 cardstyle'>
                    <div  className='weather__container' style={{backgroundImage:`url(${background(weather.weather[0].main)})`}}>
                        <h2>Weather</h2>
                        <div className='weather__container__areas'>
                            {
                                locationData.map((item, index) => (
                                    <div 
                                    key={index} 
                                    onClick={()=> {weatherFetch(item); weatherPreFetch(item);}}>{item}</div>
                                ))
                            }
                        </div>
                        <div className='weather__container__area'>{weather.name}. {weather.sys.country}</div>
                        <div className='weather__container__date'>{dateBuilder(new Date())}</div>
                        <div className='weather__container__state'>
                            <div className='weather__container__state__temp'>
                            {
                                Object.keys(weather).length === 0 ? '' : weather.main.temp
                            } °c
                            </div>
                            <div className='weather__container__state__cloud'>{weather.weather[0].main}</div>
                        </div>
                        <div className='weather__container__pre'>
                        {
                            Object.keys(preweather).length === 0 ? '' : (
                                preweather.map((item, index)=> (
                                    <div className='weather__container__pre__day'>
                                        <span>5/30</span>
                                        <span key={index}>{item.main}</span>
                                        <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt=''/>
                                    </div>
                                ))
                            )
                        }
                        </div>
                        <div className='weather__container__search'></div>
                    </div>
                </div>
            ) : ''
        }
        </>

    )
}

export default Weather