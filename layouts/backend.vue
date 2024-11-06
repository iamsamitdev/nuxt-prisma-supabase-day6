<script setup lang="ts">
</script>

<template>
    <div class="flex">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col min-h-screen">
        <Header />
        <main class="flex-1 p-4">
          <slot />
        </main>
      </div>
    </div>
</template>
  

<style scoped>
/* Add any additional styling if needed */
</style>
  