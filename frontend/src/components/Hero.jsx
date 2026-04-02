import React from 'react'
import { Button } from './ui/button';

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-xl md:text-6xl font-bold mb-4">NEW SEASON ARRIVALS</h1>
                        <p className='text-l pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className='bg-white text-blue-600 hover:bg-gray-100'>Shop Now</Button>
                            <Button varient='outline' className='border-white text-white hover:bg-white hover:text-blue-600 bg-transparent'>View Deals</Button>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <img src="" alt="" className='rounded-lg shadow-2xl' /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
