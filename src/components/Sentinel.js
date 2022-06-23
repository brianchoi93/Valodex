import { useEffect, useState } from 'react';
import "./Agents.css"


function Sentinel(props) {
  const [agents, setAgents] = useState([]);

  useEffect (()=>{
    fetch('https://valorant-api.com/v1/agents')
      .then ((res) => res.json())
      .then ((json)=>{
        setAgents(json.data);
      })
      .catch((err) => {
        console.log("Something went wrong")
      })
  }, []);

  return (
    <section className="agent-container">
      {
        agents.map((agent) => {
          if(agent.isPlayableCharacter === true && agent.role.displayName === "Sentinel")
          {
            return(
              <div>
                <ul className="agentlist">
                  <li><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>
                  {
                    agent.abilities.map((ability) => {
                      return(
                        <>
                          <li><img className="abi-icon" src={ability.displayIcon} alt="" /></li>
                          <li>{ability.displayName}</li>
                          <li>{ability.description}</li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
            )
          }
        })
      }
    </section>

  );
}

export default Sentinel;