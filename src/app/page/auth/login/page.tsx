import { ContainerPages } from "../../../shared/ContainerPages";
import ButtonBack from "../../../shared/UI/ButtonBack";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
    return (
        <ContainerPages className="bg-gradient-to-tr from-[#2d13a1] to-[#291191] text-white flex flex-col items-center justify-center space-y-6 px-4 py-8">
            {/* Botón de volver */}
            <ButtonBack />
            {/* Header */}
            <LoginHeader />
            {/* Formulario */}
            <div className="w-full max-w-md mx-auto bg-white/10 rounded-xl p-6 space-y-6">
                <LoginForm />
            </div>
        </ContainerPages>
    );
};

export default LoginPage;
