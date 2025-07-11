import { FaGoogle, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../../../shared/UI/Button";
import InputField from "../ui/InputFIeld";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/referring')
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm text-white">
      <p className=" text-center">Crear Cuenta de Referidor</p>
      {/* Google Login */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-md  hover:bg-gray-100"
      >
        <FaGoogle />
        Continuar con Google
      </button>

      <InputField
        label="Nombre completo"
        placeholder="Tu nombre completo"
        type="text"
        icon={<FaUser />}
      />

      <InputField
        label="Email"
        placeholder="tucorreo@email.com"
        type="email"
        icon={<FaEnvelope />}
      />

      <InputField
        label="Contraseña"
        placeholder="Mínimo 8 caracteres"
        type="password"
        icon={<FaLock />}
      />

      <Button
        text="Crear Cuenta de Referidor"
        className="flex justify-center items-center w-full  bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-md "
        type="submit"
      />

      <p className="text-center text-xs text-white/60">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-yellow-400 underline cursor-pointer">
          Iniciar sesión
        </Link>
      </p>
      <p className="text-center text-[10px] text-white/40">
        Al registrarte, aceptás nuestros términos y condiciones del programa de referidos
      </p>
    </form>
  );
};

export default RegisterForm;
