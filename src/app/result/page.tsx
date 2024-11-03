'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Result() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showLoadingBar, setShowLoadingBar] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const day = query.get('day');

        if (!day) {
            router.push('/date-selector');
        } else {
            // Show loading state initially
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setMessage(day === 'friday' ? 'Today is Friday' : 'Today is not Friday');

                // Show the loading bar
                setShowLoadingBar(true);

                // Delay before navigating back to the date selector
                setTimeout(() => {
                    setShowLoadingBar(false);
                    router.push('/date-selector');
                }, 2000); // 2000 milliseconds = 2 seconds
            }, 1000); // 1000 milliseconds = 1 second
        }
    }, [router]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
            {!loading ? (
                <div>
                    <h1 className="text-2xl font-bold text-center">{message}</h1>
                    {showLoadingBar && (
                        <div className="w-full h-2 bg-gray-300 rounded-lg mt-4 shadow-md overflow-hidden">
                            <div className="bg-blue-600 h-full animate-loadingBar"></div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="loader"></div> // Optional: You can add a loader here if needed
            )}
        </div>
    );
}
