import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/SearchMap.css"

function SearchMap() {
  let navigate = useNavigate();

  const [maps, setMaps] = useState(null);

  useEffect(()=>{
    fetch('https://valorant-api.com/v1/maps')
      .then ((res) => res.json())
      .then((json) => {
        setMaps(json.data);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
  }, []);

  const initialData = {
    id: '',
  };

  const [data, setData] = useState(initialData);

  function handleChange(event) {
    setData({...data, id: event.target.value});
  }

  function handleSubmit(event){
    event.preventDefault();
    setData(initialData);
    navigate(`/maps/${data.id}`);
  }

  if(!maps) {
    return;
  }


  return (
    <>
      <p>Each map has a specific ID. Below is a list of ID for each map! Use one to search a specific map and obtain useful information!</p>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Map ID"
          type="text"
          onChange={handleChange}
          value={data.id}
        />
        <button type="submit">Search!</button>
      </form>

      {maps.map((map) => {
        return (
          <ul className="map-list">
            <li className="map-name">{map.displayName}</li>
            <li className="map-id">{map.uuid}</li>
          </ul>
        )
      })}
    </>
  );
}

export default SearchMap;