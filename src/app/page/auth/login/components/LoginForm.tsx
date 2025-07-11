import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputField from "../../register/ui/InputFIeld";
import Button from "../../../../shared/UI/Button";

const LoginForm = () => {
    return (
        <form className="space-y-4 text-sm text-white">
            <p className=" text-center">Iniciar Sesión</p>

            {/* Botón Google */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-md  hover:bg-gray-100"
            >
                <FaGoogle />
                Continuar con Google
            </button>
            {/* Email */}
            <InputField
                label="Email"
                placeholder="tucorreo@email.com"
                type="email"
                icon={<FaEnvelope />}
            />
            {/* Contraseña */}
            <InputField
                label="Contraseña"
                placeholder="Tu contraseña"
                type="password"
                icon={<FaLock />}
            />
            <div className="text-right text-xs text-yellow-400 hover:underline">
                <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>

            {/* Botón Iniciar */}
            <Button
                text="Iniciar Sesión"
                className="flex justify-center items-center w-full  bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-md "
                type="submit"
            />

            <p className="text-center text-xs text-white/70">
                ¿Aún no tienes cuenta?{" "}
                <Link to="/register" className="text-yellow-400 underline">
                    Regístrate
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
