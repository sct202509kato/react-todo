type ChildProps = {
    onIncrement: () => void;
};

export function Child({ onIncrement }: ChildProps) {
    return (
        <button onClick={onIncrement}>
            子から +1
        </button>
    );
}
