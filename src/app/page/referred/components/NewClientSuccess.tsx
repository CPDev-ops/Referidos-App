import { FaCheckCircle, FaEnvelope, FaQuestionCircle, FaTimes } from "react-icons/fa";

interface Props {
    name: string;
    email: string;
    back: () => void
}

const NewClientSuccess = ({ name, email, back }: Props) => {


    return (
        <div className="relative bg-white text-gray-800 p-6 rounded-lg max-w-md w-full shadow-xl text-sm space-y-5">
            {/* Cierre */}
            <button
                onClick={() => { back() }}
                className="absolute top-3 right-3 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full p-2 hover:text-gray-600 duration-300"
            >
                <FaTimes />
            </button>

            {/* Encabezado */}
            <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-green-100 p-3 rounded-full">
                    <FaCheckCircle className="text-green-600 text-5xl" />
                </div>
                <h2 className=" text-lg">¡Perfecto! Eres un cliente nuevo</h2>
                <p className="text-xs text-gray-500">
                    Puedes participar en la promoción de referidos
                </p>
            </div>

            {/* Invitador */}
            <div className="bg-purple-100 px-4 py-3 rounded text-center space-y-1">
                <p className="text-xs text-gray-700"></p>
                <p className="text-sm  text-purple-800">Te invitó: {name}</p>
                <p className="text-xs text-purple-700">{email}</p>
            </div>

            {/* Email enviado */}
            <div className="bg-green-100 text-green-900 p-4 rounded text-xs space-y-2">
                {/* Encabezado con Check */}
                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                    <FaCheckCircle className="text-lg" />
                    <span>¡Email enviado exitosamente!</span>
                </div>

                {/* Descripción con icono de sobre */}
                <div className="flex items-start gap-2">
                    <FaEnvelope className="mt-1 text-green-700 text-4xl" />
                    <p>
                        Se envió a tu correo el código QR, código de referido e instrucciones completas. <br />
                        <span className="text-green-700  font-medium">
                            Revisa tu bandeja de entrada y carpeta de spam
                        </span>
                    </p>
                </div>
            </div>
            {/* ¿Qué hacer ahora? */}
            <div className="bg-blue-50 p-4 rounded text-xs space-y-3">
                <div className="flex items-center gap-2 text-blue-700 text-sm mb-2">
                    <FaQuestionCircle />
                    <span>¿Qué hacer ahora?</span>
                </div>

                <div className="space-y-3">
                    {[
                        "Revisa tu email y guarda el código QR que te enviamos",
                        "Visita nuestro local",
                        "Presenta el código QR de tu email o menciona que vienes por la campaña de referidos",
                        <>
                            Entrega tu DNI: <span className="text-blue-700 font-semibold">4374412</span>
                        </>,
                        "¡Disfruta tu premio!",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold self-start">
                                {idx + 1}
                            </div>
                            <div className="flex-1">{item}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nota */}
            <p className="text-[10px] text-center text-gray-400">
                *Si no ves el correo, revisa tu bandeja de spam o promociones.
            </p>
        </div>
    );
};

export default NewClientSuccess;
