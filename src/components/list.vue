<template>
  <div class="mt-5">
    <input
      class="custom-input"
      type="text"
      v-model="inputValue"
      maxlength="10"
    />
    <button
      class="custom-button"
      @click="addValue"
      :disabled="dataList.length === 3"
    >
      Add
    </button>
  </div>
  <div class="justify-center flex flex-col items-start w-260px">
    <transition-group name="list">
    <div v-for="item in dataList" :key="item.id" class="mt-4 flex justify-between w-100%">
      <p>{{ item.text }}</p>
      <button @click="removeValue(item.id)" class="custom-button">
        Remove
      </button>
    </div>
    </transition-group>
  </div>
</template>

<style scoped>
.custom-input,
.custom-button {
  border: 2px solid rgb(200, 200, 200);
  border-radius: 5px;

  padding: 0.8rem;
  transition: border 0.2s;
}

.custom-button {
  margin-left: 5px;
}

.custom-input:hover,
.custom-button:not([disabled]):hover {
  border: 2px solid rgb(140, 140, 140);
  cursor: pointer;
}
</style>
<script lang="ts" setup>
import { IDataList } from "~/types/list";
const inputValue = ref("");

const emits = defineEmits<{
  (e: "update:dataList", newValue: IDataList[]): void;
}>();

const props = defineProps<{
  dataList: IDataList[];
}>();

function addValue() {
  if (inputValue.value === "") {
    return;
  }

  const newObject: IDataList = {
    id: props.dataList.length
      ? props.dataList[props.dataList.length - 1].id + 1
      : 0,
    text: inputValue.value,
  };

  emits("update:dataList", [...props.dataList, newObject]);
  inputValue.value = "";
}

function removeValue(idSelected: number) {
  emits(
    "update:dataList",
    props.dataList.filter((item) => item.id !== idSelected)
  );
}
</script>
