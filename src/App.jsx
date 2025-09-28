import Nav from './components/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/AnnouncementBar';
import AnnouncementBanner from './components/AnnouncementBanner';
import About from './components/About';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Announcement Banner (Modal) - Shows on page load */}
        <AnnouncementBanner />
        
        <Routes>
          {/* Home page with scrollable sections */}
          <Route path="/" element={
            <>
              {/* Navbar - Fixed at top */}
              <Nav />
              
              {/* Announcement Bar - Below navbar */}
              <Announcement />
              
              {/* Scrollable Content */}
              <div className="scroll-container">
                {/* Home Section - First screen */}
                <section id="home" className="min-h-screen">
                  <Home />
                </section>
                
                {/* About Section - Second screen (appears when scrolling down) */}
                <section id="about" className="min-h-screen">
                  <About />
                </section>
                
                <section id="academics" className="min-h-screen">
                  <Academics />
                </section>
                
                <section id="gallery" className="min-h-screen">
                    <Gallery />
                  </section>
                
                <section id="contact" className="min-h-screen">
                  <Contact />
                </section>
                  <section className="min-h-1/2">
                  <Footer />
                </section>
                
              </div>
            </>
          } />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;