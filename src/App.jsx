import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Project from "./components/Project"
import Contact from "./components/Contact"


export default function App() {
  return (
   <>
   <div className="[ fixed -z-10 min-h-screen w-full
   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Tech></Tech>
    <Project></Project>
    <Contact></Contact>
    </div>
   </>
  )
}