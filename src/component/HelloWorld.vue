<script setup lang="ts">
import { ref } from '@vue/reactivity';
import useUpdateHelloWorld from '../store/HelloWorld/actions/useUpdateHelloWorld';
import useGetHelloWorldText from '../store/HelloWorld/selector/useGetHelloWorldText';

const refText = ref('');
const updateText = useUpdateHelloWorld();
const text = useGetHelloWorldText();
const handleSubmit = () => {
    updateText(refText.value);
    refText.value = '';
}
</script>

<template>
<div>
  <div>{{text}}</div>
  <input type="text" name="" id="" v-model="refText">
  <button type="button" @click="handleSubmit">更新</button>
</div>
</template>

<style>
</style>
