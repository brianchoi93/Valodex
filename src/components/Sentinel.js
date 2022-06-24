import { useEffect, useState } from 'react';
import "./css/Agents.css"

function Sentinel(props) {

  const [agents, setAgents] = useState([]);

  useEffect(()=>{
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
              <div key={agent.uuid}>
                <ul className="agentlist">
                  <li className="agtimg"><img className="agentimg" src={agent.fullPortraitV2} alt=  {agent.displayName} /></li>
                  <li className="agentname"><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>
                  {
                    agent.abilities.map((ability, id) => {
                      if(ability.displayIcon === null) {
                      return;
                      } else if (ability.slot === "Passive") {
                      return;
                      } else {
                      return(
                        <div className="abi-container" key={id}>
                          <li className="abi-img"><img className="abi-icon" src={ability.displayIcon} alt="" /></li>
                          <li className="abi-name">{ability.displayName}</li>
                          <li className="abi-desc">{ability.description}</li>
                        </div>
                      )}
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