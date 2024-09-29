<template>
  <pre>123</pre>
</template>

<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  console.log('route mounted', route.params.pageNumber);
});
</script>
