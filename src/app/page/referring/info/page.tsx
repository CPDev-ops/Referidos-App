import { ContainerPages } from "../../../shared/ContainerPages";
import Button from "../../../shared/UI/Button";
import ButtonBack from "../../../shared/UI/ButtonBack";
import StepsSection from "./components/StepSection";
import TipsSection from "./components/TipsSection";

const ReferProgramPage = () => {
    return (
        <ContainerPages className="bg-[#101223] text-white px-4 py-8 space-y-6">
            <ButtonBack route="/referring" />
            <div className="space-y-8 max-w-5xl mx-auto pt-4 sm:pt-4">
                <h2 className="text-2xl  text-center">¿Cómo Funciona?</h2>
                <p className="text-center text-violet-200 text-sm">
                    Sigue estos simples pasos para maximizar tus ganancias
                </p>
                <StepsSection />
                <TipsSection />
                <div className="text-center">
                    <Button text="🚀 ¡Comenzar a Invitar Amigos!" className="bg-blue-500 hover:bg-blue-600 text-white  ">

                    </Button>
                </div>
            </div>
        </ContainerPages>
    );
};

export default ReferProgramPage;
