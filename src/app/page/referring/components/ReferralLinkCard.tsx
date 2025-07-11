import { useState } from "react";
import { FaWhatsapp, FaQrcode, FaUserTag, FaCopy } from "react-icons/fa";
import QRCodeModal from "./mod/QrCodeModal"; // ajustá ruta si cambia
import { toast } from "react-toastify";
import Button from "../../../shared/UI/Button";

const ReferralLinkCard = () => {
    const [showQR, setShowQR] = useState(false);
    const referralCode = "XXAYJH9";
    const referralLink = "https://bingo.com/ref";

    return (
        <>
            <div className="bg-white/5 p-4 rounded-lg border border-white/20 shadow-sm space-y-3">
                <h3 className=" text-sm flex items-center gap-2">
                    <FaUserTag className="text-white/70" />
                    Tu Enlace de Referido
                </h3>

                <div className="space-y-3">
                    <div className="">
                        <label className="text-xs text-white/60">Código de Referente</label>
                        <div className="flex items-center justify-between">
                            {/* Código con fondo */}
                            <div className="flex-1 bg-white/10 px-3 py-2 rounded">
                                <span>{referralCode}</span>
                            </div>

                            {/* Icono QR con fondo separado */}
                            <div
                                onClick={() => setShowQR(true)}
                                title="Ver QR"
                                className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded cursor-pointer"
                            >
                                <FaQrcode className="text-white" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-white/60">Enlace Único</label>
                        <div className="flex items-center">
                            {/* Caja del enlace */}
                            <div className="flex-1 bg-white/10 px-3 py-2 rounded overflow-hidden">
                                <span className="truncate">https://bingo.com/ref</span>
                            </div>
                            {/* Icono de copiar con fondo */}
                            <div
                                title="Copiar enlace"
                                className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded cursor-pointer"
                                onClick={() => { navigator.clipboard.writeText("https://bingo.com/ref"); toast.success('Enlace copiado') }}
                            >
                                <FaCopy className="text-white" />
                            </div>
                        </div>
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white  rounded py-2 flex items-center justify-center gap-2" text={`Compartir por WhatsApp`} iconLeft={<FaWhatsapp size={20} />} />
                </div>
            </div>

            {/* Modal de QR */}
            {showQR && <QRCodeModal url={referralLink} onClose={() => setShowQR(false)} />}
        </>
    );
};

export default ReferralLinkCard;
