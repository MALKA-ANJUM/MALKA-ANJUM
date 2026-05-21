import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className="container mx-auto flex justify-between">
            <a href="#">
                Malka <span>Anjum</span>
            </a>
      </div>
    </nav>
  )
}

export default Navbar
