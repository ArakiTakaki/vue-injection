import { computed } from "vue";
import { useHelloWorldStore } from "..";

export default () => {
    const helloWorldStore = useHelloWorldStore();
    return computed(() => {
        return helloWorldStore?.state.data;;
    });
};
