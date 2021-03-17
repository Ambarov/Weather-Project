import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const weatherData = {
tempUnit: 'C',
windSpeedUnit: 'm/s',
days:[
{ day: 'Mon', temp: 22, windDirection: '‘north-east’', windSpeed: 10 , type:'sunny' },
{ day: 'Tue', temp: 14, windDirection: '‘north-west’', windSpeed: 14 , type:'rainy' },
{ day: 'Wed', temp: 17, windDirection: '‘south-east’', windSpeed: 20 , type:'cloudy' },
{ day: 'Thu', temp: 20, windDirection: '‘south-west’', windSpeed: 12 , type:'rainy' },
{ day: 'Fri', temp: 19, windDirection: '‘north-west’', windSpeed: 18 , type:'showers' },
{ day: 'Sat', temp: 22, windDirection: '‘north-east’', windSpeed: 22 , type:'cloudy' },
{ day: 'Sun', temp: 17, windDirection: '‘south-east’', windSpeed: 12 , type:'sunny'},
]
}



function DaysList(){
 return (
   <section>
   {weatherData.days.map((d,index)=>{
   const {day,temp,windDirection,windSpeed,type} = d;
   return (
    <Day key={index} day={d}></Day>
   );
   })}
   </section>
 );
}

const Day = (props) => {
 const{day, temp, windDirection , windSpeed, type} = props.day;
 return(
<article class="box weather">
  <div class="icon bubble ">
    <div class="spin">
      <img class="weatherImage" src={'assets/images/'+ type + '.jpg'} />
    </div>
  </div>

  <div class="day">{day}</div>
  <span class="temp">{temp}°</span>
</article>

 );
}

ReactDom.render(<DaysList/>,document.getElementById('root'));
