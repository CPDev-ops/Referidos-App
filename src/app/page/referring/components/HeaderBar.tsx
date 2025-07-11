import { FaChartLine, FaFileAlt, FaGift, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import Button from "../../../shared/UI/Button";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
    const navigate = useNavigate();
    const handleClickRedirect = (route: string) => {
        navigate(route)
    }

    return (
        <div className="w-full bg-[#0e1327] border-b border-white/10 shadow-sm">
            <div className="flex flex-wrap justify-between items-center gap-2 max-w-6xl mx-auto px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="bg-yellow-500 p-2 rounded-full text-black ">🎯</div>
                    <div>
                        <p className="text-sm text-white/70">Bienvenido, Juan Pérez</p>
                        <h1 className="text-xl ">Panel de Referidos</h1>
                    </div>
                </div>

                <div className="flex gap-2 text-xs flex-row max-w-[screen] p-1 overflow-x-auto">
                    <Button
                        onClick={() => handleClickRedirect('/referring/progress')}
                        iconLeft={<FaChartLine />}
                        text="Ver Progreso Detallado"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
                    />
                    <Button
                        onClick={() => handleClickRedirect('/referring/info')}
                        iconLeft={<FaQuestionCircle />}
                        text="¿Qué debo hacer?"
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md"
                    />
                    <Button
                        onClick={() => alert('Todavia no desarrollado --seguro sea un pdf ')}
                        iconLeft={<FaFileAlt />}
                        text="Términos"
                        className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1 rounded-md"
                    />
                    <Button
                        onClick={() => handleClickRedirect('/referring/prizes')}
                        iconLeft={<FaGift />}
                        text="Mis Premios"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md"
                    />
                    <Button
                        onClick={() => handleClickRedirect("/")}
                        iconLeft={<FaSignOutAlt />}
                        text="Cerrar Sesión"
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default HeaderBar;
