import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <h2>Welcome to Valodex!</h2>
      <p>
        This application will assist you in furthering your knowlegde about the popular first person shooter game called Valorant.
      </p>
      <footer className="footer">
        <h6 className="message">
        Game content and materials are trademarks and copyrights of their respective companies, publisher and its licensors. Valodex is not affiliated with the game companies, publisher and its licensors. 
        </h6>
      </footer>
    </div>
  );
}

export default Main;