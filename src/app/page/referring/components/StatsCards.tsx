import { FaCheckCircle, FaUserFriends } from "react-icons/fa";

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg text-center space-y-2 border border-white/20 shadow-sm">
                <p className="text-sm text-white/60 flex items-center justify-center gap-2">
                    <FaUserFriends className="text-orange-500" />
                    Amigos de Registro
                </p>
                <h2 className="text-3xl  text-white">12</h2>
            </div>

            <div className="bg-white/5 p-4 rounded-lg text-center space-y-2 border border-white/20 shadow-sm">
                <p className="text-sm text-white/60 flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    Referencias Completadas
                </p>
                <h2 className="text-3xl  text-white">4</h2>
            </div>
        </div>
    );
};

export default StatsCards;
