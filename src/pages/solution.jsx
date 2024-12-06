// src/components/SolutionPage.js
import React from 'react';
import { solutionsData } from '../components/common/helper';
import { Link } from 'react-router-dom';



const SolutionPage = () => {
    return (
        <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">
            {/* <h1 className="text-3xl font-semibold text-center mb-12">Our Business Solutions</h1> */}
            <div className="hero-section rounded-xl mb-12  text-white py-10 px-5 shadow-[0px_2px_14px_rgba(60,124,221,0.38)]    bg-[#315DB1]">
                <div className="max-w-[1140px] mx-auto text-center">
                    <h1 className="text-3xl  font-bold mb-4">
                        Our Business Solutions
                    </h1>

                </div>
            </div>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutionsData.map((solution) => (
                    <Link to={solution.slug} key={solution.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">{solution.title}</h2>
                            <p className="text-gray-600 mt-2">{solution.description.slice(0, 300)}...</p>




                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SolutionPage;
