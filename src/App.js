import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import What from "./components/Services/Services";
import StayProject from "./components/StayProject/StayProject";
import Achievements from "./components/Achievements/Achievements";

function App() {
  return (
    <div className="main">
      <What />
      <StayProject />
      <Achievements/>
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
