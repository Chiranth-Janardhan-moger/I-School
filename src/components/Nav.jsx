import React, { useState } from 'react'
import { Home, BookOpen, FolderOpen, Users, MessageSquare, Menu, X } from 'lucide-react'
import logoImage from '../assets/logo.png';
// Mock logo for demonstration
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Navigation handler function
  const handleNavigation = (path) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
    
    // Navigate to the specified path
    window.location.href = path
  }

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'About', path: '#About' },
    { icon: FolderOpen, label: 'Academics', path: '/academics' },
    { icon: MessageSquare, label: 'Announcements', path: '#announcements' },
    { icon: Users, label: 'Gallery', path: '/gallery' }
  ]

  return (
    < div className='select-none'>
      <div className='w-full  bg-gradient-to-r from-blue-100 via-purple-100 to-purple-100 flex items-center justify-center relative z-50'>
        {/* Purple circle extension for desktop only - connects with hero section */}
      
        {/* Main navbar container with enhanced rounded border and shadow */}
        <nav className='w-full bg-white rounded-4xl border-4 border-black px-6 py-4 shadow-2xl relative'>
          
          {/* Top section with logo and mobile menu button */}
          <div className='flex items-center justify-between'>
            {/* Logo section - Make logo clickable to go home */}
            <div className='flex items-center'>
              <div className='text-6xl font-bold'>
                <span 
                  className='cursor-pointer'
                  onClick={() => handleNavigation('/')}
                >
                  <img src={logoImage} alt="I-school" width={200} draggable={false} />
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
                    className='flex items-center space-x-2 cursor-pointer text-xl hover:text-red-600 transition-colors'
                    onClick={() => handleNavigation(item.path)}
                  >
                    <IconComponent size={24} />
                    <span className='font-bold'>{item.label}</span>
                  </div>
                )
              })}
            </div>
                
            {/* Desktop Contact Us button - Hidden on mobile */}
            <div className='hidden lg:flex items-center space-x-3'>
              <button 
                className='cursor-pointer px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-bold shadow-xl hover:shadow-xl transition-all transform hover:scale-105 '
                onClick={() => handleNavigation('/contact')}
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
                <X size={32} className='text-black' />
              ) : (
                <Menu size={30} className='text-black' />
              )}
            </button>
          </div>

          {/* Mobile Menu - Expanded below navbar */}
          {isMobileMenuOpen && (
            <div className='lg:hidden mt-4 pt-4 border-t-2 border-gray-200'>
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
                      <IconComponent size={24} className='text-black' />
                      <span className='font-bold text-black text-lg'>{item.label}</span>
                    </div>
                  )
                })}
              </div>

              {/* Mobile Contact Us button */}
              <div className='pt-4 space-y-3'>
                <button 
                  className='w-full px-6 py-4 bg-blue-400 text-white rounded-full font-bold hover:bg-blue-500 transition-all transform hover:scale-105 flex items-center justify-center space-x-2'
                  onClick={() => handleNavigation('/contact')}
                >
                  <span>👤</span>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          )}
          
        </nav>
      </div>
    </div>
  )
}

export default Nav