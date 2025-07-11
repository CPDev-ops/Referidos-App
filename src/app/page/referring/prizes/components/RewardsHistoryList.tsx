import { FaCheckCircle, FaClock } from "react-icons/fa"
import { LuTrophy } from "react-icons/lu"

const rewards = [
    {
        title: "Referidos x2",
        desc: "Premio por completar 2 referidos",
        earned: "27/01/2024",
        redeemed: "30/01/2024",
        status: "Canjeado"
    },
    {
        title: "Referidos x4",
        desc: "Premio por completar 4 referidos",
        earned: "30/01/2024",
        redeemed: "02/02/2024",
        status: "Canjeado"
    },
    {
        title: "Referidos x6",
        desc: "Premio por completar 6 referidos",
        earned: "04/02/2024",
        redeemed: "06/02/2024",
        status: "Canjeado"
    },
    {
        title: "Referidos x10",
        desc: "Premio por completar 10 referidos",
        earned: "07/02/2024",
        status: "Pendiente"
    }
]

const RewardsHistoryList = () => (
    <div className="bg-white/5 p-4 border border-white/20 shadow-md rounded-lg space-y-4 text-xs">
        <h4 className="text-white  flex items-center gap-2">
            <LuTrophy size={20} className="text-orange-500" /> Historial de Premios
        </h4>
        {rewards.map((reward, i) => (
            <div key={i} className="bg-black/20 border border-white/20 shadow-sm p-3 rounded-lg  flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-400/20 p-2 rounded-full text-black">
                        <LuTrophy size={16} className="text-orange-500" />
                    </div>
                    <div className="flex flex-col  gap-1">
                        <h5 className="">{reward.title}</h5>
                        <p className="text-white/70 text-xs">{reward.desc}</p>
                        <p className="text-white/40 text-xs">Ganado: {reward.earned}</p>
                        {reward.redeemed && (
                            <p className="text-white/40 text-xs">Canjeado: {reward.redeemed}</p>
                        )}
                    </div>
                </div>
                <span
                    className={`text-xs px-4 py-1 rounded-full  flex items-center gap-1 ${reward.status === "Canjeado"
                        ? "bg-green-600 text-white"
                        : "bg-orange-600 text-white"
                        }`}
                >
                    {reward.status === "Canjeado" ? <FaCheckCircle /> : <FaClock />}
                    {reward.status}
                </span>
            </div>
        ))}
    </div>
)

export default RewardsHistoryList
