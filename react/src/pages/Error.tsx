import React from 'react';

const Error: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#e4e4d9' }}>
            <div className="bg-white p-20 rounded-lg shadow-2xl max-w-3xl text-center">
                <h1 className="text-7xl font-extrabold text-gray-800">Error 404</h1>
                <p className="text-xl text-gray-600 mt-8">La página que estás buscando no existe.</p>
            </div>
        </div>
    );
};

export default Error;
