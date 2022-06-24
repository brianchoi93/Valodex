import './css/Main.css'

function Main(props) {
  return (
    <div className="main-container">
      <h2 id="header-msg">Welcome to Valodex!</h2>
      <p id="welcome-msg">
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