import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="page">
      <Header />
      <Profile />
      <Skills/>
      <Work/>
      <Education/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
