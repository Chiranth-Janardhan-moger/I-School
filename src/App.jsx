import Nav from './components/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/AnnouncementBar';
import AnnouncementBanner from './components/AnnouncementBanner';
import About from './components/About';
import Academics from './components/Academics';

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
                {/* 
                <section id="courses" className="min-h-screen">
                  <div>Courses Content</div>
                </section>
                
                <section id="admissions" className="min-h-screen">
                  <div>Admissions Content</div>
                </section>
                */}
              </div>
            </>
          } />
          
          {/* Separate routes for individual pages (if needed) */}
          <Route path="/about" element={
            <>
              <Nav />
              <Announcement />
              <About />
            </>
          } />
          
          <Route path="/courses" element={
            <>
              <Nav />
              <Announcement />
              <div>Courses Page</div>
            </>
          } />
          
          <Route path="/admissions" element={
            <>
              <Nav />
              <Announcement />
              <div>Admissions Page</div>
            </>
          } />
          
          <Route path="/workshops" element={
            <>
              <Nav />
              <Announcement />
              <div>Workshops Page</div>
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <Nav />
              <Announcement />
              <div>Contact Page</div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;