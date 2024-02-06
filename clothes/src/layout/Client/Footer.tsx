import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Footer = () => {
    return (
        <footer className="pb-4 mt-40 bg-neutral-50">
            <div className="grid grid-cols-2 gap-5 mx-12 text-base font-normal xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3">
                <div>
                    <h3 className="py-6 text-xs font-bold">COMPANY INFO</h3>
                    <div className="leading-8 font-['Lato']">
                        <p>About Us</p>
                        <p>Latest Posts</p>
                        <p>Contact Us</p>
                        <p>Shop</p>
                    </div>
                </div>
                <div>
                    <h3 className="py-6 text-xs font-bold">HELP LINKS</h3>
                    <div className="leading-8 font-['Lato']">
                        <p>Tracking</p>
                        <p>Order Status</p>
                        <p>Delivery</p>
                        <p>Shipping info</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div>
                    <h3 className="py-6 text-xs font-bold">USEFUL LINKS</h3>
                    <div className="leading-8 font-['Lato']">
                        <p>Special Offers</p>
                        <p>Gift Cards</p>
                        <p>Advetising</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
                <div>
                    <h3 className="py-5 text-xs font-bold">GET IN THE KNOW</h3>
                    <form action="" className="flex gap-2 py-8">
                        <input type="email" placeholder="Enter email" className="w-24 pb-1 text-sm bg-transparent border-b-2 border-gray-500 outline-none md:w-40 xl:w-52"/>
                        <PaperAirplaneIcon className='w-5 h-5'/>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer