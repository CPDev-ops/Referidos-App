import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon, className, ...props }) => {
    return (
        <div className="space-y-1">
            <label className="block text-sm ">{label}</label>
            <div className="flex items-center bg-white/10 rounded-md px-3 py-2">
                {icon && <div className="text-white/70 mr-2">{icon}</div>}
                <input
                    {...props}
                    className={`bg-transparent flex-1 text-white placeholder-white/70 focus:outline-none ${className}`}
                />
            </div>
        </div>
    );
};

export default InputField;
