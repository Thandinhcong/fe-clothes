import React from "react";

const About = () => {
    return (
        <div>
            <div className="relative">
                <img src="https://img.freepik.com/free-photo/new-fashionable-collection_1098-13816.jpg?w=996&t=st=1703524264~exp=1703524864~hmac=0672c74b55f8b227b7a86673baa7fac7b4d0a3a74cebbe84b45c99bbaca666de" alt="" className="w-full"/>
                <div className="absolute top-1/4 left-1/4">
                    <h1 className="pb-5 text-base text-2xl font-bold xl:text-5xl lg:text-5xl md:text-4xl">About Us</h1>
                    <p>
                    Welcome to NorthStar – where fashion meets individuality. At NorthStar, we don't just sell clothes; <br /> we offer a unique and comfortable online shopping experience.
                    </p>
                </div>
            </div>
            <div className="container mx-auto mt-32 xl:flex xl:justify-evenly md:flex md:justify-evenly lg:flex lg:justify-around">
                <div className="flex flex-col items-center justify-center mb-5">
                    <div>
                    <div className="flex justify-start">
                        <h2 className="text-4xl ">Elevate Rest</h2>
                    </div>
                    <p className="py-5">
                    Lunya is on a mission to put our most crucial time on a pedestal. <br /> We believe time spent recharging is a gift to every part of life: <br /> we're better selves, partners, friends, parents, employees, <br /> pickleball players, you name it, when we're well rested.
                    <br />
                    </p>
                    <p>
                    This mantra threads through every part of our design process, <br /> resulting in thoughtful products that are made for reveling in the <br /> restful moments of everyday. Sleeping, dreaming, contemplating <br /> — moments that make you say, let’s go back to bed. The only thing <br /> we can’t do is cook you breakfast in the morning.
                    </p>
                    </div>
                </div>
                <div className="overflow-hidden ">
                    <img
                        src="https://lunya.co/cdn/shop/files/22_COOL_SHORT_SLEEVE_IMMERSEDBLACK_0216_1024x1024.jpg?v=1659727203"
                        alt=""
                        className="transition-transform w-[575px] h-full hover:scale-105"
                    />
                </div>
            </div>
            <div className="container mx-auto mt-32 xl:flex xl:justify-evenly md:flex md:justify-evenly lg:flex lg:justify-around">
                <div className="overflow-hidden ">
                        <img
                            src="https://lunya.co/cdn/shop/files/02_AboutUs_ReclaimingRest_v2_1024x1024.jpg?v=1659555055"
                            alt=""
                            className="transition-transform w-[575px] h-full hover:scale-105"
                        />
                </div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <div>
                    <div className="flex justify-start mt-5">
                        <h2 className="text-4xl ">Reclaiming Rest</h2>
                    </div>
                    <p className="py-5">
                    Our mission is simple — a better rested world.
                    <br />
                    </p>
                    <p>
                    We are constantly seeking out new possibilities for restoration <br /> with products that allow you to hit pause, or maybe just smack <br /> that snooze button one more time. We see our bedrooms as so <br /> much more than just another room in the house;  instead a place <br /> to prioritize yourself, honoring what you need through <br /> connection, stillness, a good book (or binging one more episode), <br /> and a great night's sleep. We celebrate rest as a universal treasure, <br /> and one that you owe to yourself. 
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About