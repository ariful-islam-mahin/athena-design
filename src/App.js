import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import What from "./components/What/What";
import StayProject from "./components/StayProject/StayProject";

function App() {
  return (
    <div className="main">
      <Team />
      <StayProject />
      <What />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
