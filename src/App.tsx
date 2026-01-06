import AISectionComponent from "./components/layout/AISection"
import CommentsSectionComponent from "./components/layout/Comments"
import CTASectionComponent from "./components/layout/CTASection"
import FooterComponent from "./components/layout/Footer"
import HeroComponent from "./components/layout/Hero"
import MetricsSectionComponent from "./components/layout/Metrics"
import NavbarComponent from "./components/layout/Navbar"
import ScoreSectionComponent from "./components/layout/ScoreSection"
import ToolkitCardsComponent from "./components/layout/ToolkitCards"
import TrustedComponent from "./components/layout/Trusted"


function App() {

  return (
    <main className="text-white">
      <NavbarComponent/>
      <HeroComponent/>
      <TrustedComponent/>
      <ToolkitCardsComponent/>
      <AISectionComponent/>
      <MetricsSectionComponent/>
      <CommentsSectionComponent/> 
      <ScoreSectionComponent/>
      <CTASectionComponent/>
      <FooterComponent/>
    </main>
  )
}

export default App
