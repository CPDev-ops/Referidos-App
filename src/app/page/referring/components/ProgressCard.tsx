import { FaChartBar } from "react-icons/fa";

const ProgressCard = () => {
    const value = "25.000"
    return (
        <div className="bg-white/5 p-4 rounded-lg space-y-2 border border-white/20 shadow-sm">
            {/* Título + ícono a la izquierda, Próximo premio a la derecha */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm ">
                    <FaChartBar className="text-white/70" />
                    <span>Tu Progreso hacia el Próximo Premio</span>
                </div>
                <p className="text-xs hidden sm:block text-green-400 ">Próximo: ${value}</p>
            </div>
            {/* Referencias completadas */}
            <p className="text-white/60 text-xs">Referencias Completadas: 4/6</p>
            {/* Barra de progreso con gradiente */}
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                    className="h-2 rounded-full"
                    style={{
                        width: "66%",
                        background: "linear-gradient(to right, #f97316, #dc2626)",
                    }}
                />
            </div>
            {/* Texto adicional */}
            <p className="text-xs text-white/60">
                Solo necesitás 2 referencias más para alcanzar <span className="text-green-500">${value}</span> en premios!
            </p>
        </div>
    );
};

export default ProgressCard;
