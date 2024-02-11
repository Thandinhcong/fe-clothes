import React from "react";
import { CartItem } from "../../components";



const Home = () => {
    
    return (
        <>
        <div className="">
            <img src="https://www.thistlesstirling.com/wp-content/uploads/2016/08/BW6100-Thistles-Spring_Summer-Fashion-Web-Banner-1920x1080px2.jpg" alt="" className="w-full "/>
        </div>
        <div className="w-full my-8 xl:px-10">
            <div className="text-center title">
                <h1 className="text-4xl font-bold font-['Arimo'] leading-[55px] text-stone-90">Discover NEW Arrivals</h1>
                <p className="text-center text-neutral-600 text-xl font-normal font-['Lato'] leading-[48px]">Recently added shirts!</p>
            </div>
            <div className="content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto w-full container mt-[50px] p-3">
                {Array.from({length: 8}).map((_, index) => <CartItem key={index} />)}
            </div>
        </div>
        <div className="container grid grid-cols-1 gap-6 mx-12 mx-auto md:grid-cols-4 xl:grid-cols-4">
            <div className="">
                <div className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#024E82" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                    </svg>
                    <p className="text-base font-bold">FREE SHIPPING</p>
                </div>
                <div className="pl-16"><span>Enjoy free shipping on all <br/> orders above $100</span></div>
            </div>
            <div>
                <div className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#024E82" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M15 15l3.35 3.35" />
                        <path d="M9 15l-3.35 3.35" />
                        <path d="M5.65 5.65l3.35 3.35" />
                        <path d="M18.35 5.65l-3.35 3.35" />
                    </svg>
                    <p className="text-base font-bold">SUPPORT 24/7</p>
                </div>
                <div className="pl-16"><span>Our support team is there <br/> to help you for queries</span></div>
            </div>
            <div>
                <div className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-reload" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#024E82" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
                        <path d="M20 4v5h-5" />
                    </svg>
                    <p className="text-base font-bold">30 DAYS RETURN</p>
                </div>
                <div className="pl-16"><span>Simply return it within 30 <br/> days for an exchange.</span></div>
            </div>
            <div>
                <div className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fingerprint" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#024E82" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                        <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                        <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                        <path d="M8 15a18 18 0 0 0 1.8 6" />
                        <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                    </svg>
                    <p className="text-base font-bold">100% PAYMENT SECURE</p>
                </div>
                <div className="pl-16"><span>Our payments are secured <br/> with 256 bit encryption</span></div>
            </div>
        </div>
        <div className="container grid w-full grid-cols-1 gap-5 mx-auto my-24 md:grid-cols-3 xl:gap-5 lg:gap-5 md:gap-5">
            <div className="bg-black xl:col-span-2 lg:col-span-2 md:col-span-2 h-[460px] text-white flex justify-center flex-col items-center">
                <h1 className="text-[32px]">PEACE OF MIND</h1>
                <p className="text-center py-7">A one-stop platform for all your fashion needs, <br/> hassle-free. Buy with a peace of mind.</p>
                <button className="transition-all duration-300 bg-white text text-sky-800 w-36 h-14 hover:bg-sky-800 hover:text-white hover:bg-opacity-50">BUY NOW</button>
            </div>
            <div className="flex flex-col items-center justify-center p-8 text-white bg-black">
                <h1 className="text-[32px] text-center">BUY 2 GET 1 FREE</h1>
                <p className="text-center py-7">End of season sale. Buy any 2 items of your choice <br/> and get 1 free.</p>
                <button className="transition-all duration-300 bg-white text-sky-800 w-36 h-14 hover:bg-sky-800 hover:text-white hover:bg-opacity-50">BUY NOW</button>
            </div>
        </div>
        <div>
            <div className="text-center">
                <h1 className="py-5 text-4xl font-bold">Top Sellers</h1>
                <p className="text-xl font-normal text-neutral-600">Browse our top-selling products</p>
            </div>
            <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-[50px] xl:px-14">
            {Array.from({length: 8}).map((_, index) => <CartItem key={index} />)}
            </div>
            <div className="flex justify-center my-14"><button className="text-white transition-all duration-300 hover:bg-black bg-sky-800 w-36 h-14 hover:text-white hover:bg-opacity-50">SHOP NOW</button></div>
        </div>
        </>
    )
}

export default Home