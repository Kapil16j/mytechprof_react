// src/components/SolutionDetailPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { solutionsData } from '../components/common/helper';


const SolutionDetailPage = () => {
    const { category } = useParams();

    // Find the solution based on the category slug
    const solution = solutionsData.find((sol) => sol.slug === category);

    if (!solution) {
        return <div className="text-center">Solution not found</div>;
    }

    return (
        <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">

            <div className="hero-section rounded-xl mb-12  text-white py-10 px-5 shadow-[0px_2px_14px_rgba(60,124,221,0.38)]    bg-[#315DB1]">
                <div className="max-w-[1140px] mx-auto text-center">
                    <h1 className="text-3xl  font-bold mb-4">
                        {solution.title}
                    </h1>

                </div>
            </div>


            <div className="flex flex-col md:flex-row  gap-8">
                <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                />

                <div className="md:w-1/2">
                    <h1 className="text-3xl font-semibold text-gray-800">{solution.title}</h1>
                    <p className="text-gray-600 mt-4">{solution.description}</p>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
                        <ul className="list-disc pl-6 mt-2 text-gray-600">
                            {solution.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Other Details</h3>
                        <ul className="mt-2 text-gray-600">
                            <li><strong>Industry:</strong> {solution.otherDetails.industry}</li>
                            <li><strong>Target Audience:</strong> {solution.otherDetails.targetAudience}</li>
                            <li><strong>Related Solutions:</strong> {solution.otherDetails.relatedSolutions.join(', ')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to="/solutions">
                    <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
                        All Solutions
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SolutionDetailPage;
