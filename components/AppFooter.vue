<template>
  <footer class="text-center py-5 text-base font-light">
    <div class="flex justify-center gap-4">
      <button
        @click="goToPrevPage"
        :disabled="isPrevButtonDisabled"
        class="bg-blue-500 disabled:bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <
      </button>
      <button
        @click="goToNextPage"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        >
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute();

const isPrevButtonDisabled = computed(() => {
  const pageNumber = Number(route.params.pageNumber);

  if (pageNumber === 1) {
    return true;
  }

  return false;
});

function goToNextPage() {
  const pageNumber = Number(route.params.pageNumber);

  navigateTo(`/page/${pageNumber + 1}`);
}

function goToPrevPage() {
  const pageNumber = Number(route.params.pageNumber);

  navigateTo(`/page/${pageNumber - 1}`);
}
</script>
