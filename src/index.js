import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';

const weatherData = {
tempUnit: 'C',
windSpeedUnit: 'm/s',
days:[
{ day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny' },
{ day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14 , type:'rainy' },
{ day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20 , type:'cloudy' },
{ day: 'Thu', temp: 20, windDirection: 'south-west', windSpeed: 12 , type:'rainy' },
{ day: 'Fri', temp: 19, windDirection: 'north-west', windSpeed: 18 , type:'showers' },
{ day: 'Sat', temp: 22, windDirection: 'north-east', windSpeed: 22 , type:'cloudy' },
{ day: 'Sun', temp: 17, windDirection: 'south-east', windSpeed: 12 , type:'sunny'},
]
}

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
const Day = (props) => {
 const{day, temp, windDirection , windSpeed, type} = props.day;

 return(
<article className="box weather" onClick={props.onClick}>
  <div className="icon">
    <div className="spin">
      <img className="weatherImage" src={'assets/images/'+ type + '.jpg'} />
    </div>
  </div>

  <div className="day">{day}</div>
  <span className="temp">{temp}°</span>
</article>

 );
}
const Widget = (props) => {
const{day, temp, windDirection , windSpeed, type} = props.n;
 return(
<article className="widget">
  <div className="widgetIcon">
    <div className="widgetSpin">
      <img className="widgetImage" src={'assets/images/cloudy.jpg'} />
    </div>
  </div>

  <div className="day">{temp}</div>
  <span className="temp">dasds</span>
</article>
 );
}
ReactDom.render(<DaysList/>,document.getElementById('root'));
