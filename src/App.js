import { FAQsPages } from "./components/FAQsPages";
import { FeatureSection } from "./components/FeatureSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeaderSection } from "./components/HeaderSection";
import { Navbar } from "./components/Navbar";
import { SocialProof } from "./components/SocialProof";
import { Testomonial } from "./components/TestomonialSection";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection />
      <SocialProof />
      <FeatureSection />
      <Testomonial />
      <FeaturesSection />
      <FAQsPages />
    </div>
  );
}

export default App;