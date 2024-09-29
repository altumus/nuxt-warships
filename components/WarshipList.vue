<template>
  <WarshipCard />
</template>

<script setup lang="ts">
import * as Api from '../services/warships.service';

onMounted(async () => {
  const result = await Api.getShips(1);
  console.log('ships is', result);
});
</script>
