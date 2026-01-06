import AISectionComponent from "./components/layout/AISection"
import CommentsSectionComponent from "./components/layout/Comments"
import HeroComponent from "./components/layout/Hero"
import MetricsSectionComponent from "./components/layout/Metrics"
import NavbarComponent from "./components/layout/Navbar"
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
    </main>
  )
}

export default App
