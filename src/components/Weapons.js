import { useState, useEffect } from "react";
import './Weapons.css'

function Weapons(props) {
  
  const [weapons, setWeapons] = useState([]);

  useEffect(()=> {
    fetch('https://valorant-api.com/v1/weapons')
      .then ((res) => res.json())
      .then ((json)=>{
        setWeapons(json.data);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
}, []);

  return (
    <section className="weapon-container">
      {
        weapons.map((weapon) => {
            return(
              <ul id="weaponlist" key={weapon.uuid}>
                <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                <li className="weap-name">{weapon.displayName}</li>
              </ul>
            )
        })
      }
    </section>
  );
}

export default Weapons;