import { FaCheckCircle, FaChartLine, FaGift } from "react-icons/fa";

const SummaryStats = () => (
    <div className="grid sm:grid-cols-3 gap-4">
        {/* Referidos Completados */}
        <div className="bg-white/5 p-4 rounded flex justify-between items-center">
            <div>
                <p className="text-white/60 text-xs">Referidos Completados</p>
                <h3 className="text-lg text-green-400">4</h3>
            </div>
            <div className="bg-green-500/20 rounded-full p-2">
                <FaCheckCircle size={20} className="text-green-400" />
            </div>
        </div>

        {/* Progreso Actual */}
        <div className="bg-white/5 p-4 rounded flex justify-between items-center">
            <div>
                <p className="text-white/60 text-xs">Progreso Actual</p>
                <h3 className="text-lg text-violet-400">66%</h3>
            </div>
            <div className="bg-violet-500/20 rounded-full p-2">
                <FaChartLine size={20} className="text-violet-400" />
            </div>
        </div>

        {/* Próximo Premio */}
        <div className="bg-white/5 p-4 rounded flex justify-between items-center">
            <div>
                <p className="text-white/60 text-xs">Próximo Premio</p>
                <h3 className="text-lg text-orange-400">$26.000</h3>
            </div>
            <div className="bg-orange-500/20 rounded-full p-2">
                <FaGift size={20} className="text-orange-400" />
            </div>
        </div>
    </div>
);

export default SummaryStats;
