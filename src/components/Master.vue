<template>
  <div class="flex flex-col h-screen">
    <main class="flex-auto">
      <div class="relative">
        <Header></Header>
        <slot></slot>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/Layouts/Header.vue'
import Footer from '@/components/Layouts/Footer.vue'
</script>

<style lang="scss" scoped>

</style>