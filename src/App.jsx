import Nav from './components/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcementbar from './components/AnnouncementBar';
import AnnouncementBanner from './components/AnnouncementBanner';
import About from './components/About';
import Academics from './components/Academics';
import Announcements from './components/Announcements'; 
import Gallery from './components/Gallery';

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
              <Nav />
              <Announcementbar />
              <div className="scroll-container">
                <section id="home" className="min-h-screen">
                  <Home />
                </section>
                <section id="about" className="min-h-screen">
                  <About />
                </section>
                <section id="academics" className="min-h-screen">
                  <Academics />
                </section>
                 <section id="announcements" className="min-h-screen">
                  <Announcements />
                </section>
                <section id="gallery" className="min-h-screen">
                  <Gallery />
                </section>
              </div>
            </>
          } />
          
        
          {/* <Route path="/contact" element={
            <>
              <Nav />
              <Announcements />
              <div>Contact Page</div>
            </>
          } /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
