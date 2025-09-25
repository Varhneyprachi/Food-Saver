import React from "react";

const About = () => {
  return (
    <div className="max-w-[1500px] mx-auto p-8 white rounded-md my-12">
      <h1 className="text-5xl font-bold mb-8 text-center text-primary">
        About Food Saver
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Food Saver is a smart and intuitive web application designed to help
        individuals and families manage their food inventory efficiently,
        minimizing waste and saving money. Our platform empowers users to keep
        track of their food items, monitor expiry dates, and receive timely alerts
        to use food before it goes bad.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        With Food Saver you can easily add, update, and organize your food items,
        categorize them by type, and even add personal notes. Our goal is to reduce
        unnecessary food wastage by promoting awareness and better management
        practices.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-primary">
        Our Mission
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        To create a user-friendly platform that helps people save food, time, and
        money while contributing to a sustainable environment by reducing food
        waste worldwide.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-primary">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mb-6">
        <li>Track food items with detailed information and images.</li>
        <li>Receive alerts for nearly expired and expired food items.</li>
        <li>Add personal notes to each food item for reminders or recipes.</li>
        <li>Secure user authentication for personalized food management.</li>
        <li>Search and filter food items by categories and keywords.</li>
        <li>Responsive design for seamless experience on any device.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-primary">
        Why Choose Food Saver?
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Food Saver stands out by focusing on simplicity and effectiveness. Our
        clean design and intuitive navigation make managing your fridge easier than
        ever. Whether you’re a busy professional or a home cook, Food Saver helps
        you stay organized and reduce food waste effortlessly.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-primary">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Have questions or feedback? Feel free to reach out!  
        <br />
        Email: <a href="mailto:system@FoodSaver.com" className="text-blue-600 underline">support@foodpulse.com</a>  
        <br />
        Phone: +345 456 567890  
        <br />
        Address: Greater Noida, India
      </p>
    </div>
  );
};

export default About;
