import AISectionComponent from "./components/layout/AISection"
import HeroComponent from "./components/layout/Hero"
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
    </main>
  )
}

export default App
