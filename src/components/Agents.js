import { useState, useEffect } from "react";
import "./Agents.css"

function Agents(props) {

  const [agents, setAgents] = useState([]);
  
  useEffect(()=> {
    fetch('https://valorant-api.com/v1/agents')
      .then ((res) => res.json())
      .then ((json)=>{
        setAgents(json.data);
        console.log(json);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
}, []);

  return (
    <section className="container">
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true){          
            
            return(
            <div>
              <ul>
                <h2>{agent.role.displayName}</h2>
              </ul>
              <ul id="agentlist">
              <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
              <li>{agent.displayName}</li>
              <li>{agent.description}</li>
            </ul>
            </div>


          )}

        })
      }
    </section>
  );
}

export default Agents;