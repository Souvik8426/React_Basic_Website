import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="ml-3 font-bold text-xl">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const FeatureSection = ({ features }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;