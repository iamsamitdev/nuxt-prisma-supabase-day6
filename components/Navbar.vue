<script setup lang="ts">
    const isMenuOpen = ref(false)
</script>

<template>
    <nav class="navbar bg-base-100 shadow-lg px-4 fixed top-0 left-0 w-full z-50">

        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <div class="flex-1">
            <a class="text-xl font-bold">NuxtPrisma</a>
            </div>

            <!-- Hamburger Icon (Mobile) -->
            <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>

            <!-- Menu Items (Desktop) -->
            <div class="hidden md:flex flex-none">
                <ul class="menu menu-horizontal p-0 space-x-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><NuxtLink to="/login" class="font-semibold">Sign in</NuxtLink></li>
                </ul>
            </div>
        </div>

        <!-- Dropdown Menu (Mobile) -->
        <div
            v-if="isMenuOpen"
            class="fixed inset-0 bg-base-100 bg-opacity-95 z-40 md:hidden flex flex-col items-center justify-center"
        >
            <!-- Close Button -->
            <button @click="isMenuOpen = false" class="btn btn-ghost btn-circle absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            
            <ul class="menu menu-vertical space-y-4 text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><NuxtLink to="/login" class="font-semibold">Sign in</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>

</style>