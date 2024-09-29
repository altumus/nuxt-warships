<template>
  <AppNavbar />
  <slot />
  <AppFooter />
</template>

<script setup lang="ts">
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>
