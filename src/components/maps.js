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
    <section className="container">
      {
        maps.map((map) => {
          return (
            <ul id="maplist">
              <li><img className="mapimg" src={map.splash} alt={map.displayName} /></li>
              <li>{map.displayName}</li>
            </ul>
          )
        })
      }
    </section>
  );
}

export default Maps;