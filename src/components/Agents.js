import { useState, useEffect } from "react";


function Agents(props) {
  const [agents, setAgents] = useState('');
  useEffect(()=> {
    fetch('https://valorant-api.com/v1/agents')
      .then ((res)=>{
        return res.json();
      })
      .then ((json)=>{
        setAgents(json);
        console.log(setAgents);
      })
      .catch((err)=>{
        console.log("something went wrong")
      })
}, []);

  return (
    <div>
      
    </div>
  );
}

export default Agents;