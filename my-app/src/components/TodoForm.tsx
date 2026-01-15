import { useState } from "react";

type TodoFormProps = {
    onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: TodoFormProps) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmed = text.trim();
        if (!trimmed) return;

        onAdd(trimmed);     // ✅ 親へ通知
        setText("");        // ✅ 入力クリア
    };

    return (
        <form onSubmit={handleSubmit} className="row">
            <input
                className="input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="やることを入力"
            />
            <button className="btn" type="submit" disabled={!text.trim()}>
                追加
            </button>
        </form>
    );

}
