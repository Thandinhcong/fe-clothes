import React from "react";

const CheckOut = () => {
    return(
        <div>
            <div className="p-1">
                <div className="container mx-auto pt-28">
                        <ul className="flex gap-3 text-zinc-500">
                        <li>
                            <a href="">HOME </a>
                        </li>
                        /
                        <li>
                            <a href="">CHECK OUT </a>
                        </li>
                        </ul>
                </div>
                <div className="container mx-auto">
                    <form action="" className="w-full md:w-1/2">
                        <h3 className="py-5 text-4xl font-bold">Billing details</h3>
                        <div>
                            <label htmlFor="base-input" className="block  leading-10 text-neutral-600 text-base font-normal font-['Lato']">Full Name <span className="text-red-600">*</span></label>
                            <input type="text" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" />
                        </div>
                        <div>
                            <label htmlFor="base-input" className="block  leading-10 text-neutral-600 text-base font-normal font-['Lato']">Street Address <span className="text-red-600">*</span></label>
                            <input type="text" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" placeholder="House number and street name"/>
                            </div>
                        <div>
                            <label htmlFor="base-input" className="block  leading-10 text-neutral-600 text-base font-normal font-['Lato']">Town / City <span className="text-red-600">*</span></label>
                            <input type="text" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" />
                        </div>
                        <div>
                            <label htmlFor="base-input" className="block  leading-10 text-neutral-600 text-base font-normal font-['Lato']">Phone <span className="text-red-600">*</span></label>
                            <input type="text" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" />
                        </div>
                        <div>
                            <label htmlFor="base-input" className="block  leading-10 text-neutral-600 text-base font-normal font-['Lato']">Email Address <span className="text-red-600">*</span></label>
                            <input type="text" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" />
                        </div>
                    </form>
                    <div className="container mx-auto">
                        <h3 className="py-10 text-4xl font-bold">Your order</h3>
                        <div className="overflow-x-auto border">
                        <table className="min-w-full overflow-hidden bg-white border border-gray-300 rounded-lg">
                            <thead className="border-b">
                            <tr>
                                <th className="px-4 py-4 text-left">Product</th>
                                <th className="px-4 py-4 text-left">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-4">Plan White Shirt</td>
                                <td className="px-4 py-4">$59.00</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-4">Quantity</td>
                                <td className="px-4 py-4">5</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-4">Payment Methods</td>
                                <td className="flex items-center px-4 py-4">
                                <p>Click to select</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                    <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-4">Subtotal</td>
                                <td className="px-4 py-4">$59.00</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4">.</td>
                                <td className="px-4 py-4">.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="px-4 py-4 mt-10 bg-gray-100 opacity-1">
                        <p>Cash on delivery.  Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    </div>
                    <div className="mt-10 text-right">
                        <button className="w-48 text-white transition duration-300 ease-in-out bg-orange-600 hover:bg-orange-700 h-14">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut