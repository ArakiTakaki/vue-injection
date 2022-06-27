import { useHelloWorldStore } from "..";

export default () => {
    const helloWorldStore = useHelloWorldStore();
    return (text: string) => {
        if (helloWorldStore?.state.data == null) return;
        helloWorldStore.state.data = text;
    }
};
