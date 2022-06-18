import './Nav.css'

function Nav(props) {
  return (
    <ul id="navbar">
      <li className="navlist">Home</li>
      <li className="navlist">Agents</li>
      <li className="navlist">Weapons</li>
      <li className="navlist">Maps</li>  
    </ul>
  );
}

export default Nav;