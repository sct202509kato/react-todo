type NameInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export function NameInput({ value, onChange }: NameInputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="名前を入力"
        />
    );
}
