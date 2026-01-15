import { useState } from "react";

type NameFormProps = {
    onSubmit: (name: string) => void;
};

export function NameForm({ onSubmit }: NameFormProps) {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();           // ✅ ページ遷移を止める（超重要）
        onSubmit(name);               // ✅ 親に渡す
        setName("");                  // ✅ 送信後に入力欄をクリア（任意）
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="名前を入力"
            />
            <button type="submit">送信</button>
        </form>
    );
}
