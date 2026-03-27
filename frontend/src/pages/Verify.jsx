import React from 'react'

export const Verify = () => {
    return (
        <div className='relative w-full h-[760px] overflow-hidden '>
            <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                    <h2 className='ttext-2xl font-semibold text-green-500 mb-4'>Check your Email</h2>
                    <div className="text-gray-400 text-sm">
                        We've sent you an email to verify your account, please check your inbox and click the verification link
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verify
