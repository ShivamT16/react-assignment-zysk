import { FeatureSection } from "./components/FeatureSection";
import { HeaderSection } from "./components/HeaderSection";
import { Navbar } from "./components/Navbar";
import { SocialProof } from "./components/SocialProof";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection />
      <SocialProof />
      <FeatureSection />
    </div>
  );
}

export default App;