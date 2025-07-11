import { FaStar } from "react-icons/fa"
import Button from "../../../shared/UI/Button"

const Nav = () => {
    return (
        <nav className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-yellow-500 text-white">
                    <FaStar size={12} />
                </div>
                <h1 className=" text-white">Bingo</h1>
            </div>
            <Button
                text="Programa Activo"
                className="bg-yellow-500 text-white px-4 py-2 text-xs "
            />
        </nav>
    )
}

export default Nav