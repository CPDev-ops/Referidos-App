import { FaEnvelope, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Button from "../../../shared/UI/Button";
import { BiMailSend } from "react-icons/bi";

const EmailInviteCard = () => {
    const [emailList, setEmailList] = useState([
        "andrea@gmail.com",
        "dermarin@gmail.com",
    ]);

    const [inputEmail, setInputEmail] = useState("");

    const handleAdd = () => {
        if (inputEmail && !emailList.includes(inputEmail)) {
            setEmailList([...emailList, inputEmail]);
            setInputEmail("");
        }
    };

    const handleRemove = (email: string) => {
        setEmailList(emailList.filter((e) => e !== email));
    };

    return (
        <div className="bg-white/5 p-4 rounded-lg space-y-3 border border-white/20 shadow-sm">
            <h3 className="flex items-center gap-2">
                <FaEnvelope className="text-white/70" />
                Enviar Invitaciones por Email
            </h3>
            <div className="space-y-4">

                {/* Label + input */}
                <div>
                    <label className="block text-xs text-white/60 mb-1">Agregar Email</label>
                    <div className="flex gap-2 p-2 bg-black/20 rounded border border-gray-700">
                        <input
                            type="email"
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            placeholder="ejemplo@gmail.com"
                            className="bg-black/30 border border-gray-600 px-3 py-2 text-white w-full rounded"
                        />

                        <Button onClick={handleAdd} iconLeft={<FaPlus />} text="Agregar" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded flex justify-center items-center gap-" />
                    </div>
                </div>

                {/* Label + lista */}
                <div>
                    <label className="block text-xs text-white/60 mb-1">
                        Emails para enviar ({emailList.length})
                    </label>
                    <div className="p-2 rounded bg-black/20 border border-gray-700 space-y-2 max-h-40 overflow-y-auto">
                        {emailList.map((email) => (
                            <div
                                key={email}
                                className="flex justify-between items-center px-3 py-2 rounded bg-black/30 border border-gray-600 text-white/90 text-sm"
                            >
                                <span className="truncate">{email}</span>
                                <button
                                    onClick={() => handleRemove(email)}
                                    className="text-red-400 hover:text-red-300"
                                    title="Eliminar"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {/* Botón enviar */}
            <Button className="w-full bg-blue-600 flex justify-center items-center hover:bg-blue-700 text-white  py-2" text={`Enviar Invitaciones (${emailList.length})`} iconLeft={<BiMailSend size={20} />} />
            <p className=" text-white/50 ">
                Se enviará un único enlace junto con una invitación personalizada a cada contacto.
            </p>
        </div>
    );
};

export default EmailInviteCard;
