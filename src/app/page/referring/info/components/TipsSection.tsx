import { FaLightbulb } from "react-icons/fa";

const TipsSection = () => {
    return (
        <div className="bg-white/5 rounded-lg p-4 space-y-4 border border-white/20 shadow-sm">
            {/* Título principal con ícono */}
            <div className="flex items-center gap-2 text-yellow-400">
                <FaLightbulb />
                <h4 className=" text-sm">Consejos para Maximizar Ganancias</h4>
            </div>

            {/* Contenido dividido en dos columnas */}
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-white/80">
                {/* Estrategias */}
                <div>
                    <h5 className=" mb-2 text-white text-sm">Estrategias de Invitación:</h5>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Comparte en grupos de WhatsApp</li>
                        <li>Usa redes sociales activamente</li>
                        <li>Invita a familiares y amigos cercanos</li>
                    </ul>
                </div>

                {/* Herramientas */}
                <div>
                    <h5 className=" mb-2 text-white text-sm">Herramientas Disponibles:</h5>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Enlaces de referencia personalizados</li>
                        <li>Plantillas de mensajes predefinidas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TipsSection;
