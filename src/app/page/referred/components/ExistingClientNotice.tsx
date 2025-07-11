import { FaTimesCircle, FaInfoCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import Button from "../../../shared/UI/Button";
import { IoIosAlert } from "react-icons/io";
import { BsViewList } from "react-icons/bs";
import { MdOutlineRemoveRedEye, MdWhatsapp } from "react-icons/md";

interface Props {
    name: string;
    email: string;
    back: () => void
}

const ExistingClientNotice = ({ name, email, back }: Props) => {
    return (
        <div className="bg-white relative text-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg text-sm space-y-4">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-3">
                <div className="flex items-center gap-2  text-red-600 font-semibold text-sm">
                    <IoIosAlert className="text-2xl" />
                    <div>
                        <p>¡Oops! Ya eres nuestro cliente</p>
                        <p className="text-xs font-normal text-gray-500">
                            Esta promoción es exclusiva para nuevos clientes
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => { back() }}
                    className="absolute top-3 right-3 text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full p-2 hover:text-gray-600 duration-300"
                >
                    <FaTimes />
                </button>
            </div>

            {/* Datos del cliente */}
            <div className="bg-gray-50 border p-3 rounded text-xs space-y-1">
                <p className="text-gray-600">Datos encontrados en nuestro sistema:</p>
                <p>DNI: <span className="font-semibold">*********</span></p>
                <p>Email: <span className="font-semibold">{email.replace(/(?<=.{2}).(?=.*@)/g, '*')}</span></p>
            </div>

            {/* Motivo rechazo */}
            <div className="bg-red-100 border border-red-200 text-red-700 p-3 rounded text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                    <FaExclamationCircle />
                    <span>¿Por qué no puedes participar?</span>
                </div>
                <ul className="list-disc list-inside space-y-1">
                    <li>Ya tienes una cuenta con nosotros</li>
                    <li>Esta campaña busca atraer nuevos clientes</li>
                    <li>Los datos están registrados en nuestro sistema</li>
                    <li>Las promociones de referidos son solo para nuevos usuarios</li>
                </ul>
            </div>

            {/* Otras opciones */}
            <div className="bg-blue-50 border border-blue-200 text-blue-700 p-3 rounded text-xs space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <FaInfoCircle />
                    <span>Otras opciones para ti:</span>
                </div>
                <p>Puedes ser referente y ganar grandes premios</p>
                <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm"
                    text="Convertirme en Referente"
                />
            </div>
            <div className="flex justify-center gap-2 text-xs mt-2">

                <Button iconLeft={<MdOutlineRemoveRedEye size={16} />} text="Ver Promociones" className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-white" />
                <Button iconLeft={<MdWhatsapp size={16} />} text="Contactarnos" className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white" />
            </div>

            {/* Footer */}
            <p className="text-[10px] text-gray-400 text-center my-1">
                ¿Crees que es un error?
            </p>
            <p className="text-[10px] text-gray-400 text-center my-1">
                *Si crees que esto es un error, consúltanos en tu local más cercano.
            </p>
        </div>
    );
};

export default ExistingClientNotice;
