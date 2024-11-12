import React from "react"

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient-to-r from-black via-black to-black min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-gradient-to-r from-red-900 to-red-800 shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between h-16 px-4 md:px-6">
                        {/* Logo */}
                        <a 
                            href="/" 
                            className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300 flex items-center space-x-2"
                        >
                            <span className="bg-red-700 px-3 py-1 rounded-lg">My</span>
                            <span>Website</span>
                        </a>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-1">
                            {[
                                { href: '/profile', label: 'Profile' },
                                { href: '/about', label: 'About' },
                                { href: '/contact', label: 'Contact' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/news', label: 'News' },
                                { href: '/date-selector', label: 'Date-selector' },
                                { href: '/login', label: 'Login' }
                            ].map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 hover:text-white transition-all duration-300"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <button className="md:hidden rounded-md p-2 text-white hover:bg-red-700 transition-colors duration-300">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu (hidden by default) */}
                <div className="hidden md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {[
                            { href: '/profile', label: 'Profile' },
                            { href: '/about', label: 'About' },
                            { href: '/contact', label: 'Contact' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/news', label: 'News' },
                            { href: '/date-selector', label: 'Date-selector' },
                            { href: '/login', label: 'Login' }
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-white hover:bg-red-700 transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white">
                <div className="max-w-7xl mx-auto py-6 px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm">
                            © 2024 MyWebsite. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-sm hover:text-gray-300 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-sm hover:text-gray-300 transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

/** dark: '#1F1F1F',           // สีดำ
        darkGray: '#2D2D2D',       // สีเทาเข้ม
        darkBlue: '#3A3A55',       // สีน้ำเงินเข้ม
        emeraldDark: '#2C6E49',    // สีเขียวมรกตเข้ม */ 
