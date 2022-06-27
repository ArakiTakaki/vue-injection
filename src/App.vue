<script setup lang="ts">
import { provideHelloWorld } from './store/HelloWorld';
import HelloWorld from './component/HelloWorld.vue';
provideHelloWorld();

</script>

<template>
  <div>
    <HelloWorld />
  </div>
</template>

<style>
</style>
