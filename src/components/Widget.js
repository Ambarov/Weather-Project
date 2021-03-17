export const Widget = (props) => {
const{day, temp, windDirection , windSpeed, type} = props.n;
 return(
<article className="widget">
  <div className="widgetIcon">
    <div className="widgetSpin">
      <img className="widgetImage" src={'assets/images/'+ type + '.jpg'} />
    </div>
  </div>

  <div className="day">{day} - {type}</div>
  <span className="tempWidget">{temp}°</span>
  <div className="direction">
        <div className="directionName">Wind direction:</div>
        <img  className="directionImage"src={'assets/images/'+ windDirection + '.png'} />
        <div className="directionName">Wind speed:</div>
        <div className="speed">{windSpeed}m/s</div>
   </div>
</article>
 );
}