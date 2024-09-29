<template>
  <header class="text-center py-[20px] text-[20px] font-light">
    List of Warships
  </header>
  <main>
    <section>
      <AppLoader class="mx-auto" v-if="isLoading && !isErrorOccured" />

      <ErrorFetch v-if="!isLoading && isErrorOccured" />

      <div
        v-if="!isLoading && !isErrorOccured"
        class="w-full flex h-auto flex-wrap justify-center gap-[60px] px-[10px]"
      >
        <WarshipCard v-for="ship in shipsList" :key="ship.url" :ship="ship" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import * as Api from '../../services/warships.service';
import type { Starship } from '../../types/ships';
import WarshipCard from '../../components/WarshipCard.vue';
import AppLoader from '../../components/AppLoader.vue';
import ErrorFetch from '../../components/ErrorFetch.vue';

const route = useRoute();

const shipsList = reactive([]) as Array<Starship>;

const isLoading = ref(true);
const isErrorOccured = ref(false);

onMounted(async () => {
  const pageNumber = Number(route.params.pageNumber);

  if (Number.isNaN(pageNumber) || pageNumber <= 0) {
    navigateTo('/page/1');
    return;
  }

  if (pageNumber > 4) {
    console.log('limit exceeded');
    navigateTo('/page/4');
    return;
  }

  try {
    const response = await Api.getShips(pageNumber);
    response.results.map((ship) => shipsList.push(ship));
  } catch (error) {
    isErrorOccured.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>
