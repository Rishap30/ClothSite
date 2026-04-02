import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const VerifyEmail = () => {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const [status, setStatus] = useState("Verifying...")
    const navigate = useNavigate()

    const verifyEmail = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8000/api/v1/user/verify?token=${token}`
            )
            if (res.data.success) {
                setStatus("✅ Email verified Successfully")

                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            }
        } catch (error) {
            console.log("VERIFY ERROR:", error.response?.data || error.message);
            setStatus(error.response?.data?.message || "❌ Verification failed")
        }
    }

    useEffect(() => {
        if (token) {
            verifyEmail()
        } else {
            setStatus("❌ Invalid verification link")
        }
    }, [token])
    return (
        <div className='relative w-full h-[780px] bg-pink-100 overflow-hidden '>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center w-[90] max-w-md">
                    <h2 className='text-xl font-semibold text-gray-800' >{status}</h2>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail