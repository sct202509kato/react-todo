type GreetingProps = {
    name: string;
};

export function Greeting(props: GreetingProps) {
    return <h2>こんにちは、{props.name} さん</h2>;
}
