import React from "react";

const ForgotPassword = () => {
    return (
        <div>
            <main id="content" role="main" className="flex flex-col h-full max-w-md px-3 py-2 mx-auto">
                <div className="bg-white border-2 border-indigo-300 shadow-lg mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                </div>

                <div className="mt-5">
                    <form>
                        <div className="grid gap-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 ml-1 text-sm font-bold dark:text-white">Email address</label>
                            <div className="relative">
                            <input type="email" id="email" name="email" className="block w-full px-3 py-3 text-sm border-2 border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required aria-describedby="email-error" placeholder="Enter email "/>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">Reset password</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
} 

export default ForgotPassword