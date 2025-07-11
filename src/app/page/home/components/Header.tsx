import { useNavigate } from "react-router-dom";
import Button from "../../../shared/UI/Button";


const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/register')
    }
    return (
        <header className="text-center space-y-6">
            <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl ">
                    ¡Gana Premios por <span className="text-yellow-400">Invitar Amigos!</span>
                </h1>
                <p className="text-sm sm:text-base text-white/90">
                    Invita a tus amigos al bingo y gana hasta <span className=" text-yellow-500">$65.000</span> en créditos.
                    ¡Mientras más invites, más ganás!
                </p>
                <Button onClick={handleClick}
                    text="¡Empezar a Ganar Ahora!"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full "
                />
                <p className="text-xs text-white/70">Sin costo • Registro rápido • Premios inmediatos</p>
            </div>
        </header>
    );
};

export default Header;
