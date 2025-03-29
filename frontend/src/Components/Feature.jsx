import React from 'react'
export const Feature = ({ h4, feature, p }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center">
            <div className="p-2 mb-4">
                {feature}
            </div>
            <h4 className="text-xl font-semibold text-gray-900">{h4}</h4>
            <p className="mt-4 text-gray-700 text-center">{p}</p>
        </div>
    )
}
