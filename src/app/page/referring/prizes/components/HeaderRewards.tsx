import { GrGift } from "react-icons/gr"

const HeaderRewards = () => (
    <div className="flex items-center gap-2">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-full text-black">
            <GrGift size={20} />
        </div>
        <div>
            <h1 className="text-lg">Mis Premios</h1>
            <p className="text-xs text-white/70">Estado de tus recompensas por referidos</p>
        </div>
    </div>
)

export default HeaderRewards
