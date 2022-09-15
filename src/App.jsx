import reactLogo from './assets/react.svg'
import Info from '../components/Info'
import About from '../components/About'
import Interests from '../components/Interests'
import Footer from '../components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="card-content">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}
