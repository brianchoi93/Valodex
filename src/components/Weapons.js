import { useState, useEffect } from "react";
import './Weapons.css'

function Weapons(props) {
  
  const [weapons, setWeapons] = useState([]);
  
  useEffect(()=> {
    fetch('https://valorant-api.com/v1/weapons')
      .then ((res) => res.json())
      .then ((json)=>{
        setWeapons(json.data);
        console.log(json);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
}, []);

  return (
    <section className="container">
      {
        weapons.map((weapon) => {
            return(
            <ul id="weaponlist">
              <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
              <li>{weapon.displayName}</li>
              <li>{weapon.description}</li>
            </ul>

          )

        })
      }
    </section>
  );
}

export default Weapons;