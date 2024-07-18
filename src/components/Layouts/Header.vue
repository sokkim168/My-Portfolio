<template>
  <div class="flex flex-col xl:px-36 lg:px-36 md:px-20 sm:px-5 fixed top-0 left-0 right-0" style="background-color: #181818">
    <nav class="flex flex-col justify-between">

      <div class="hidden max-sm:block w-full flex-auto">
          <div class="py-2 flex items-center">
            <button class="px-3 w-auto h-full" @click="visible=!visible">
              <svg v-if="!visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
      </div>

      <div :class="`w-full max-sm:relative`">
        <div :class="`${viewMenu} sm:block sm:flex max-sm:absolute text-white flex justify-between text-md gap-8 items-center max-sm:gap-0 max-sm:text-sm max-sm:flex-col max-sm:h-52 w-full top-0 left-0 py-2 max-sm:p-2 max-sm:bg-gray-900 max-sm:bg-opacity-85`">
          <a href="#home" class="hover:text-green-600 max-sm:text-center" @click="visible=false">Home</a>
          <a href="#about" class="hover:text-green-600 max-sm:text-center" @click="visible=false">About Me</a>
          <a href="#experience" class="hover:text-green-600 max-sm:text-center" @click="visible=false">Experiences</a>
          <a href="#skill" class="hover:text-green-600 max-sm:text-center"  @click="visible=false">Skills</a>
          <a href="#contact" class="hover:text-green-600 max-sm:text-center"  @click="visible=false">Contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { ref, computed  } from 'vue'
  const visible = ref(false)
  const viewMenu = computed(() =>  {
    if(visible.value){
      return 'none';
    }else{
      return 'hidden';
    }
  })

</script>

<style>
  .black-color {
    background: #181818;
  }
</style>