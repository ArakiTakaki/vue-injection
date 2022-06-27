import { inject, provide, reactive } from "vue";

const HELLO_WORLD_STORE = 'hello-world-store';

type HelloWorldStoreType = {
    state: {
        data: string;
    },
};

export const provideHelloWorld = () => {
    const state = reactive<HelloWorldStoreType>({
        state: {
            data: 'hello world',
        }
    });
    provide(HELLO_WORLD_STORE, state);
};

export const useHelloWorldStore = () => inject<HelloWorldStoreType>(HELLO_WORLD_STORE);
