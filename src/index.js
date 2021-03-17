import React from 'react';
import ReactDom from 'react-dom';

const weatherData = {
tempUnit: 'C',
windSpeedUnit: 'm/s',
days:[
{ day: 'Mon', temp: 22, windDirection: '‘north-east’', windSpeed: 10 , type:'‘sunny’' },
{ day: 'Tue', temp: 14, windDirection: '‘north-west’', windSpeed: 14 , type:'‘rainy’' },
{ day: 'Wed', temp: 17, windDirection: '‘south-east’', windSpeed: 20 , type:'‘cloudy’' },
{ day: 'Thu', temp: 20, windDirection: '‘south-west’', windSpeed: 12 , type:'‘partly cloudy’' },
{ day: 'Fri', temp: 19, windDirection: '‘north-west’', windSpeed: 18 , type:'‘showers’' },
{ day: 'Sat', temp: 22, windDirection: '‘north-east’', windSpeed: 22 , type:'‘cloudy’' },
{ day: 'Sun', temp: 17, windDirection: '‘south-east’', windSpeed: 12 , type:'‘sunny’ '},
]
}



function DaysList(){
 return (
   <section>
   {console.log('Hello')}
   </section>
 );
}

const Day = (props) => {

}

ReactDom.render(<DaysList/>,document.getElementById('root'));
