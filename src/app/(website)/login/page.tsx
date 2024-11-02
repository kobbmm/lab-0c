'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/action/login';

export default function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // สถานะสำหรับแสดง/ซ่อนรหัสผ่าน
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrorMessage('');

        const data = new FormData();
        data.append('username', formData.username);
        data.append('password', formData.password);

        try {
            const result = await login(null, data);
            if (result.success) {
                router.push('/'); // Redirect to home if login is successful
            } else if (result.message) {
                setErrorMessage(result.message); // Show error message if login fails
            }
        } catch (error) {
            setErrorMessage("An error occurred during login");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <form onSubmit={handleSubmit} className="grid gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login to Your Account</h2>

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

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white rounded-lg py-2 font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
                >
                    Login
                </button>

                {/* เพิ่มปุ่มสำหรับฟังก์ชันเพิ่มเติม */}
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        className="text-indigo-600 hover:underline"
                        onClick={() => router.push('/forgot-password')}
                    >
                        Forgot Password?
                    </button>
                    <button
                        type="button"
                        className="text-indigo-600 hover:underline"
                        onClick={() => router.push('/register')}
                    >
                        Register
                    </button>
                </div>

                {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
            </form>
        </div>
    );
}
