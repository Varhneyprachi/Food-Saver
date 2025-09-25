import React, { useState } from "react";

const faqs = [
  {
    question: "How do I add a new food item?",
    answer:
      "After logging in, navigate to the 'Add Food' page, fill in the required details, and submit the form. Your food item will be saved to your inventory.",
  },
  {
    question: "Can I edit or delete food items?",
    answer:
      "Yes, go to 'My Items' page where you can update or delete your added food items anytime.",
  },
  {
    question: "How does the expiry alert system work?",
    answer:
      "Food items that will expire within 5 days are shown in the 'Nearly Expiry' section on the Home page to help you prioritize usage.",
  },
  {
    question: "Do I need to register to use the app?",
    answer:
      "You can browse some pages like Home and Fridge without an account, but to add or manage food items, registration and login are required.",
  },
  {
    question: "Is my data safe on Food Saver?",
    answer:
      "Yes, we use secure authentication and store your data safely with protected backend APIs. Your password and sensitive info are never exposed.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "Currently, password recovery is not implemented. Please be careful while setting your password during registration.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1500px] mx-auto px-6 bg-white rounded-md shadow-md my-20  pb-20">
      <h1 className="text-5xl text-primary font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-xl font-semibold">{faq.question}</span>
              <span className="text-2xl font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div
                id={`faq-${index}`}
                className="px-6 pb-4 text-gray-700 text-lg"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
