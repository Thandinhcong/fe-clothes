import React from 'react'

const Header = () => {
    return (
        <header className="fixed z-50 flex items-center justify-around w-full py-5 bg-neutral-50">
            <div className="logo text-[36px] ">NorthStar</div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col items-center p-4 mt-4 font-medium md:p-0 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 ">
                  <li>
                    <a href="#" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-sky-800 md:p-0 text-sky-800" aria-current="page">Home</a>
                  </li>
                  <li className="">
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full px-3 py-2 text-gray-900 ">Choose Option <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                      <div id="dropdownNavbar" className="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow md:hidden w-44 dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 1</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 2</a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Option 3</a>
                            </li>
                          </ul>
                      </div>
                  </li>
                  <li>
                    <a href="#" className="block px-3 py-2 text-black" aria-current="page">About</a>
                  </li>
                  <li>
                    <a href="#" className="block px-3 py-2 text-black" aria-current="page">Contact</a>
                  </li>
                </ul>
              </div>
            <div className="relative flex items-center search">
                <form action="" className="flex hidden xl:block lg:block md:block">
                    <input type="text" placeholder="Enter search..." className="w-40 h-10 pl-4 transition-all duration-300 bg-gray-100 outline-none xl:w-52 lg:w-52 md:w-52 focus:w-52 rounded-3xl "/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute w-6 h-6 right-3 top-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>                      
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute left-[50px] xl:hidden lg:hidden md:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>     
            </div>
            <div className="flex gap-3 choose">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
        </header>
    )
}

export default Header