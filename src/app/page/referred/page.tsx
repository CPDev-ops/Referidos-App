import { FaGift, FaUserCheck } from "react-icons/fa";
import Button from "../../shared/UI/Button";
import { useState } from "react";
import NewClientSuccess from "./components/NewClientSuccess";
import ExistingClientNotice from "./components/ExistingClientNotice";

const ReferralWelcome = () => {
    const [view, setView] = useState<"initial" | "new" | "existing">('initial')
    const handleBack = () => setView("initial")

    if (view === "new") return (
        <div className="min-h-screen bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <NewClientSuccess back={() => handleBack()} name="Juan Pérez" email="juan@example.com" />
            {/*     <div className="text-center mt-4">
                    <Button text="Volver" className="bg-white/10 text-white" onClick={handleBack} />
                </div> */}
            </div>
        </div>
    );

    if (view === "existing") return (
        <div className="min-h-screen bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <ExistingClientNotice back={()=>handleBack()} name="Juan Pérez" email="juan@example.com" />
                {/* <div className="text-center mt-4">
                    <Button text="Volver" className="bg-white/10 text-white" onClick={handleBack} />
                </div> */}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-500 to-violet-700 px-4">
            <div className="max-w-5xl w-full text-center space-y-6">
                {/* Icono y título */}
                <div className="flex flex-wrap items-center justify-center gap-4 space-y-1">
                    <div className="bg-orange-500 p-3 rounded-full text-white text-xl">
                        <FaGift />
                    </div>
                    <h1 className="text-2xl text-white">¡Bienvenido!</h1>
                </div>
                <p className="text-xs text-gray-200">
                    Juan Pérez te invitó a ganar increíbles premios
                </p>

                {/* Formulario de verificación */}
                <div className="text-left space-y-4 bg-white rounded-lg shadow-lg p-6">
                    <div className="space-y-1">
                        <h2 className="flex items-center gap-2 text-sm text-violet-700">
                            <FaUserCheck />
                            Verificación de Cliente
                        </h2>
                        <p className="text-xs text-gray-500">
                            Necesitamos verificar si eres un cliente nuevo para continuar.
                        </p>
                    </div>

                    <form className="space-y-3">
                        <div className="space-y-1">
                            <label className="block text-xs text-gray-600">DNI*</label>
                            <input
                                type="text"
                                placeholder="Ej: 12345678"
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-xs text-gray-600">Email*</label>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                        <Button
                            className="w-full bg-violet-500 hover:bg-violet-700 text-white text-xs py-2 rounded-lg"
                            iconLeft={<FaGift />}
                            text="Verificar"
                        />
                    </form>

                    {/* Botones para simular verificación */}
                    <div className="flex gap-2 pt-4">
                        <Button text="Simular Cliente Nuevo" onClick={() => setView("new")} className="w-full bg-green-500 text-white" />
                        <Button text="Simular Ya es Cliente" onClick={() => setView("existing")} className="w-full bg-orange-500 text-white" />
                    </div>
                </div>

                {/* Pie de página */}
                <p className="text-xs text-gray-300">
                    ¿Tienes dudas? Contáctanos o visita nuestro local.
                </p>
            </div>
        </div>
    );
};

export default ReferralWelcome;
