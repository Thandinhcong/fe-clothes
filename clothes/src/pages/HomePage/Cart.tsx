import React, { useState } from "react";

const Cart = () => {
    const [quantityCount, setQuantityCount] = useState<number>(0)
    const increaseQuantity = () => {
        setQuantityCount(quantityCount + 1)
    }
    const decreaseQuantity = () => {
        if(quantityCount >= 1){
            setQuantityCount(quantityCount - 1)
        }
    }
    return (
        <div>
            <div>
                <div className="container mx-auto pt-28">
                    <ul className="flex gap-3 text-zinc-500">
                    <li>
                        <a href="">HOME </a>
                    </li>
                    /
                    <li>
                        <a href="">SHOPPING CART </a>
                    </li>
                    </ul>
                </div>
                <div className="container flex flex-col items-center px-3 py-12 mx-auto">
                    <div className="w-full overflow-x-auto">
                        <div className="inline-block w-full py-2">
                        <div className="w-full">
                            <table className="w-full min-w-full text-sm font-light text-left">
                            <thead className="font-medium border-b dark:border-neutral-500">
                                <tr>
                                <th scope="col" className="px-6 py-4"></th>
                                <th scope="col" className="px-6 py-4">Product</th>
                                <th scope="col" className="px-6 py-4">Classify goods</th>
                                <th scope="col" className="px-6 py-4">Price</th>
                                <th scope="col" className="px-6 py-4">Quantity</th>
                                <th scope="col" className="px-6 py-4">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="px-6 py-6 font-medium whitespace-nowrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-600">
                                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                        </svg>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">ô này hiển thị ảnh sp + tên sp</td>
                                    <td className="px-6 whitespace-nowrap">
                                        <div className="relative w-12 h-12 my-5 text-center border-2 rounded-md cursor-pointer">
                                        <span className="absolute top-3 left-3">{quantityCount}</span>
                                            <div className="absolute right-1 top-1 pl-14">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hover:border-white hover:border" onClick={increaseQuantity}>
                                                <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hover:border-white hover:border" onClick={decreaseQuantity}>
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">Otto</td>
                                    <td className="px-6 py-6 whitespace-nowrap">@mdo</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="px-6 py-6 font-medium whitespace-nowrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-600">
                                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                        </svg>
                                    </td>
                                    <td className="px-6 whitespace-nowrap">ô này hiển thị ảnh sp + tên sp 
                                        <select name="" id="" className="ml-3 border outline-none">
                                            <option value=""> Loại hàng + màu</option>
                                            <option value="">1</option>
                                        </select>
                                    </td>
                                    <td className="px-6 whitespace-nowrap">
                                        <div className="relative w-12 h-12 my-5 text-center border-2 rounded-md cursor-pointer">
                                        <span className="absolute top-3 left-3">{quantityCount}</span>
                                            <div className="absolute right-1 top-1 pl-14">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hover:border-white hover:border" onClick={increaseQuantity}>
                                                <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hover:border-white hover:border" onClick={decreaseQuantity}>
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                </svg>
                                                </div>
                                            </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">Thornton</td>
                                    <td className="px-6 py-6 whitespace-nowrap">@fat</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="px-6 py-6 font-medium whitespace-nowrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-600">
                                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                        </svg>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">ô này hiển thị ảnh sp + tên sp</td>
                                    <td className="px-6 whitespace-nowrap">
                                        <div className="relative w-12 h-12 my-5 text-center border-2 rounded-md cursor-pointer">
                                        <span className="absolute top-3 left-3">{quantityCount}</span>
                                            <div className="absolute right-1 top-1 pl-14">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hover:border-white hover:border" onClick={increaseQuantity}>
                                                <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 hover:border-white hover:border" onClick={decreaseQuantity}>
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">Wild</td>
                                    <td className="px-6 py-6 whitespace-nowrap">@twitter</td>
                                </tr>
                                
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <h2 className="pb-4 text-3xl font-bold">Cart Totals</h2>
                    <div className="w-1/4">
                        <div className="flex justify-between py-2 border-b-2 border-gray-200">
                            <p>Subtotal</p>
                            <p>$59.00</p>
                        </div>
                        <div className="flex justify-between py-2 border-b-2 border-gray-200">
                            <p>Shipping Free</p>
                            <p>FREE!!!</p>
                        </div>
                        <div className="flex justify-between py-2">
                            <p className="font-bold">Total</p>
                            <p>$59.00</p>
                        </div>
                    </div>
                    <button className="bg-[#D6763C] text-white px-5 py-3 mt-4 transition duration-300 ease-in-out hover:bg-orange-600">PROCESS TO ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;