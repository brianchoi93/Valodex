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
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Duelist"){          
            
            return(
            <div>
              <h2>Duelist</h2>
              <ul id="agentlist">
                <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                <li><h3>{agent.displayName}</h3></li>
                <li className="agtdescription">{agent.description}</li>              
              </ul>
            </div>
          )} 
        })
      }
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Initiator") {
            return(
              <div>
                <h2>Initiator</h2>
                <ul id="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>              
              </ul>
              </div>
            )
          }
        })
      }
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Sentinel") {
            return (
              <div>
                <h2>Sentinel</h2>
                <ul id="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>              
                </ul>
              </div>
            )
          }
        })
      }
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Controller") {
            return (
              <div>
                <h2>Controller</h2>
                <ul id="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>              
                </ul>
              </div>
            )
          }
        })
      }
    </section>
  );
}

export default Agents;