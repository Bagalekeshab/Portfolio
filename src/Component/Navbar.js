import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`nav h-14 md:justify-between md:items-center flex px-3 py-3 space-x-2 absolute md:mx-52${menuOpen ? 'bg-slate-800 absolute w-full h-[50%] overflow-auto' : ''}`}>
      <div className='flex justify-center items-center space-x-2'>
        <div className='Hamburger inline-block cursor-pointer sm:hidden' onClick={toggleMenu}>
          {menuOpen ? (

            <>
              <div className="line w-6 h-0.5 my-1 bg-black transform rotate-45"></div>
              <div className="line w-6 h-0.5 my-1 bg-black transform -rotate-45"></div>
            </>
          ) : (

            <>
              <div className="line w-6 h-0.5 my-1 bg-black"></div>
              <div className="line w-6 h-0.5 my-1 bg-black"></div>
              <div className="line w-6 h-0.5 my-1 bg-black"></div>
            </>
          )}
        </div>
        <div className="logo text-xl hidden ">BAGALE</div>
      </div>

      <div className={`feature sm:flex space-x-7 md:bg-slate-50 ${menuOpen ? 'justify-center  items-center flex flex-col text-white ' : 'hidden'} rounded-xl px-5 py-1 font-medium drop-shadow-lg`}>
        <div className={`fitems pl-5 md:block cursor-pointer hover:text-emerald-950 hover:scale-105 transition duration-400 ${menuOpen ? 'block my-2' : 'hidden'}`}>HOME</div>
        <a href='#about'><div className={`fitems md:block cursor-pointer hover:text-emerald-950 hover:scale-105 transition duration-400  ${menuOpen ? 'block my-2' : 'hidden'}`}>ABOUT</div>
        </a>
        <a href='#skill'><div className={`fitems md:block cursor-pointer hover:text-emerald-950 hover:scale-105 transition duration-400  ${menuOpen ? 'block my-2' : 'hidden'}`}>SKILL</div>
        </a>
        <Link to='/blog'><div className={`fitems md:block cursor-pointer hover:text-emerald-950 hover:scale-105 transition duration-400  ${menuOpen ? 'block my-2' : 'hidden'}`}>BLOG</div>
        </Link>
        <a href='#contact'><div className={`fitems md:block cursor-pointer hover:text-emerald-950 hover:scale-105 transition duration-400  ${menuOpen ? 'block my-2' : 'hidden'}`}>CONTACT</div>
        </a>
      </div>

      <div className='hidden md:flex space-x-4 px-10 '>
        <a href='https://github.com/Bagalekeshab'> <ion-icon class='h-6 w-6 cursor-pointer ' name="logo-github" ></ion-icon></a>
        <ion-icon class='h-6 w-6 cursor-pointer' name="moon-outline"></ion-icon>
      </div>



    </div>
  )
}

export default Navbar
