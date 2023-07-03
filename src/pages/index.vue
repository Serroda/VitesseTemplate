<template>
  <div class="flex flex-col items-center justify-center h-100%">
    <img class="img-gradient" :src="img" width="192" />
    <h1 class="text-center">
      Template with <span class="text-green">Vue</span> &
      <span class="text-violet">Vite</span>
    </h1>
    <p>References from <a href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a></p>
    <p class="text-center mt-0 mb-0">Mode {{ layoutStore.getMode }}</p>
    <List v-model:dataList="dataList" />
  </div>
</template>

<script lang="ts" setup>
import { IDataList } from "~/types/list";
import img from '~/assets/imgs/vite.svg'

const layoutStore = useLayoutControl();
const dataList: Ref<IDataList[]> = ref([]);
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
