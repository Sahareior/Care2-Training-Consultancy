import React from 'react';

const Terms = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Terms of Service
                </h1>
                <p className="text-gray-600 mb-6">
                    Last updated: January 9, 2025
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        1. Introduction
                    </h2>
                    <p className="text-gray-600">
                        Welcome to our website! By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        2. Use of Services
                    </h2>
                    <p className="text-gray-600">
                        You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        3. Intellectual Property
                    </h2>
                    <p className="text-gray-600">
                        All content on this website, including text, graphics, logos, and images, is the property of our company or its content suppliers and is protected by copyright laws.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        4. Limitation of Liability
                    </h2>
                    <p className="text-gray-600">
                        We are not liable for any damages arising from your use of our services. This includes, but is not limited to, direct, indirect, or consequential damages.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        5. Changes to Terms
                    </h2>
                    <p className="text-gray-600">
                        We reserve the right to update these terms at any time. Changes will be effective immediately upon posting on this page. Please review this page regularly.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        6. Contact Us
                    </h2>
                    <p className="text-gray-600">
                        If you have any questions or concerns about these terms, please contact us at{' '}
                        <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
                            support@example.com
                        </a>.
                    </p>
                </section>

                <footer className="text-center text-gray-500 mt-10">
                    © 2025 Your Company Name. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Terms;
