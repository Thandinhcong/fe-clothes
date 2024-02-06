import { Image } from "antd";
import React, { useState } from "react";

const thumbnailImages: string[] = [
  "https://lunya.co/cdn/shop/files/SOFT_MODAL_RIB_UNDERPIN_LONG_SLEEVE-3.jpg?v=1703269388",
  "https://lunya.co/cdn/shop/files/SOFT_MODAL_RIB_UNDERPIN_LONG_SLEEVE-4.jpg?v=1703269388",
  "https://lunya.co/cdn/shop/files/SOFT_MODAL_RIB_UNDERPIN_LONG_SLEEVE-5.jpg?v=1703269388",
  "https://lunya.co/cdn/shop/files/SOFT_MODAL_RIB_UNDERPIN_LONG_SLEEVE-2.jpg?v=1703269388",
];

const Detail = () => {
  const [activeTabs, setActiveTab] = useState<number>(0);
  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://lunya.co/cdn/shop/files/SOFT_MODAL_RIB_UNDERPIN_LONG_SLEEVE-1_1.jpg?v=1703269388"
  );
  
  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

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
      <div className="container grid gap-12 pt-32 mx-auto grid-col-1 md:grid-cols-5">
        <div className="px-2 mb-5 md:col-span-5">
            <ul className="flex gap-3 text-zinc-500">
            <li>
                <a href="">Category </a>
            </li>
            /
            <li>
                <a href="">Categories </a>
            </li>
            /
            <li>
                <a href="">Product Name </a>
            </li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:col-span-3">
          <div className="flex gap-4 md:flex-col md:min-w-36 md:max-w-36 ">
            {thumbnailImages.map((thumbnail, index) => (
              <div className="cursor-pointer hover:border-black hover:border-2">
                <Image
                key={index}
                src={thumbnail}
                width={"100%"}
                height={"100%"}
                onClick={() => handleThumbnailClick(thumbnail)}
              />
              </div>
            ))}
          </div>
          <div className="md:flex-1">
            <Image width={"100%"} src={selectedImage} className="w-full" />
          </div>
        </div>
        <div className="px-2 md:col-span-2">
          <div className="mb-16 space-y-5 ">
            <h1 className="text-3xl font-bold">Plain White Shirt</h1>
            <p className="text-xl text-sky-800">
              <s className="pr-3 text-gray-400">$69.00 </s>$59.00
            </p>
            <p>
              A classic t-shirt never goes out of style. This is our most
              premium collection of <br /> shirt. This plain white shirt is made
              up of pure cotton and has a premium finish.
            </p>
          </div>
          <div className="">
            <select
              id="countries"
              className="h-10 pl-2 border-2 outline-none w-44 border-slate-300"
            >
              <option selected>Select Size</option>
              <option value="US">Small - S</option>
              <option value="CA">Medium - M</option>
              <option value="FR">Large - L</option>
              <option value="DE">Extra Large - XL</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <div className="relative w-20 h-20 my-5 text-center border-2 rounded-md cursor-pointer">
                <p className="py-1">QTY</p>
                <span>{quantityCount}</span>
                <div className="absolute right-0 bottom-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 hover:border-white hover:border " onClick={increaseQuantity}>
                    <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 hover:border-white hover:border " onClick={decreaseQuantity}>
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <button className="h-12 mb-5 text-white w-36 bg-sky-800">
                ADD TO CART
            </button>
          </div>
          <p>Tags: Modern, Design, cotton</p>
        </div>
      </div>
      <div className="container px-2 mx-auto mt-28">
        <div className="border border-gray-200 w-72">
          <ul className="grid grid-cols-2 text-sm font-medium text-center text-gray-500 bg-white">
            <li className="py-3 bg-gray-400 border-gray-100 cursor-pointer w-36">
              <a
                className={`inline-block  ${
                  activeTabs === 0 ? "text-white" : "text-black"
                }`}
                onClick={() => handleTabClick(0)}
                aria-current="page"
              >
                Description
              </a>
            </li>
            <li className="py-3 cursor-pointer w-36">
              <a
                className={`inline-block  ${
                  activeTabs === 1 ? "text-black " : ""
                }`}
                onClick={() => handleTabClick(1)}
                aria-current="page"
              >
                Reviews (20)
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-auto border border-gray-200 rounded-md">
          {activeTabs === 0 && (
            <div className="m-8 space-y-5">
              <p>
                A key objective is engaging digital marketing customers and
                allowing them to interact with the brand through servicing and
                delivery of digital media. Information is easy to access at a
                fast rate through the use of digital communications.{" "}
              </p>
              <p>
                Users with access to the Internet can use many digital mediums,
                such as Facebook, YouTube, Forums, and Email etc. Through
                Digital communications it creates a Multi-communication channel
                where information can be quickly exchanged around the world by
                anyone without any regard to whom they are.[28] Social
                segregation plays no part through social mediums due to lack of
                face to face communication and information being wide spread
                instead to a selective audience.{" "}
              </p>
            </div>
          )}
          {activeTabs === 1 && <div></div>}
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <label
          htmlFor="message"
          className="block mb-2 leading-10 text-neutral-600 text-base font-['Lato'] font-bold"
        >
          Add a new review
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 md:w-1/2 w-full border border-gray-200 outline-none rounded-md text-sm"
          placeholder="Enter reviews..."
        ></textarea>
        <button className="h-10 mt-5 text-white w-36 bg-sky-800">
          Post Reviews
        </button>
      </div>
    </div>
  );
};

export default Detail;
