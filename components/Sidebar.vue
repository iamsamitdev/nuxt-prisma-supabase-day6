<script setup lang="ts">
  import { useSupabaseClient } from '#imports'

  // สร้าง Supabase Client และ Router
  const supabase = useSupabaseClient()
  const router = useRouter()

  // ฟังก์ชัน Logout
  const handleLogout = async () => {
    // เรียกใช้ Supabase API เพื่อ logout
    await supabase.auth.signOut()

    // ลบ Cookie
    const authToken = useCookie('auth_token')
    authToken.value = null // เคลียร์ค่า Cookie

    // Redirect ไปที่หน้า login
    router.push('/login')
  }
</script>

<template>
  <aside class="bg-gray-800 text-white w-64 min-h-screen p-4">
    <nav class="space-y-4">
      <NuxtLink to="/backend/dashboard" class="block text-lg font-semibold hover:bg-gray-700 p-2 rounded">Dashboard</NuxtLink>
      <NuxtLink to="/backend/posts" class="block text-lg font-semibold hover:bg-gray-700 p-2 rounded">Posts</NuxtLink>
      <NuxtLink to="/backend/users" class="block text-lg font-semibold hover:bg-gray-700 p-2 rounded">Users</NuxtLink>
      
      <!-- ปุ่ม Logout -->
      <button @click="handleLogout" class="block w-full text-left text-lg font-semibold hover:bg-gray-700 p-2 rounded">
        Logout
      </button>
    </nav>
  </aside>
</template>