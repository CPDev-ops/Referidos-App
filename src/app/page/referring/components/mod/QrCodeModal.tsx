import { QRCodeCanvas } from "qrcode.react";
import { FaTimes } from "react-icons/fa";

interface QRCodeModalProps {
    url: string;
    onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ url, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-[#1f2937] text-white p-6 rounded-lg relative w-72 text-center space-y-4">
                <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-red-400">
                    <FaTimes />
                </button>
                <h2 className="text-lg ">Código QR</h2>
                <div className="flex justify-center items-center mx-auto border border-dashed border-white/30 p-3 rounded-md bg-[#111827]">
                    <QRCodeCanvas value={url} size={150} bgColor="#111827" fgColor="#ffffff" />
                </div>
                <p className="text-sm">¡Saca captura!</p>
            </div>
        </div>
    );
};

export default QRCodeModal;
