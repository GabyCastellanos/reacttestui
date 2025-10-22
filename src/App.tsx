import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Features from './components/Features';
import Demo from './components/Demo';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navigation />
      <Hero />
      <TechStack />
      <Features />
      <Demo />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
