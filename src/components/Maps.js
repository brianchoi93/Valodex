
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/Maps.css'

function Maps(props) {

  const { id } = useParams();

  const [map, setMap] = useState('');
  useEffect (() => {
    const url = `https://valorant-api.com/v1/maps/${id}`

    fetch(url)
    .then ((res) => res.json())
    .then ((json) => {
      setMap(json.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [id]);

  return (
    <div className="map-container">
      <ul id="maplist" key={map.uuid}>
        <li className="mapname">{map.displayName}</li>
        <li className="mapimage"><img className="mapimg" src={map.splash} alt={map.displayName} /></li>
        <li className="mapicon"><img src={map.displayIcon} alt="" /></li>
      </ul>
    </div>

  );
}

export default Maps;
