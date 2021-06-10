
import './App.scss';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './Components/Inc/Navbar'
import Header from './Components/Inc/Header'
import Particles from 'react-particles-js'
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'
import Skill from './Components/Pages/Skill'
import Contact from './Components/Pages/Contact'
import Footer from './Components/Inc/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
   <Router>
    
    <Navbar/>
      <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type: "circle",
            stroke:{
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
      />
     
     <Header/>
     <About/>
     <Services/>
     <Skill/>
     <Contact/>
      <Footer/>
    </Router>
   
  );
}

export default App;
