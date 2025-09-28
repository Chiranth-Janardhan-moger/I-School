import React, { useState, useEffect } from 'react'
import { Home, BookOpen, FolderOpen, Users, MessageSquare, Menu, X } from 'lucide-react'
import logoImage from '../assets/logo.png';

// Mock logo for demonstration
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Navigation handler function
  const handleNavigation = (path) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
    
    // Check if it's an anchor link (starts with #)
    if (path.startsWith('#')) {
      // Remove the # to get the element ID
      const elementId = path.substring(1)
      const element = document.getElementById(elementId)
      
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    } else {
      // Navigate to the specified path for regular URLs
      window.location.href = path
    }
  }

  const menuItems = [
    { icon: Home, label: 'Home', path: '#home' },
    { icon: BookOpen, label: 'About', path: '#about' },
    { icon: FolderOpen, label: 'Academics', path: '#academics' },
    { icon: Users, label: 'Gallery', path: '#gallery' }
  ]

  return (
    <>
      {/* Spacer div to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 lg:h-16"></div>
      
      <div className='select-none'>
        <div className={`w-full bg-gradient-to-r from-blue-100 via-purple-100 to-purple-100 flex items-center justify-center fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}>
          {/* Purple circle extension for desktop only - connects with hero section */}
        
          {/* Main navbar container with enhanced rounded border and shadow */}
          <nav className='w-full bg-white rounded-b-2xl px-6 py-2 shadow-2xl relative'>
            
            {/* Top section with logo and mobile menu button */}
            <div className='flex items-center justify-between'>
              {/* Logo section - Make logo clickable to go home */}
              <div className='flex items-center'>
                <div className='text-6xl font-bold'>
                  <span 
                    className='cursor-pointer'
                    onClick={() => handleNavigation('/')}
                  >
                    <img src={logoImage} alt="I-school" width={160} draggable={false} />
                  </span>
                </div>
              </div>
              
              {/* Desktop Navigation items - Hidden on mobile */}
              <div className='hidden lg:flex items-center space-x-8'>
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div 
                      key={index} 
                      className='flex items-center space-x-2 cursor-pointer text-base hover:text-red-600 transition-colors'
                      onClick={() => handleNavigation(item.path)}
                    >
                      <IconComponent size={16} />
                      <span className='font-bold'>{item.label}</span>
                    </div>
                  )
                })}
              </div>
                  
              {/* Desktop Contact Us button - Hidden on mobile */}
              <div className='hidden lg:flex items-center space-x-3'>
                <button 
                  className='cursor-pointer px-4 py-2 bg-blue-400 hover:bg-blue-500 text-base text-white rounded-full font-bold shadow-xl hover:shadow-xl transition-all transform hover:scale-102 '
                  onClick={() => handleNavigation('#contact')}
                >
                  Contact Us
                </button>
              </div>

              {/* Mobile menu button - Only visible on mobile */}
              <button 
                onClick={toggleMobileMenu}
                className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
              >
                {isMobileMenuOpen ? (
                  <X size={22} className='text-black' />
                ) : (
                  <Menu size={22} className='text-black' />
                )}
              </button>
            </div>

            {/* Mobile Menu - Expanded below navbar */}
            {isMobileMenuOpen && (
              <div className='lg:hidden mt-4 pt-4 border-t-2 border-gray-200 max-h-96 overflow-y-auto'>
                {/* Mobile menu items */}
                <div className='py-2'>
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div 
                        key={index} 
                        className='flex items-center space-x-4 py-3 cursor-pointer text-xl hover:bg-blue-50 rounded-lg px-4 transition-colors'
                        onClick={() => handleNavigation(item.path)}
                      >
                        <IconComponent size={16} className='text-black' />
                        <span className='font-bold text-black text-base'>{item.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Mobile Contact Us button */}
               {/* Mobile Contact Us button */}
           <div className='space-y-2'>
                  <button 
                    className='w-full px-6 py-3 mb-2 bg-blue-400 text-white rounded-full font-bold hover:bg-blue-500 transition-all transform  flex items-center justify-center space-x-2'
                    onClick={() => handleNavigation('#contact')}
                  >
                    
                    <span>Contact Us</span>
                  </button>
                </div>

              </div>
            )}
            
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav