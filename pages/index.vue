<template>
  <header class="text-center py-[10px] text-[20px] font-light">
    List of Warships
  </header>
  <main>
    <WarshipList />
  </main>
</template>

<script setup lang="ts">
import WarshipList from '../components/WarshipList.vue';
definePageMeta({
  layout: 'default',
});
</script>
