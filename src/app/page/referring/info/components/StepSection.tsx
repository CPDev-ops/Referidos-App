import { FaQrcode, FaUserFriends, FaChartLine, FaGift } from "react-icons/fa";
import Button from "../../../../shared/UI/Button";

const steps = [
    {
        title: "1. Obtén tu Código Único",
        desc: "Preséntalo en la sucursal. El personal del área te lo escaneará para capturar tu registro.",
        badge: "Código Asignado",
        badgeColor: "bg-violet-600",
        icon: <FaQrcode className="text-violet-400 text-xl" />,
    },
    {
        title: "2. Comparte con Amigos",
        desc: "Comparte tu enlace de referido con amigos por WhatsApp y Email.",
        tags: ["WhatsApp", "Email"],
        icon: <FaUserFriends className="text-green-400 text-xl" />,
    },
    {
        title: "3. Monitorea Progreso",
        desc: "Sigue las visitas y registros de tus invitados.",
        stats: [
            { label: "Visitas", value: 12, color: "text-violet-400" },
            { label: "Registros", value: 5, color: "text-green-400" },
        ],
        icon: <FaChartLine className="text-blue-400 text-xl" />,
    },
    {
        title: "4. Reclama Premios",
        desc: "Canjea tus puntos por premios increíbles.",
        badge: "3.000 créditos",
        badgeColor: "bg-yellow-400 text-black",
        icon: <FaGift className="text-yellow-400 text-xl" />,
    },
];


const StepsSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4 space-y-3 border border-white/20 shadow-sm">
                    {/* Icono */}
                    <div>{step.icon}</div>

                    {/* Título y descripción */}
                    <h3 className=" text-white">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.desc}</p>

                    {/* Badge */}
                    {step.badge && (
                        <Button
                            className={`inline-block  ${step.badgeColor}`}
                        >
                            {step.badge}
                        </Button>
                    )}

                    {/* Tags como Botones */}
                    {step.tags && (
                        <div className="flex gap-2 mt-1 flex-wrap">
                            {step.tags.map((tag) => {
                                const isWhatsApp = tag.toLowerCase() === "whatsapp";
                                const isEmail = tag.toLowerCase() === "email";

                                const baseClass =
                                    "text-xs px-3 py-1 rounded  transition";
                                const colorClass = isWhatsApp
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : isEmail
                                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                                        : "bg-gray-500 text-white";

                                return (
                                    <Button
                                        key={tag}
                                        text={tag}
                                        className={`${baseClass} ${colorClass}`}
                                    />
                                );
                            })}
                        </div>
                    )}


                    {/* Stats */}
                    {step.stats && (
                        <div className="flex gap-4 mt-2 text-sm">
                            {step.stats.map((s) => (
                                <div key={s.label}>
                                    <p className={` ${s.color}`}>{s.value}</p>
                                    <p className={`${s.color} text-xs`}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StepsSection;

