<template>
  <nav class="flex w-full items-center bg-[#060A24] h-[64px] px-[20px]">
    <h1
      @click="onMainPage"
      class="text-white cursor-pointer text-[24px] font-medium"
    >
      Star Wars: Warships
    </h1>
  </nav>
</template>

<script setup lang="ts">
function onMainPage() {
  navigateTo('/');
  return;
}
</script>
