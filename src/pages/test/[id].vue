<script lang="ts" setup>
const props = defineProps<{
  id: string;
}>();
</script>
<template>
  <p>Props: {{ props }}</p>
</template>
