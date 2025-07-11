import { FaCheckCircle } from "react-icons/fa"
import { GrGift } from "react-icons/gr"

const StatsRewards = () => (
    <div className="grid sm:grid-cols-2 gap-4 my-4">
        <div className="bg-white/5 p-4 rounded-lg flex justify-between items-center border border-white/20 shadow-sm ">
            <div>
                <p className="text-xs text-white/60">Total Recompensas</p>
                <h3 className="text-lg text-green-400">3</h3>
            </div>
            <div className="bg-green-400/20 p-2 rounded-full text-black">
                <FaCheckCircle size={16} className="text-green-500" />
            </div>
        </div>

        <div className="bg-white/5 p-4 rounded-lg flex justify-between items-center border border-white/20 shadow-sm ">
            <div>
                <p className="text-xs text-white/60">Premios Pendientes</p>
                <h3 className="text-lg text-orange-500">1</h3>
            </div>
            <div className="bg-orange-400/20 p-2 rounded-full text-black">
                <GrGift className="text-orange-500" size={16} />
            </div>
        </div>
    </div>
)

export default StatsRewards
