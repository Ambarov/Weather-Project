export const Day = (props) => {
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