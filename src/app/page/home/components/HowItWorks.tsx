import { FaStar, FaUsers } from "react-icons/fa";
import { FiGift } from "react-icons/fi";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUsers size={24} />,
            title: "1. Invitá Amigos",
            desc: "Compartí tu código personalizado por WhatsApp, redes o correo con tus amigos y familiares.",
            style: "bg-blue-500"
        },
        {
            icon: <FiGift size={24} />,
            title: "2. Ellos Se Registran",
            desc: "Cuando se registren con tu código, ambos reciben beneficios especiales del juego.",
            style: "bg-green-500"
        },
        {
            icon: <FaStar size={24} />,
            title: "3. ¡Ganás Premios!",
            desc: "Acumulás crédito por cada referido que se registre. ¡Hasta $65.000 por cada uno!",
            style: "bg-yellow-500"
        },
    ];

    return (
        <section className="text-center">
            <h2 className="text-xl  mb-2">¿Cómo Funciona el Programa?</h2>
            <p className="text-sm text-white/80 mb-8">Es súper fácil ganar con tus amigos</p>
            <div className="grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white/10 p-6 rounded-2xl text-white space-y-2 border border-white/20"
                    >
                        <div className={`flex items-center justify-center text-white ${step.style}  mx-auto w-10 h-10  rounded-full `}>{step.icon}</div>
                        <h3 className=" py-2 text-base">{step.title}</h3>
                        <p className="text-xs text-white/80">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
