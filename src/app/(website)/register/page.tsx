'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false); // สถานะสำหรับแสดง/ซ่อนรหัสผ่าน
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // สถานะสำหรับแสดง/ซ่อนรหัสยืนยัน
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // ตรวจสอบรหัสผ่าน
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        // ดำเนินการลงทะเบียนที่นี่ (เรียก API หรืออื่นๆ)
        // สำหรับตัวอย่างนี้เราจะตั้งค่าข้อความสำเร็จ
        setSuccessMessage("Registration successful!");
        setFormData({ username: '', password: '', confirmPassword: '' });
        setErrorMessage('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
            <form onSubmit={handleSubmit} className="grid gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-md ">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create Your Account</h2>

                <input
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />

                <div className="relative">
                    <input
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                    >
                        {showPassword ? '👁️' : '🙈'}
                    </span>
                </div>

                <div className="relative">
                    <input
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                    >
                        {showConfirmPassword ? '👁️' : '🙈'}
                    </span>
                </div>

                {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
