import { useState, useEffect } from "react";
import "./Agents.css"

function Agents(props) {

  const [agents, setAgents] = useState([]);
  
  useEffect(()=> {
    fetch('https://valorant-api.com/v1/agents')
      .then ((res) => res.json())
      .then ((json)=>{
        setAgents(json.data);
        // console.log(json);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
}, []);

  return (
    <section className="agent-container">
      {
        agents.map((agent) => {
          
          // Class: Duelist
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Duelist"){          
            return(
              <div>
                <ul className="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>
                  <li><img className="abi-icon" src={agent.abilities[0].displayIcon} alt="" /></li>
                  <li>{agent.abilities[0].displayName}</li>
                  <li>{agent.abilities[0].description}</li>
                  <li><img className="abi-icon" src={agent.abilities[1].displayIcon} alt="" /></li>
                  <li>{agent.abilities[1].displayName}</li>
                  <li>{agent.abilities[1].description}</li>
                  <li><img className="abi-icon" src={agent.abilities[2].displayIcon} alt="" /></li>
                  <li>{agent.abilities[2].displayName}</li>
                  <li>{agent.abilities[2].description}</li>
                  <li><img className="abi-icon" src={agent.abilities[3].displayIcon} alt="" /></li>
                  <li>{agent.abilities[3].displayName}</li>
                  <li>{agent.abilities[3].description}</li>              
                </ul>
              </div>
          )} 
        })
      }

      {/* Class: Initiator
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Initiator") {
            return(
              <div>
                <h2>Initiator</h2>
                <ul className="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>              
              </ul>
              </div>
            )
          }
        })
      } */}

      {/* Class: Sentinel
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Sentinel") {
            return (
              <div>
                <h2>Sentinel</h2>
                <ul className="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>              
                </ul>
              </div>
            )
          }
        })
      } */}

      {/* Class: Controller
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Controller") {
            return (
              <div>
                <h2>Controller</h2>
                <ul className="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>              
                </ul>
              </div>
            )
          }
        })
      } */}
    </section>
  );
}

export default Agents;