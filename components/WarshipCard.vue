<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-[300ms] cursor-pointer"
  >
    <img src="../public/warship.jpeg" class="rounded-t-[12px]" />

    <div class="px-[24px] py-[16px]">
      <div class="font-bold text-xl mb-2">{{ props.ship.name }}</div>

      <p class="text-gray-700 text-base">
        <strong>Model:</strong> {{ props.ship.model }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Manufacturer:</strong> {{ props.ship.manufacturer }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Cost in Credits:</strong> {{ props.ship.cost_in_credits }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Length:</strong> {{ props.ship.length }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Crew:</strong> {{ props.ship.crew }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Passengers:</strong> {{ props.ship.passengers }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Hyperdrive Rating:</strong> {{ props.ship.hyperdrive_rating }}
      </p>

      <p class="text-gray-700 text-base">
        <strong>Starship Class:</strong> {{ props.ship.starship_class }}
      </p>
    </div>

    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        #StarWars
      </span>

      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        #Starship
      </span>

      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        #{{ props.ship.name.replace(/\s+/g, '') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Starship } from '../types/ships';

useSeoMeta({
  ogImage: '../public/warship.jpeg',
});

const props = defineProps<{ ship: Starship }>();
</script>
