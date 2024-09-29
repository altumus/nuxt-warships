<template>
  <header class="text-center py-[20px] text-[20px] font-light">
    List of Warships
  </header>
  <main>
    <section>
      <div
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

const route = useRoute();

const shipsList = reactive([]) as Array<Starship>;

onMounted(async () => {
  const pageNumber = Number(route.params.pageNumber);

  if (Number.isNaN(pageNumber) || pageNumber <= 0) {
    navigateTo('/pages/1');
    return;
  }

  const response = await Api.getShips(pageNumber);

  response.results.map((ship) => shipsList.push(ship));
});
</script>
