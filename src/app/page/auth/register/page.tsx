import { ContainerPages } from "../../../shared/ContainerPages";
import RegisterForm from "./components/RegisterForm";
import RegisterHeader from "./components/RegisterHeader";
import ButtonBack from "../../../shared/UI/ButtonBack";

const RegisterPage = () => {
    return (
        <ContainerPages className="bg-gradient-to-tr from-[#2d13a1] to-[#291191] text-white flex items-center justify-star">
            <ButtonBack route="/home" />
            <RegisterHeader />
            <div className="w-full max-w-md mx-auto bg-white/10 rounded-xl p-6 space-y-6">
                <RegisterForm />
            </div>
        </ContainerPages>
    );
};



export default RegisterPage;
