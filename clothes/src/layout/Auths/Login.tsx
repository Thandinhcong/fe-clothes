import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2">
                <div><img src="https://ecurater.com/wp-content/uploads/2020/10/login1.png" alt="" /></div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="logo text-[36px] text-center text-black">NorthStar</div>
                        <h2 className="my-5 text-2xl leading-5 tracking-tight text-center text-[#1c2135]">Sign in to your account</h2>
                    </div>
                    <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="">
                        <input id="email" name="email" type="email" autoComplete="email" required className="block w-full pl-2 text-gray-900 transition duration-700 bg-transparent border-b-2 border-gray-300 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:border-b-black"/>
                        <div className="absolute inset-y-0 border-b-2 border-gray-300 after:border-b-black"></div>
                        </div>
                        
                    </div>
        
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full pl-2 text-gray-900 transition duration-700 bg-transparent border-b-2 border-gray-300 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:border-b-black"/>
                            <div className="absolute inset-y-0 border-b-2 border-gray-300 after:border-b-black"></div>
                        </div>
                    </div>
                    <div className="text-sm ">
                        <a href="#" className="font-semibold text-[#8794c0] hover:underline hover:decoration-1">Forgot password?</a>
                    </div>
                    <div>
                        <button type="submit" className="flex justify-center w-full px-3 py-3 text-sm font-semibold leading-6 text-white transition duration-300 ease-in-out bg-gray-800 border-2 rounded-md shadow-sm hover:bg-gray-700 focus:border-black ">Sign in</button>
                    </div>
                    <div className="flex items-center pt-5">
                        <div className="w-[30%] border-b-2 border-gray-300"></div>
                        <div className="mx-4 text-center">Or continue with</div>
                        <div className="w-[30%] border-b-2 border-gray-300"></div>
                    </div>
                    <div className=''>
                        <div>
                            <button type="submit" className="flex justify-center w-full py-3 text-sm font-semibold leading-6 text-white transition duration-300 ease-in-out bg-gray-600 border-2 rounded-md shadow-sm hover:bg-gray-500 focus:border-black"><img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" className='w-6 h-6 mr-1'/>Sign in with Google</button>
                        </div>
                        
                    </div>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login