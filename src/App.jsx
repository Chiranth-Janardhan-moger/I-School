
import Nav from './components/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/AnnouncementBar';
import AnnouncementBanner from './components/AnnouncementBanner';


function App() {
  return (
      <Router>
      <div className="App">
        {/* Announcement Banner (Modal) - Shows on page load */}
        <AnnouncementBanner />
        
        <Routes>
      
          
          {/* All other routes with main layout */}
          <Route path="/*" element={
            <>
              {/* Navbar */}
              <Nav />
              
              {/* Announcement Bar - Below navbar, above main content */}
              <Announcement />
              
              {/* Main content routes */}
              <Routes>
                {/* Home page with HeroPage component */}
                <Route path="/" element={<Home />} />
                
                {/* Other pages */}
                <Route path="/courses" element={<div>Courses Page</div>} />
                <Route path="/admissions" element={<div>Admissions Page</div>} />
                <Route path="/workshops" element={<div>Workshops Page</div>} />
                
                {/* Add more routes as needed */}
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App
