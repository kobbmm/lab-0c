'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DateSelector() {
    const [selectedDate, setSelectedDate] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('date', selectedDate);

        // ส่งข้อมูลไปยัง server action
        const response = await fetch('/api/check-date', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (result.isFriday) {
            router.push('/result?day=friday');
        } else {
            router.push('/result?day=not-friday');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-black to-black">
            <form onSubmit={handleSubmit} className="grid gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center">Select a Date</h2>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
