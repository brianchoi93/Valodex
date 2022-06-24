import { useState, useEffect } from "react";
import './Maps.css';

function Maps(props) {
  
  const [maps, setMaps] = useState([]);

  useEffect(()=>{
    fetch('https://valorant-api.com/v1/maps')
      .then ((res) => res.json())
      .then((json) => {
        setMaps(json.data);
        console.log(json);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
  }, []);

  return (
    <section className="map-container">
      {
        maps.map((map) => {
          return (
            <ul id="maplist" key={map.uuid}>
              <li><img className="mapimg" src={map.splash} alt={map.displayName} /></li>
              <li className="map-name">{map.displayName}</li>
            </ul>
          )
        })
      }
    </section>
  );
}

export default Maps;