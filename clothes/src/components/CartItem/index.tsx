// import { PlusIcon } from '@heroicons/react/16/solid'
// import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import React, { useRef } from 'react'
import style from './style.module.css'
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

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
                        <div className='text-[42px]'><AiOutlineEye /></div>
                        <span ref={addToCartRef} className={`relative`} onClick={handleAddToCart}>
                            <span className={`cart_item`}></span>
                            <div className='text-[42px]'><AiOutlineShopping /></div>
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-4 text-blue-600"><AiOutlinePlus /></div>
                        </span>
                        
                        <div className='text-[38px]'><AiOutlineHeart /></div> 
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
