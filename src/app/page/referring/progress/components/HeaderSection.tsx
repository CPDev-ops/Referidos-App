import { FaChartBar, FaFileExport } from "react-icons/fa";
import Button from "../../../../shared/UI/Button";

const HeaderSection = () => (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-yellow-500 p-2 rounded-full text-black text-lg">
                <FaChartBar />
            </div>
            <div>
                <h1 className="text-lg ">Progreso de Referidos</h1>
                <p className="text-xs text-white/70">Consulta en profundidad tu estado</p>
            </div>
        </div>
        <Button text="Exportar" className="bg-white/10 text-white" iconLeft={<FaFileExport />} />
    </div>
);

export default HeaderSection;
