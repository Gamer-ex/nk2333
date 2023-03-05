import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import { Home } from './pages/Home/Home'
import { Events } from './pages/Events/Events'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Signup } from './pages/Signup/Signup'
import { Cultural } from './pages/Events/Cultural/Cultural'
import { Technical } from './pages/Events/Technical/Technical'
import {Competitions} from './pages/Events/Technical/Competitions/Competitions'
import {Workshops} from './pages/Events/Technical/Workshops/Workshops'

import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Privacy from './components/privacy/privacy'
import Refund from './components/refund/refund'
import Terms from './components/Terms/Terms'
function App() {
  return (
    <div className="App">
      <Router>
          
          <Navbar/>
        
        <Routes>          
          <Route path="/" element={<Home />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/events/cultural" element={<Cultural/>}/>
          <Route path="/events/technical" element={<Technical/>}/>
          
          <Route path="/events/technical/competitions" element={<Competitions/>}/>
          <Route path="/events/technical/workshops" element={<Workshops/>}/>
          
          <Route path="/Contact" element= { <Contact />}/>
          <Route path="/Privacy" element= { <Privacy />}/>
          <Route path="/Terms" element= { <Terms />}/>
          <Route path="/Refund" element= { <Refund />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
