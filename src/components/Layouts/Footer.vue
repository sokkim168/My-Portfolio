<template>
  <div class="w-full">
    <footer class="bg-gray-800 text-white p-3">
      <div class="flex justify-center max-sm:flex-col w-full gap-3">
        <div class="w-full flex flex-row gap-2 items-center justify-center">
          <font-awesome-icon class="text-lg text-gray-400 rounded-full" :icon="['fas', 'copyright']" />
          <p class="noto-serif-300 text-xs">Copyright {{ fullYear }}</p>
          <p class="noto-serif-300 text-xs">~ Powered by @sokkim.dev (●'◡'●)</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const date = new Date();
  const fullYear = date.getFullYear();
</script>

<style lang="scss" scoped>

</style>