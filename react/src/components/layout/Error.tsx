import React, { useState, useEffect } from 'react';

const ErrorComp: React.FC = () => {
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowError(true);
        }, 500); // 2000 ms = 2 segundos de retraso

        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, []);

    if (!showError) {
        return null; // Mientras `showError` sea false, no se muestra nada
    }

    return (
        <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#e4e4d9' }}>
            <div className="bg-white p-20 rounded-lg shadow-2xl max-w-3xl text-center">
                <h1 className="text-7xl font-extrabold text-gray-800">Error 404</h1>
                <p className="text-xl text-gray-600 mt-8">La página que estás buscando no existe.</p>
            </div>
        </div>
    );
};

export default ErrorComp;
