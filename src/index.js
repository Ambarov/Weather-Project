import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';

//import components
import {weatherData} from './components/data'
import {Day} from './components/Day'
import {Widget} from './components/Widget'

function DaysList(){
const [nDay, setNDay] = useState({day: "Mon", temp: 22, windDirection: "north-east", windSpeed: 10, type: "sunny"});
const clickHandler = (day) =>{
 setNDay(day);
 console.log(nDay);
 };

 return (
   <section>
   {weatherData.days.map((d,index)=>{
   const {day,temp,windDirection,windSpeed,type} = d;

   return (
    <Day key={index} day={d} onClick={()=>clickHandler(d)}></Day>
   );

   })}

   <Widget n={nDay}></Widget>
   </section>
 );
}
ReactDom.render(<DaysList/>,document.getElementById('root'));
