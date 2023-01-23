<template>
  <List v-model:dataList="dataList" />
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { IDataList } from "~/types/list";

const dataList: Ref<IDataList[]> = ref([]);
</script>
