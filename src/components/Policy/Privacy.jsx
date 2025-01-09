import React from 'react';

const Privacy = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Privacy Policy
                </h1>
                <p className="text-gray-600 mb-6">
                    Effective Date: January 9, 2025
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        1. Introduction
                    </h2>
                    <p className="text-gray-600">
                        Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our services or visit our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        2. Information We Collect
                    </h2>
                    <p className="text-gray-600">
                        We may collect personal information such as your name, email address, and phone number when you interact with our website. Additionally, we may collect non-personal data such as your IP address, browser type, and usage patterns.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        3. How We Use Your Information
                    </h2>
                    <p className="text-gray-600">
                        We use your information to provide and improve our services, communicate with you, and ensure a secure experience. Your information may also be used for marketing purposes, with your consent.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        4. Sharing Your Information
                    </h2>
                    <p className="text-gray-600">
                        We do not sell or share your personal information with third parties, except when required by law or to provide our services (e.g., with payment processors).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        5. Data Security
                    </h2>
                    <p className="text-gray-600">
                        We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, or destruction.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        6. Your Rights
                    </h2>
                    <p className="text-gray-600">
                        You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at{' '}
                        <a href="mailto:privacy@example.com" className="text-blue-500 hover:underline">
                            privacy@example.com
                        </a>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        7. Changes to This Policy
                    </h2>
                    <p className="text-gray-600">
                        We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        8. Contact Us
                    </h2>
                    <p className="text-gray-600">
                        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:privacy@example.com" className="text-blue-500 hover:underline">
                            privacy@example.com
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

export default Privacy;
