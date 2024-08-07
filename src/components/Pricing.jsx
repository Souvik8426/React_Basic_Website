import React from 'react';

const PricingCard = ({
    title,
    description,
    price,
    period,
    buttonText,
    features,
}) => (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow xl:p-8">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-gray-500 sm:text-lg">{description}</p>
        <div className="flex items-baseline justify-center my-8">
            <span className="mr-2 text-5xl font-extrabold">{price}</span>
            <span className="text-gray-500">{period}</span>
        </div>
        <a href="#" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{buttonText}</a><br />
        <ul role="list" className="mb-8 space-y-4 text-left">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const PricingSection = ({
    sectionTitle,
    sectionDescription,
    pricingCards,
}) => (
    <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">{sectionTitle}</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl">{sectionDescription}</p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {pricingCards.map((card, index) => (
                    <PricingCard key={index} {...card} />
                ))}
            </div>
        </div>
    </section>
);

export default PricingSection;
