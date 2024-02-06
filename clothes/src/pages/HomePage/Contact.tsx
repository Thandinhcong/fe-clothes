import React from "react";

const Contact = () => {
    return(
        <div>
            <div className="relative">
                <img src="https://globe-konnect.com/wp-content/uploads/2020/11/contact-banner-scaled.jpg" alt="" className="w-full"/>
                <p className="absolute text-xl text-white xl:text-5xl lg:text-4xl md:text-3xl top-1/2 left-20">Contact Us</p>
            </div>
            <div className="my-20 xl:justify-around xl:flex">
                <div>
                    <h4 className="text-neutral-700 text-4xl font-bold font-['Arimo'] leading-[48px] pb-10">We would love to hear from you.</h4>
                    <p className="text-base font-normal text-neutral-600">If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
                    <form action="" className="pt-10 mx-2">
                        <div className="grid grid-cols-2 gap-7">
                            <div>
                                <label htmlFor="base-input" className="block mb-2 leading-10 text-neutral-600 text-base font-normal font-['Lato']">Full Name</label>
                                <input type="text" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" placeholder="Enter full name"/>
                            </div>
                            <div>
                                <label htmlFor="base-input" className="block mb-2 leading-10 text-neutral-600 text-base font-normal font-['Lato']">Phone</label>
                                <input type="number" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" placeholder="Enter phone number"/>
                            </div>
                        </div>
                        <div>
                        <div>
                            <label htmlFor="base-input" className="block mb-2 leading-10 text-neutral-600 text-base font-normal font-['Lato']">Email</label>
                            <input type="email" id="base-input" className="w-full border border-gray-200 outline-none h-[45px] rounded-md text-sm pl-3" placeholder="Enter email"/>
                        </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 leading-10 text-neutral-600 text-base font-normal font-['Lato']"> Message</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full border border-gray-200 outline-none rounded-md text-sm" placeholder="Enter message..."></textarea>
                        </div>
                        <button className="w-48 h-[58px] bg-sky-800 text-white mt-8 hover:bg-black hover:bg-opacity-50 transition-all duration-300">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="m-5">
                    <div className="mb-16">
                        <h4 className="text-2xl font-bold leading-[45px]">Visit Us</h4>
                        <p>Xuân Phương, Nam Từ Liêm, Hà Nội <br />
                        Phone: +923039898987</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold leading-[45px]">Get In Touch</h4>
                        <p>You can get in touch with us on this provided email. </p>
                        <p>Email: hmjawad087@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact