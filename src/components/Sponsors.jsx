// Sponsors.jsx
import React from 'react';

// Define the Sponsors component
const Sponsors = ({ svgs }) => {
    return (
        <section className="bg-white white:bg-gray-900">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    {svgs.map((Svg, index) => (
                        <div key={index}>{Svg}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
