import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="bg-green-800">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">

                        </div>
                        <div className="pl-20 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                                <ul className="text-gray-500 dark:text-gray-100 font-medium">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Home</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/about" className="hover:underline">About</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/contact" className="hover:underline">Contact</a>
                                    </li>

                                    <li className="mb-4">
                                        <a href="/services" className="hover:underline">Services</a>
                                    </li>


                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h2>
                                <ul className="text-gray-500 dark:text-gray-200 font-medium">
                                    <li className="mb-4">
                                        Malmatta no 122, P-64, Ward no. 15, Behind Bus stand Taluka Umri District Nanded, Maharashtra - 431807
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="flex flex-row justify-center gap-4">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.
                        </span>
                        {/* <div className="sm:justify-center">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer