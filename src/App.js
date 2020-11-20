import './App.css';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="main">
      <Team/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
