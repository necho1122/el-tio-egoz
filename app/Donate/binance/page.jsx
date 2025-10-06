// /app/donate/binance/page.jsx
import React from 'react';

// Si estás usando Next.js 13/14 (App Router), el componente se exporta por defecto
const BinanceInstructionsPage = () => {

    // 💡 IMPORTANTE: Ajusta esta ruta si tu QR no está en /public/images/.
    // Si tu QR está en /public/images/binance-qr.png, la ruta es /images/binance-qr.png
    const binanceQrPath = '/images/binance-qr.png'; 

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-start p-4 pt-12">
            
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
                Donar con Binance Pay
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl">
                ¡Gracias por tu interés en apoyar al Tío Egoz con criptomonedas!
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mb-8">
                
                {/* INSTRUCCIONES */}
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Instrucciones:
                </h2>
                
                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                    <li>Abre la aplicación de <strong>Binance</strong> en tu móvil.</li>
                    <li>Ve a la sección <strong>Binance Pay</strong>.</li>
                    <li>Selecciona <strong>'Escanear'</strong> y apunta al código QR que se muestra a continuación 👇👇👇.</li>
                    <li>Ingresa la <strong>cantidad</strong> en <strong>USDT</strong> (Lo que salga de tu Culazon digo corazon).</li>
                    <li>Confirma la transacción.</li>
                </ol>

                {/* VISUALIZACIÓN DEL QR */}
                <div className="flex justify-center mt-8">
                    <img 
                        src={binanceQrPath} 
                        alt="Binance Pay QR Code for Donations" 
                        // Asegúrate de que esta clase de tamaño sea adecuada para tu diseño
                        className="border-4 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Botón de Regreso/Descarga (Opcional) */}
            <a 
                href="/Donate" // Vuelve a la página principal de donaciones
                className="mt-6 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
                ← Volver a Métodos de Donación
            </a>

        </div>
    );
};

export default BinanceInstructionsPage;