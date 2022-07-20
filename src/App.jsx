import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"
import img from "./img/photo.png"


function App() {
  return (
    <div className="card-background">
      <div className="card">
        <img src={img} alt="smiling business woman" className="img" />
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App
