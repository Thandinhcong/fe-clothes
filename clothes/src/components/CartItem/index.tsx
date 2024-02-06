import { PlusIcon } from '@heroicons/react/16/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import React, { useRef } from 'react'
import style from './style.module.css'

const CartItem = () => {
    const addToCartRef = useRef<HTMLSpanElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    
    const handleAddToCart = () => {
        const addToCartBtn = addToCartRef.current
        const wrapper = wrapperRef.current
        const cart = document.getElementById("cart")
        console.log(cart)

        if (wrapper){
            const cssAnimation = document.createElement("style")
            const rules = document.createTextNode(`
            @-webkit-keyframes yAxis {
                100% { transform: translateY(-${(wrapper.offsetTop - window.scrollY) + 90}px); }
            }
            @-webkit-keyframes xAxis {
                100% { transform: translateX(calc(100vw - ${(wrapper.offsetLeft + 200) + "px"})); }
            }
        `)

            cssAnimation.append(rules)
            document.querySelector("head")?.append(cssAnimation)
        }

        if(addToCartBtn){
            document.querySelector("header")!.style.zIndex = "unset"
            // addToCartBtn.classList.add(style.send_to_cart)
            addToCartBtn.classList.add("send_to_cart")
            
            setTimeout(() => {
                // addToCartBtn.classList.remove(style.send_to_cart)
                cart?.classList.add("shake")
                document.querySelector("header")!.style.zIndex = "50"
                addToCartBtn.classList.remove("send_to_cart")
            }, 1000)
            
            setTimeout(() => {
                cart?.classList.remove("shake")
                
            }, 500)
        }
    }
  return (
    <div className="relative group mb-14" ref={wrapperRef}>
                    <img
                      src="https://lunya.co/cdn/shop/files/LOFTY_WOOL_WHIP_STITCH_PULLOVER_TOASTED_MARL-1.jpg?v=1700242026"
                      className="w-full h-full"
                      alt="" />
                    <div
                      className="absolute inset-0 w-full transition-opacity duration-300 ease-in-out bg-gray-200 opacity-0 hover:opacity-50">
                      <div className="flex gap-3 items-center absolute xl:top-1/2 xl:left-[30%] md:top-1/2 md:left-[20%] lg:top-1/2 lg:left-[27%] top-1/2 left-[34%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span ref={addToCartRef} className={`relative`} onClick={handleAddToCart}>
                            <span className={`cart_item`}></span>
                            <ShoppingBagIcon className="w-10" />
                            <PlusIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-4 text-blue-500" />
                        </span>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>     
                      </div>
                    </div> 
                    <div className="absolute bottom-0 left-0 w-full pb-2 text-center">
                        <h4 className="text-base font-bold leading-10 text-white xl:text-2xl">Denim Jacket</h4>
                        <p className="text-base text-sky-500">$$69.00</p>
                    </div>
                </div>
  )
}

export default CartItem
