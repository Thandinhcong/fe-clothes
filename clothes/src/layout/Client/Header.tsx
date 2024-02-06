import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { CartIcon } from '../../assets/icons'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    const [isOpenNav, setIsOpenNav] = useState(false)
    const toggleNav = () => {
        setIsOpenNav(!isOpenNav)
    }
    console.log(isOpenNav)
    const [isToggleSearch, setIsToggleSearch] = useState(false)
    const toggleSearch = () => {
        setIsToggleSearch(!isToggleSearch)
    }
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    
    return (
        <header className={`fixed z-50 flex items-center md:justify-around justify-between px-2 w-full py-5 ${
            scrolled ? 'bg-neutral-50' : ''
          } transition-all duration-300`}>
            <div className="logo text-[36px] ">NorthStar</div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col items-center p-4 mt-4 font-medium md:p-0 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 ">
                  <li>
                    <Link to='/' className="block px-3 py-2 bg-blue-700 rounded md:bg-transparent md:text-sky-800 md:p-0 text-sky-800" aria-current="page">Home</Link>
                  </li>
                  <li className="relative">
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={toggleDropdown}  className="flex items-center justify-between w-full px-3 py-2 text-gray-900 ">Choose Option <svg className={`w-2.5 h-2.5 ms-2.5 transform transition-transform ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                      <div id="dropdownNavbar" className={`text-black transition-all duration-500 ease-in-out ${
                        isDropdownOpen ? 'block' : 'hidden'
                        }`}>
                          <ul className="absolute left-3 w-full text-sm text-gray-700 top-[65px] hover:border-t-black hover:border-2 bg-neutral-50 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                              <a href="#" className="block px-5 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 1</a>
                            </li>
                            <li>
                              <a href="#" className="block px-5 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 2</a>
                            </li>
                            <li>
                              <a href="#" className="block px-5 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 3</a>
                            </li>
                          </ul>
                      </div>
                  </li>
                  <li>
                    <Link to='/about' className='className="block px-3 py-2 text-black" aria-current="page"'>About</Link>
                  </li>
                  <li>
                    <Link to='/contact' className="block px-3 py-2 text-black" aria-current="page">Contact</Link>
                  </li>
                </ul>
              </div>
            <div className='relative pt-3'>
                <div className="flex items-center search">
                    <form action="" className="flex items-center hidden md:block">
                        <input type="text" placeholder="Enter search..." className="w-40 h-10 pl-4 transition-all duration-300 bg-gray-100 outline-none md:w-52 focus:w-52 rounded-3xl "/>
                        <MagnifyingGlassIcon className="absolute w-6 h-6 right-3 top-5"/>            
                    </form>
                </div>
                
            </div>
            {isToggleSearch  && (
            <div className='absolute left-0 bg-white top-[80%] md:hidden z-30 w-full h-[60%] transition-opacity duration-300 ease-linear opacity-80' >
                <form action="" >
                    <input type="text" placeholder="Enter search..." className="w-full p-4 bg-transparent outline-none"/>
                </form>
            </div>
            )}
            <div className="relative flex items-center gap-2 choose">
                <div className='hidden gap-3 md:grid md:grid-cols-2'>
                    <button className='px-6 py-3 transition duration-300 ease-in-out border border-black rounded-3xl hover:bg-gray-200'>Log in</button>
                    <button className='px-6 py-3 text-white transition duration-300 ease-in-out bg-black rounded-3xl hover:bg-gray-800'>Sign up</button>
                </div>
                {isToggleSearch ? (
                        <button onClick={toggleSearch}>
                            <XMarkIcon className="absolute top-1 w-6 h-6 left-[-25px] md:hidden"/>
                        </button>
                    )
                    :
                        <button onClick={toggleSearch}>
                            <MagnifyingGlassIcon className="absolute top-1 w-6 h-6 left-[-25px] md:hidden"/>
                        </button>
                    }
                <div className='relative' id="cart">
                    <ShoppingBagIcon className='text-black w-7' />
                    <div className='absolute w-6 h-6 bg-black border border-white top-5 left-4 rounded-3xl'>
                        <span className='px-2 pb-1 text-white text-[12px]'>1</span>
                    </div>
                </div>
                
                <button onClick={toggleNav}>
                    <Bars3Icon className="w-7 md:hidden"/>
                </button>
                <div className={`absolute h-auto p-5 bg-white top-[90%] shadow-lg transition-all w-screen right-[-8px] ${isOpenNav ? "translate-x-0": "translate-x-full"} md:hidden`}  id="navbar-dropdown">
                    <ul className="leading-10 ">
                    <li className=''>
                        <Link to='/' className="text-lg font-bold rounded text-sky-800" aria-current="page">Home</Link>
                    </li>
                    <hr />
                    <li className="">
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={toggleDropdown} className="flex items-center text-gray-900">Choose Option <svg className={`w-2.5 h-2.5 ms-2.5 transform transition-transform ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                        <div id="dropdownNavbar" className={`bg-transparent text-black transition-all duration-500 ease-in-out ${
                        isDropdownOpen ? 'block' : 'hidden'
                        }`}>
                            <ul className="py-2 pl-5 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                <a href="#" className=" hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 1</a>
                                </li>
                                <li>
                                <a href="#" className=" hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 2</a>
                                </li>
                                <li>
                                <a href="#" className=" hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 3</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to='/about' className='className="text-black " aria-current="page"'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="text-black " aria-current="page">Contact</Link>
                    </li>
                    </ul>
                    <div className='grid grid-cols-2 gap-3 mt-5 md:hidden'>
                        <button className='px-6 py-3 transition duration-300 ease-in-out border border-black rounded-3xl hover:bg-gray-200'>Log in</button>
                        <button className='px-6 py-3 text-white transition duration-300 ease-in-out bg-black rounded-3xl hover:bg-gray-800'>Sign up</button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>       
            </div>
        </header>
    )
}

export default Header