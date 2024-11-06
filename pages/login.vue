<script setup lang="ts">

  import { useSupabaseClient } from '#imports'

  // ตัวแปรสำหรับการทำ routing ระหว่างหน้า
  const router = useRouter()

  // สร้างตัวแปรสำหรับเก็บค่า email และ password ที่ผู้ใช้กรอกเข้ามา
  const email = ref('')
  const password = ref('')
  const phone = ref('+66')

  // สร้างตัวแปรสำหรับเก็บข้อความแสดงผล
  const message = ref('')
  const status = ref(false)

  // สร้างตัวแปรสำหรับเรียกใช้งาน Supabase Client
  const supabase = useSupabaseClient()

  // ฟังก์ชันเข้าสู่ระบบด้วยอีเมลและรหัสผ่าน
  const handleLogin = async () => {
      // console.log('email:', email.value)
      // console.log('password:', password.value)
      // Valideate ข้อมูลที่ผู้ใช้กรอกเข้ามา แบบ if else บ้านๆ
      if (!email.value || !password.value) {
          message.value = 'Please enter both email and password.'
          status.value = false
          return
      }

      try {
          // ใช้ supabase.auth.signInWithPassword() เพื่อสมัครสมาชิก
          const { data, error } = await supabase.auth.signInWithPassword({
              email: email.value,
              password: password.value,
          })

          if (error) throw error

          // หาก login สำเร็จให้นำ access token ไปเก็บไว้ใน cookie
          const token = data.session?.access_token

          console.log('token:', token)

          if (token) {
            const authTokens: any = useCookie('auth_token') // กำหนดชื่อ cookie ที่เก็บ token
            authTokens.value = token
            authTokens.options = { expires: 7 } // กำหนดเวลาในการเก็บ cookie 7 วัน
          }

          message.value = 'Login successful!'
          status.value = true

          // Delay ไว้ 2 วินาที แล้ว redirect ไปหน้า dashboard
          await new Promise(resolve => setTimeout(resolve, 2000))
          router.push('/backend/dashboard')

      } catch(error: unknown) {
          if(error instanceof Error) {
              message.value = error.message
              status.value = false
          } else {
              message.value = 'An unknown error occurred'
              status.value = false
          }
      }
  }

  // ฟังก์ชันเข้าสู่ระบบด้วยเบอร์โทรศัพท์
  const handleLoginWithPhone = async () => {
        if (!phone.value) {
            message.value = 'Please enter your phone number.'
            status.value = false
            return
        }

        try {
            const { error } = await supabase.auth.signInWithOtp({
                phone: phone.value,
            })

            if (error) throw error

            // บันทึกเบอร์โทรศัพท์ใน localStorage
            localStorage.setItem('phone', phone.value)

            message.value = 'OTP sent! Please check your phone for the verification code.'
            status.value = true

            // Redirect ไปหน้า verify OTP
            router.push('/verify')

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

  // ไว้กำหนด Meta ของหน้าเว็บ เช่น title, description, keyword รวมทั้ง layout ที่ใช้
  definePageMeta({
      layout: 'auth',
  })

  useHead({
      title: 'Login',
      meta: [
      { 
          name: 'keywords', 
          content: 'Login, Nuxt 3, Backend'
      },
      {
          name: 'Description',
          content: 'Login Nuxt 3,  IT Genius Engineering'
      }
      ]
  })

</script>

<template>
    <div class="bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center">
      <div class="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure class="lg:w-1/2">
          <img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="Random image" class="object-cover w-full h-full" />
        </figure>
        <div class="card-body lg:w-1/2">
          <h2 class="card-title text-2xl font-bold mb-6">Login</h2>
  
          <!-- ฟอร์มเข้าสู่ระบบด้วยอีเมล -->
          <form @submit.prevent="handleLogin">

            <p v-if="message" :class="status ? 'bg-success': 'bg-error'" class="p-3 rounded-lg text-white">
                {{ message}} 
            </p>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input v-model="email" type="email" class="grow" placeholder="email@example.com" />
              </label>
            </div>
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input v-model="password" type="password" class="grow" placeholder="Enter password" />
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary w-full">Login with Email</button>
            </div>
          </form>
  
          <!-- Divider สำหรับแบ่งส่วน -->
          <div class="divider">OR</div>
  
          <!-- ฟอร์มเข้าสู่ระบบด้วยเบอร์โทรศัพท์ -->
          <form @submit.prevent="handleLoginWithPhone">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input v-model="phone" type="tel" class="grow" placeholder="+1234567890" />
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary w-full">Login with Phone</button>
            </div>
          </form>
  
          <div class="text-center mt-4">
            <p>Don't have an account?</p>
            <NuxtLink to="/register" class="link link-primary">Sign up now</NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>