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
    <section className="container">
      <h2>Heavy Machine Gun</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::Heavy")
            return(
              <ul id="weaponlist" key={weapon.uuid}>
                <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                <li>{weapon.displayName}</li>
              </ul>
            )
        })
      }

      <h2>Assault Rifle</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::Rifle")
            return(
                <ul id="weaponlist" key={weapon.uuid}>
                  <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                  <li>{weapon.displayName}</li>
                </ul>
            )
        })
      }

      <h2>Sniper Rifles</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::Sniper")
            return(
                <ul id="weaponlist" key={weapon.uuid}>
                  <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                  <li>{weapon.displayName}</li>
                </ul>
            )
        })
      }

      <h2>SMG</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::SMG")
            return(
                <ul id="weaponlist" key={weapon.uuid}>
                  <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                  <li>{weapon.displayName}</li>
                </ul>
            )
        })
      }

      <h2>Shotgun</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::Shotgun")
            return(
                <ul id="weaponlist" key={weapon.uuid}>
                  <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                  <li>{weapon.displayName}</li>
                </ul>
            )
        })
      }

      <h2>Sidearm</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::Sidearm")
            return(
                <ul id="weaponlist" key={weapon.uuid}>
                  <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                  <li>{weapon.displayName}</li>
                </ul>
            )
        })
      }

      <h2>Melee</h2>
      {
        weapons.map((weapon) => {
            if(weapon.category === "EEquippableCategory::Melee")
            return(
                <ul id="weaponlist" key={weapon.uuid}>
                  <li><img className="weaponimg" src={weapon.displayIcon} alt={weapon.displayName} /></li>
                  <li>{weapon.displayName}</li>
                </ul>
            )
        })
      }
    </section>
  );
}

export default Weapons;