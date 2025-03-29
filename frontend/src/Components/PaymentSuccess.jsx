import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Success icon
import { useNavigate } from 'react-router';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Successful!</h2>
                <p className="text-gray-600 mb-6">Your payment has been processed successfully. Thank you for your purchase!</p>


                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 focus:outline-none transition duration-300"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
