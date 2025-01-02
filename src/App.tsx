import './App.css'
import ExpertFinancialServices from './components/ExpertFinancialServices'
import FinancialServices from './components/FinancialServices'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import JiaChatbot from './components/JiaChatbot'
import Navbar from './components/navbar'
import Process from './components/Process'
import Reviews from './components/Reviews'
import SuccessStories from './components/SuccessStories'
import Team from './components/Team'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FinancialServices/>
    <ExpertFinancialServices/>
    <WhyChooseUs/>
    <Process/>
    <SuccessStories/>
    <Team/>
    <JiaChatbot/>
    <Reviews />
    <Footer/>
    </>
    
  )
}

export default App
