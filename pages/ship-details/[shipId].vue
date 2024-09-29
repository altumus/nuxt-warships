<template>
  <AppLoader class="mx-auto" v-if="isLoading && !isErrorOccured" />

  <ErrorFetch v-if="!isLoading && isErrorOccured" />

  <div v-if="!isLoading && !isErrorOccured" class="container mx-auto p-4">
    <header class="text-center py-5 text-2xl font-light">
      {{ currentShipInfo.name }}
    </header>
    <img
      src="../../public/warship.jpeg"
      class="w-full object-cover object-bottom rounded-t-[20px] h-[300px]"
    />
    <main class="bg-white rounded-lg shadow-lg p-6">
      <div class="mb-4">
        <h2 class="text-xl font-semibold">Details</h2>
        <ul class="list-disc list-inside">
          <li><strong>Model:</strong> {{ currentShipInfo.model }}</li>
          <li>
            <strong>Manufacturer:</strong> {{ currentShipInfo.manufacturer }}
          </li>
          <li>
            <strong>Cost in Credits:</strong>
            {{ currentShipInfo.cost_in_credits }}
          </li>
          <li><strong>Length:</strong> {{ currentShipInfo.length }}</li>
          <li><strong>Crew:</strong> {{ currentShipInfo.crew }}</li>
          <li><strong>Passengers:</strong> {{ currentShipInfo.passengers }}</li>
          <li>
            <strong>Hyperdrive Rating:</strong>
            {{ currentShipInfo.hyperdrive_rating }}
          </li>
          <li>
            <strong>Starship Class:</strong>
            {{ currentShipInfo.starship_class }}
          </li>
        </ul>
      </div>
      <div class="mt-6">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="goBack"
        >
          Back to List
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import * as Api from '../../services/warships.service';
import type { Starship } from '../../types/ships';

import AppLoader from '../../components/AppLoader.vue';
import ErrorFetch from '../../components/ErrorFetch.vue';

useSeoMeta({
  ogImage: '../../public/warship.jpeg',
});

definePageMeta({
  layout: 'details',
});

const route = useRoute();
const router = useRouter();

const isLoading = ref(true);
const isErrorOccured = ref(false);

const currentShipInfo = reactive({}) as Starship;

onMounted(async () => {
  const shipId = Number(route.params.shipId);

  if (Number.isNaN(shipId)) {
    navigateTo('/page/1');
    return;
  }

  try {
    const response = await Api.getShipById(shipId);
    Object.assign(currentShipInfo, response);
  } catch (error) {
    isErrorOccured.value = true;
  } finally {
    isLoading.value = false;
  }
});

function goBack() {
  router.back();
}
</script>
