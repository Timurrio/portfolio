import './App.scss';
import { FooterSection } from './components/FooterSection/FooterSection';
import IntroSection from './components/IntroSection/IntroSection';
import { SkillsSection } from './components/SkillsSection/SkillsSection';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <SkillsSection />
      <FooterSection />
    </div>
  );
}

export default App;
