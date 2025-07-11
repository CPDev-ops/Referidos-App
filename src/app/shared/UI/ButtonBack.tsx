import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ButtonBackProps {
    route: string;
}
const ButtonBack: React.FC<ButtonBackProps> = ({ route }) => {
    return (
        <Link
            to={`${route}`}
            className="inline-flex  items-center  text-white text-xs hover:underline mb-4"
        >
            <FaArrowLeft className="mr-2" />
            Volver al inicio
        </Link>
    );
};

export default ButtonBack;
