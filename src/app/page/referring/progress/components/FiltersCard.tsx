import { FaSearch, FaBroom } from "react-icons/fa";
import Button from "../../../../shared/UI/Button";

const FiltersCard = () => (
    <div className="bg-white/5 p-4 rounded-lg space-y-4 text-xs">
        {/* Label superior */}
        <div className="flex items-center gap-2 text-white">
            <FaSearch />
            <span>Filtros de Fecha</span>
        </div>

        {/* Grid con inputs */}
        <div className="grid sm:grid-cols-3 gap-4">
            <input
                type="date"
                className="bg-white/10 p-2 rounded w-full text-white"
                placeholder="Desde"
            />
            <input
                type="date"
                className="bg-white/10 p-2 rounded w-full text-white"
                placeholder="Hasta"
            />
            <Button iconLeft={<FaBroom />} text="Limpiar" />
        </div>
    </div>
);

export default FiltersCard;
