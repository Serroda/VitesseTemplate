<script lang="ts" setup>
const props = defineProps<{
  id: string;
}>();
</script>
<template>
  <div class="h-100% flex pl-26px pr-26px">

    <p>Props: {{ props }}</p>
  </div>
</template>
