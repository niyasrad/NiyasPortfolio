import './App.css';
import Navbar from './components/navbar/Navbar';
import Experiences from './containers/experiences/Experiences';
import Home from './containers/home/Home';
import Projects from './containers/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
