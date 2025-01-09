import { useState } from 'react';
import './Questions.css'; // Import the custom CSS file

const Questions = () => {
    const [questions, setQuestions] = useState([
        {
            question: "What services does Care2 Training Consultancy offer?",
            answer: "We provide assistance with Student Visas, Work Abroad Opportunities, and Consultancy for Living Abroad. Our experts guide you through every step of the process to ensure success."
          },
          {
            question: "How can Care2 help with student visa applications?",
            answer: "We assist you in preparing the necessary documents, filling out applications, and providing expert advice on selecting the right university and country for your studies."
          },
          {
            question: "Which countries do you support for work abroad opportunities?",
            answer: "We support various countries including Canada, Australia, the USA, the UK, and many European and Asian countries, depending on your qualifications and preferences."
          },
          {
            question: "Can you help with permanent residency or living abroad consultancy?",
            answer: "Yes, we provide consultancy for individuals looking to settle abroad permanently. We guide you on the best immigration pathways, documentation, and lifestyle adjustments."
          },
          {
            question: "What is the process to start with Care2 Training Consultancy?",
            answer: "Simply contact us via email, phone, or visit our office. We’ll schedule a consultation to understand your goals and create a tailored plan for your needs."
          },
          {
            question: "What documents are required for a student visa application?",
            answer: "The required documents usually include proof of admission, a valid passport, financial statements, and language proficiency test scores. We’ll provide you with a complete checklist."
          },
          {
            question: "How long does it take to process a work visa application?",
            answer: "The processing time varies depending on the country and visa type. Typically, it can take anywhere from 2 to 12 weeks. We help streamline the process for faster results."
          },
          {
            question: "Do you offer English language training for visa requirements?",
            answer: "Yes, we provide training for tests like IELTS, TOEFL, and PTE, which are often required for student and work visa applications."
          },
          {
            question: "Is there a consultation fee to get started?",
            answer: "Yes, we charge a nominal fee for an initial consultation. This fee is adjusted against the cost of our services once you decide to proceed with us."
          },
          {
            question: "Can I apply for a student and work visa together?",
            answer: "While it depends on the country’s immigration policies, we can guide you on combining education and work pathways to maximize your chances of success."
          }
    ]);

    const toggleQuestion = index => {
        setQuestions(
            questions.map((q, i) =>
                i === index ? { ...q, open: !q.open } : { ...q, open: false }
            )
        );
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen py-12">
            <div className=" mx-auto px-4">
                <h2 className="text-3xl last: font-bold mb-8">Questions and Answers</h2>
          <div className=' grid-cols-2 gap-x-7 justify-between'>
          {questions.map((qa, index) => (
                    <div key={index} className="mb-6">
                        <div
                            className="p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer transition duration-300 hover:bg-blue-700"
                            onClick={() => toggleQuestion(index)}
                        >
                            <h3 className="text-lg font-semibold text-blue-300">Q: {qa.question}</h3>
                        </div>
                        <div className={`overflow-hidden transition-max-height ease-out duration-500 ${qa.open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                            <div className="p-4 bg-gray-700 border-l-4 border-blue-400 rounded-lg">
                                <p className="text-gray-200 text-lg">A: {qa.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
          </div>
            </div>
        </div>
    );
};

export default Questions;
