import { FaStar } from "react-icons/fa";

const LoginHeader = () => {
    return (
        <div className="text-center space-y-2 my-2 ">
            <div className="flex justify-center items-center gap-2 text-yellow-400">
                <div className="bg-yellow-500 p-2 rounded-full text-white">
                    <FaStar size={12} />
                </div>
                <h1 className="text-lg  text-white">Bingo</h1>
            </div>
            <h2 className="text-xl  text-white">¡Bienvenido de vuelta!</h2>
            <p className="text-sm text-white/80">
                Iniciá sesión para acceder a tu panel de referidos
            </p>
        </div>
    );
};

export default LoginHeader;
