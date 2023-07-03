<template>
  <div class="h-screen w-screen">
    <navigator class="nav-height"></navigator>

    <div class="body-height">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
const layoutStore = useLayoutControl();
const { sayHello } = useComposableTest()
layoutStore.checkOnResize();
sayHello()

</script>

<style scoped>
.nav-height {
  height: 60px;
}

.body-height {
  height: calc(100% - 60px);
}
</style>

