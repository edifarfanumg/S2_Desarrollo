import React, { useEffect, useState } from 'react';
import { getTipoCambio } from '../lib/api';

export default function TipoCambio() {
    const [tipoCambio, setTipoCambio] = useState(null);
    const [fechaActualizacion, setFechaActualizacion] = useState(null);

    useEffect(() => {
        async function fetchTipoCambio() {
            try {
                const data = await getTipoCambio();
                setTipoCambio(data.tipoCambio);
                setFechaActualizacion(data.fechaActualizacion);
            } catch (error) {
                console.error("Error fetching tipo de cambio:", error);
            }
        }

        fetchTipoCambio();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Tipo de Cambio a Quetzal</h1>
                {tipoCambio ? (
                    <>
                        <p className="text-4xl font-semibold text-gray-800 mb-2">Q {tipoCambio}</p>
                        <p className="text-sm text-gray-500">Última Actualización: {new Date(fechaActualizacion).toLocaleString()}</p>
                    </>
                ) : (
                    <p className="text-gray-500">Cargando tipo de cambio...</p>
                )}
            </div>
        </div>
    );
}
