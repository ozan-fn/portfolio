import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome({ title }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <Head>
                <title>{title}</title>
            </Head>

            <h1 className="text-5xl font-extrabold text-blue-600 mb-4">{title}</h1>

            <p className="text-gray-700 text-lg mb-6 text-center">
                This is your first feature-based page in Laravel + Inertia + React + Tailwind.
            </p>

            <div className="flex gap-4">
                <a
                    href="#"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Get Started
                </a>
                <a
                    href="#"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}
