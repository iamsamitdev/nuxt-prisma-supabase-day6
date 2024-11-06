<script setup lang="ts">

  import { useSupabaseClient } from '#imports'

  // ตัวแปรสำหรับเก็บข้อมูล OTP และข้อความแจ้งเตือน
  const otp = ref('')
  const message = ref('')
  const status = ref(false)

  // Supabase Client และ Router
  const supabase = useSupabaseClient()
  const router = useRouter()

  // ฟังก์ชันยืนยัน OTP
  const handleVerifyOTP = async () => {
    if (!otp.value) {
      message.value = 'Please enter the OTP.'
      status.value = false
      return
    }

    try {
      // ยืนยัน OTP กับ Supabase
      const { data, error } = await supabase.auth.verifyOtp({
        phone: localStorage.getItem('phone') as string,
        token: otp.value,
        type: 'sms', // ประเภทการยืนยัน OTP ผ่าน SMS
      })

      if (error) throw error

      // ถ้าสำเร็จ เก็บ access_token ลงใน cookies
      const token = data.session?.access_token
      if (token) {
        const authToken:any = useCookie('auth_token')
        authToken.value = token
        authToken.options = { expires: 7 } // กำหนดวันหมดอายุของ cookie
      }

      message.value = 'Verification successful!'
      status.value = true

      // พาไปยังหน้า dashboard
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/backend/dashboard')

    } catch (error: unknown) {
      if (error instanceof Error) {
        message.value = error.message
        status.value = false
      } else {
        message.value = 'An unknown error occurred'
        status.value = false
      }
    }
  }


  definePageMeta({
          layout: 'auth',
  })

  useHead({
          title: 'Verify OTP',
          meta: [
          { 
              name: 'keywords', 
              content: 'Verify OTP, Nuxt 3, Backend'
          },
          {
              name: 'Description',
              content: 'Verify OTP Nuxt 3,  IT Genius Engineering'
          }
          ]
  })

</script>

<template>
    <div class="bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center">
      <div class="card bg-base-100 shadow-xl max-w-md w-full p-6">
        <h2 class="card-title text-2xl font-bold mb-6">Verify OTP</h2>

        <p v-if="message" :class="status ? 'bg-success' : 'bg-error'" class="p-3 rounded-lg text-white mb-4">
          {{ message }}
        </p>
  
        <form @submit.prevent="handleVerifyOTP">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter OTP</span>
            </label>
            <input v-model="otp" type="text" class="input input-bordered w-full" placeholder="Enter OTP" />
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary w-full">Verify OTP</button>
          </div>
        </form>
      </div>
    </div>
</template>

<style scoped>

</style>