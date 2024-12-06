import React from "react";

import ClientImg1 from "../assets/img/clients/client1.png"
import ClientImg2 from "../assets/img/clients/client2.png"
import ClientImg3 from "../assets/img/clients/client3.png"
import ClientImg4 from "../assets/img/clients/client4.png"
import ClientImg5 from "../assets/img/clients/client5.png"
import ClientImg6 from "../assets/img/clients/client6.png"

const ClientsPage = () => {
    const clients = [
        { name: "Client 1", logo: ClientImg1 },
        { name: "Client 2", logo: ClientImg2 },
        { name: "Client 3", logo: ClientImg3 },
        { name: "Client 4", logo: ClientImg4 },
        { name: "Client 5", logo: ClientImg5 },
        { name: "Client 6", logo: ClientImg6 },
    ];

    const testimonials = [
        {
            name: "Kapil",
            role: "CEO, TechCorp",
            message:
                "Working with this team was an absolute pleasure. Their expertise helped us achieve our goals seamlessly.",
            image: ClientImg5,
        },
        {
            name: "Amar",
            role: "Manager, Innovate Inc.",
            message:
                "Their services exceeded our expectations. I highly recommend them for any business needs!",
            image: ClientImg6,
        },
    ];

    return (
        <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">
            {/* Hero Section */}
            <div className="hero-section rounded-xl  text-white py-20 px-5 shadow-[0px_2px_14px_rgba(60,124,221,0.38)]    bg-[#315DB1]">
                <div className="max-w-[1140px] mx-auto text-center">
                    <h1 className="text-[36px] sm:text-[50px] font-bold mb-4">
                        Trusted by Leading Companies
                    </h1>
                    <p className="text-lg sm:text-xl max-w-[700px] mx-auto">
                        We have partnered with organizations across various industries,
                        helping them achieve success through our expertise and innovative
                        solutions.
                    </p>
                </div>
            </div>

            {/* Client Showcase */}
            <div className="client-showcase py-16 px-5">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-[30px] sm:text-[36px] text-center font-bold mb-10">
                        Our <span className="text-blue-500">Clients</span>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="client-card flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-24 h-24 object-contain mb-4"
                                />
                                <p className="text-center text-lg font-semibold">{client.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials bg-gray-100 py-16 px-5">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className="text-[30px] sm:text-[36px] text-center font-bold mb-10">
                        What Our Clients <span className="text-blue-500">Say</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="testimonial-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <p className="text-lg font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;
