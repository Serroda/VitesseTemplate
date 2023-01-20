<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center">
      <img class="img-gradient" src="vite.svg" width="192" />
      <h1 class="text-center">
        Template con <span class="text-green">Vue</span> y
        <span class="text-violet">Vite</span>
      </h1>
      <p>Referencias obtenidas de <a href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a></p>
      <p class="text-center">Modo {{ layoutStore.getMode }}</p>
      <div class="flex justify-center">
        <router-link class="mr-5" to="/">Inicio</router-link>
        <router-link to="/test/2">Link 2</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts" setup>
const layoutStore = useLayoutControl();
useTriggerLayout();
</script>

<style scoped>
@keyframes cloud {
  0% {
    filter: drop-shadow(0 0 40px rgba(189, 52, 254, 1));
  }
  100% {
    filter: drop-shadow(0 0 20px rgba(189, 52, 254, 1));
  }
}
.img-gradient {
  animation-name: cloud;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
