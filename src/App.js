import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import bluepurplespace from './assets/bluepurplespace.jpg'
import './App.css';

function App() {
  return (
    <div style={{backgroundImage: `url(${bluepurplespace})`}}>
      <Header />

      {/* <Footer /> */}
      Hello world
    </div>
  );
}

export default App;
