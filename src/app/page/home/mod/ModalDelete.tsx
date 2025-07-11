import type { Variacion } from "../../../types";

interface ModalQuestionProps {
    text: string;
    subText: string;
    confirm: (id: number | string) => void
    cancel: () => void
    item: Variacion | null
}
export const ModalQuestion: React.FC<ModalQuestionProps> = ({ cancel, confirm, text, subText, item }) => {
    if (!item) return null
    return (
        <div className="space-y-6 p-6 bg-[var(--bg-100)] border-2 border-gray-300 rounded-lg text-center">
            <h2 className="text-lg  text-[var(--text-200)]">{text}</h2>
            {subText && <p className="text-sm text-gray-600">{subText}</p>}

            <div className="flex justify-center gap-4 pt-4">
                <button
                    onClick={() => confirm(item.id)}
                    className="px-4 py-2 rounded bg-[var(--accent-100)] text-[var(--text-100)]  hover:opacity-90"
                >
                    Confirmar
                </button>
                <button
                    onClick={cancel}
                    className="px-4 py-2 rounded border border-gray-300 text-[var(--text-200)] hover:bg-gray-100"
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}