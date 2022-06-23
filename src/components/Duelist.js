import { useState, useEffect } from "react";
import "./Agents.css"

function Duelist(props) {

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
                <ul className="agentlist">
                  <li className="agtimg"><img className="agentimg" src={agent.fullPortraitV2} alt={agent.displayName} /></li>
                  <li className="agentname"><h3>{agent.displayName}</h3></li>
                  <li className="agtdescription">{agent.description}</li>
                  {
                    agent.abilities.map((ability) => {
                      return(
                        <>
                          <li className="abi-img"><img className="abi-icon" src={ability.displayIcon} alt="" /></li>
                          <li className="abi-name">{ability.displayName}</li>
                          <li className="abi-desc">{ability.description}</li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
          )} 
        })
      }
    </section>
  );
}

export default Duelist;