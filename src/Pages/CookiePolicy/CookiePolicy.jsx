import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-[1500px] mx-auto p-6 rounded-md my-10">
      <h1 className="text-5xl text-primary font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy explains how Food Saver uses cookies and similar tracking
        technologies on our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. What are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device that help websites remember
        your preferences and improve user experience.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
      <p>
        We use cookies to enhance site functionality, analyze site traffic, and provide
        personalized content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Types of Cookies We Use</h2>
      <ul className="list-disc ml-6">
        <li><strong>Essential Cookies:</strong> Required for basic site functions.</li>
        <li><strong>Performance Cookies:</strong> Help us understand site usage.</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences.</li>
        <li><strong>Targeting Cookies:</strong> Used for marketing and ads.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Managing Cookies</h2>
      <p>
        You can control or delete cookies via your browser settings. However, disabling
        some cookies may affect website functionality.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: June 30, 2025
      </p>
    </div>
  );
};

export default CookiePolicy;