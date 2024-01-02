
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
                        <input type="email" placeholder="Enter email" className="w-32 pb-1 bg-transparent border-b-2 border-gray-500 outline-none md:w-40 xl:w-52" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer