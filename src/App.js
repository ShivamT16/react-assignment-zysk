import { BlogSection } from "./components/BlogSection";
import { FAQsPages } from "./components/FAQsPages";
import { FeatureSection } from "./components/FeatureSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeaderSection } from "./components/HeaderSection";
import { Navbar } from "./components/Navbar";
import { SocialProof } from "./components/SocialProof";
import { Testomonial } from "./components/TestomonialSection";
import { TrialPage } from "./components/TrialPage";
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
      <BlogSection/>
      <TrialPage />
      <Footer />
    </div>
  );
}

export default App;