import React from 'react'
import {Chart as ChartJS, CategoryScale,LinearScale,BarElement,
Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {skillImages01, skillImages02} from '../../assets'

import './skill.scss';


// chart.js 설정
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
       display: false
    },
    title: {
      display: true,
      text: '',
    },
    // grid:{
    //     display:false
    // }
  },
};

const labels = ['html', 'css', 'javascript', 'react', 'vue', 'typescript'];

export const data = {
  labels,
  datasets: [{
    label:'',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
    backgroundColor: [
      'rgba(250, 199, 15, 0.3)',
    ],
    borderColor: [
      'rgb(250, 199, 15)',
    ],
    borderWidth: 1
  }],
};




const Skill = () => {
  return (
    <div className='skill'>
      <div className='skill__chart cardstyle'>
        <div className='title'>
          Skill Chart
        </div>
        <Bar options={options} data={data} />
      </div>
      <div className='skill__imgbox cardstyle'>
        {
          skillImages01.map((item,index)=>(
            <div key={index}>
              <img src={item} alt='skill img'/>
            </div>
          )
          )
        }
      </div>
      <div className='skill__imgbox cardstyle'>
        {
          skillImages02.map((item,index)=>(
            <div key={index}>
              <img src={item} alt='skill img'/>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default Skill