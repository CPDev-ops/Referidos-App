import { FaUser, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaGift, FaUsers } from "react-icons/fa";

const data = [
    { name: "Mario González", email: "mario.gonzal@gmail.com", date: "30/01/2024", status: "Completado", prize: "$1.500" },
    { name: "Carlos Rodríguez", email: "carlos.rodri@gmail.com", date: "25/01/2024", status: "Completado", prize: "$6.500" },
    { name: "Ana Martínez", email: "ana.martez@gmail.com", date: "09/01/2024", status: "Completado", prize: "$4.000" },
    { name: "Sofía López", email: "sofia.lopez@gmail.com", date: "15/02/2024", status: "Completado", prize: "$11.000" },
];

const ReferralHistoryTable = () => (
    <div className="bg-white/5 p-4 rounded-lg text-xs overflow-x-auto">
        <h4 className=" text-white mb-3 flex items-center gap-2">
            <FaUsers className="text-violet-400" /> Historial de Referidos Exitosos
        </h4>

        <table className="w-full min-w-[600px] text-left">
            <thead className="text-white/60 text-xs border-b border-white/10">
                <tr>
                    <td className="py-2"><div className="flex items-center gap-1"><FaUser /> Cliente</div></td>
                    <td><div className="flex items-center gap-1"><FaEnvelope /> Email</div></td>
                    <td><div className="flex items-center gap-1"><FaCalendarAlt /> Fecha</div></td>
                    <td><div className="flex items-center gap-1"><FaCheckCircle /> Estado</div></td>
                    <td><div className="flex items-center gap-1"><FaGift /> Premio</div></td>
                </tr>
            </thead>
            <tbody className="text-white">
                {data.map((row, i) => (
                    <tr key={i} className="border-t border-white/10 text-gray-400 hover:bg-white/10 transition">
                        <td className="py-2">{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.date}</td>
                        <td>
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full inline-flex items-center gap-1">
                                <FaCheckCircle className="text-white" /> {row.status}
                            </span>
                        </td>
                        <td className="text-yellow-400 ">{row.prize}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ReferralHistoryTable;
