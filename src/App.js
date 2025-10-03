import './App.css';
import connyLogo from './assets/conny.png';
import Footer from './Footer';
import { PopupButton } from "react-calendly";
import LatestVideo from "./LatestVideo";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-transparent px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={connyLogo} alt="Conny Logo" className="logo-img me-2" />
          </a>

          <div className="d-flex nav-buttons">
            <a href="https://www.connectyed.com/login" className="btn btn-outline-babypink me-2">Home</a>
            <a href="https://www.connectyed.com/register" className="btn btn-outline-babypink">Login</a>
          </div>
        </div>
      </nav>
      <div 
        className="main-content container text-center" 
        style={{ marginBottom: "5px", padding: "20px", borderRadius: "10px" }}
      >
        <h1>
          Connectyed's Video of the Week
        </h1>
      </div>
      <div className="latest-video-wrapper">
        <LatestVideo />
      </div>


      <div className="schedule-button-container">
        <PopupButton
          url="https://calendly.com/matchon-rodwell/30min"
          rootElement={document.getElementById("root")}
          text="Have a schedule with George and Mornysha"
          className="btn-babypink"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
