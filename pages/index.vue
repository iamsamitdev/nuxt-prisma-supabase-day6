<script setup lang="ts">

    useHead({
        title: 'Home',
        meta: [
        { 
            name: 'keywords', 
            content: 'Home, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Home Nuxt 3,  IT Genius Engineering'
        }
        ]
  })

</script>

<template>
    
    <section class="bg-base-200 py-24 flex flex-col items-center text-center space-y-8">
        <h1 class="text-4xl font-bold">Engage with your <br /> customers on a new level</h1>
        <p class="text-lg max-w-md">
        World among the stalks, and grow familiar with the countless indescribable forms of the insects and flies
        </p>
        <div class="flex space-x-4">
        <button class="btn btn-primary">Try NuxtPrisma for free</button>
        <button class="btn btn-outline">View demo</button>
        </div>
        <img src="/public/images/mockup.jfif" alt="Mockup" class="rounded-lg shadow-lg max-w-2xl" />
    </section>

    <section  class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-6">
      <img
        src="/public/images/feature1.jfif"
        alt="Image 1"
        class="rounded-lg shadow-lg"
      />
      <div>
        <h2 class="text-2xl font-bold mb-4">
          So if on advanced addition absolute received replying
        </h2>
        <p class="text-gray-600">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the waiting be females upper surface of the
          impenetrable foliage of my trees
        </p>
      </div>
    </section >

    <section  class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-6">
      <div class="order-2 md:order-1">
        <h2 class="text-2xl font-bold mb-4">
          So if on advanced addition absolute received replying
        </h2>
        <p class="text-gray-600">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the waiting be females upper surface of the
          impenetrable foliage of my trees
        </p>
      </div>
      <img
        src="/public/images/feature2.jfif"
        alt="Image 2"
        class="rounded-lg shadow-lg order-1 md:order-2"
      />
    </section >
</template>

<style scoped>

</style>