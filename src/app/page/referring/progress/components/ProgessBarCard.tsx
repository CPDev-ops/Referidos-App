import { FaBullseye } from "react-icons/fa";

const ProgressBarCard = () => (
    <div className="bg-white/5 p-4 rounded-lg space-y-3">
        {/* Título con icono */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="bg-yellow-500 text-black p-2 rounded-full">
                    <FaBullseye size={16} />
                </div>
                <h4 className=" text-sm">Progreso hacia $26,000</h4>
            </div>
            <span className="text-xs text-white/60 hidden sm:block">Objetivo Actual</span>
        </div>

        {/* Referencias completadas */}
        <p className="text-white/70 text-xs">Referencias Completadas: <span className=" text-white">4/6</span></p>

        {/* Barra de progreso */}
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 w-2/3 rounded-full" />
        </div>

        {/* Mensaje final */}
        <p className="text-xs text-white/60">
            ¡Solo necesitás <span className="text-green-400 ">2 referencias más</span> para alcanzar <span className="text-orange-400 ">$26.000</span> en premios!
        </p>
    </div>
);

export default ProgressBarCard;
