<script setup lang="ts">
  import ComponentHeader from './Layouts/Header.vue'
  import Footer from './Layouts/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <header>&nbsp;</header>
    <main class="flex-auto">
      <div class="relative">
        <ComponentHeader></ComponentHeader>
        <slot></slot>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

