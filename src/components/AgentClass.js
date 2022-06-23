import "./AgentClass.css"
import { Link } from 'react-router-dom';

function AgentClass(props) {
  return (
    <div className="class-container">
      <div className="agtclass-div">
        <Link to="/agentclass/duelist"><h2 className="class-title">Duelist</h2></Link>
        <Link to="/agentclass/duelist"><img className="class-img" src="DuelistClassSymbol.png"/></Link>
        <p className="class-desc">Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first. This class type is the most offensive choice and often ranks highly as an Attacker. These agents will generally be at the forefront when clearing corners and attacking sites.</p>
      </div>

      <div className="agtclass-div">
        <Link to="/agentclass/initiator"><h2 className="class-title">Initiator</h2></Link>
        <Link to="/agentclass/initiator"><img className="class-img" src="InitiatorClassSymbol.png" alt="" /></Link>
        <p className="class-desc">Initiators challenge angles by setting up their team to enter contested ground and push defenders away. You can expect to see lots of stuns and information gathering abilities with this class.</p>
      </div>

      <div className="agtclass-div">
        <Link to="/agentclass/sentinel"><h2 className="class-title">Sentinel</h2></Link>
        <Link to="/agentclass/sentinel"><img className="class-img" src="SentinelClassSymbol.png" alt="" /></Link>
        <p className="class-desc">Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds. This class type tends to be the best defensive agents; these characters will either hang back or lay traps to watch your teams flank when attacking.</p>
      </div>
      
      <div className="agtclass-div">
        <Link to="/agentclass/controller"><h2 className="class-title">Controller</h2></Link>
        <Link to="/agentclass/controller"><img className="class-img" src="ControllerClassSymbol.png" alt="" /></Link>
        <p className="class-desc">Controllers are experts in slicing up dangerous territory to set their team up for success. This class provides lots of utility in the form of slowing down the enemy players via Walls, Smokes that block Vision, and even Slows that can be placed on the ground.</p>
      </div>
    </div>
  );
}

export default AgentClass;