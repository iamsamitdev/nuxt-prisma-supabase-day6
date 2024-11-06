<script setup lang="ts">

    import { useSupabaseClient } from '#imports'

    // ตัวแปรสำหรับการทำ routing ระหว่างหน้า
    const router = useRouter()

    // สร้างตัวแปรสำหรับเก็บค่า email และ password ที่ผู้ใช้กรอกเข้ามา
    const email = ref('')
    const password = ref('')

    // สร้างตัวแปรสำหรับเก็บข้อความแสดงผล
    const message = ref('')
    const status = ref(false)

    // สร้างตัวแปรสำหรับเรียกใช้งาน Supabase Client
    const supabase = useSupabaseClient()

    // ฟังก์ชันสำหรับการสมัครสมาชิก
    const handleRegister = async () => {
        // console.log('email:', email.value)
        // console.log('password:', password.value)
        // Valideate ข้อมูลที่ผู้ใช้กรอกเข้ามา แบบ if else บ้านๆ
        if (!email.value || !password.value) {
            message.value = 'Please enter both email and password.'
            status.value = false
            return
        }

        try {
            // ใช้ supabase.auth.signUp() เพื่อสมัครสมาชิก
            const { error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
            })

            if (error) throw error

            message.value = 'Registration successful! Please check your email for a confirmation link.'
            status.value = true

            // Delay ไว้ 2 วินาที แล้ว redirect ไปหน้า login
            await new Promise(resolve => setTimeout(resolve, 2000))
            router.push('/login')

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

    // ไว้กำหนด Meta ของหน้าเว็บ เช่น title, description, keyword รวมทั้ง layout ที่ใช้
    definePageMeta({
        layout: 'auth',
    })

    useHead({
        title: 'Register',
        meta: [
        { 
            name: 'keywords', 
            content: 'Register, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Register Nuxt 3,  IT Genius Engineering'
        }
        ]
    })

</script>

<template>
    <div class="bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center">
        <div class="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure class="lg:w-1/2">
            <img src="https://www.apla.world/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_background.d376e1cc.png&w=3840&q=75" alt="Random image" class="object-cover w-full h-full" />
        </figure>
        <div class="card-body lg:w-1/2">
            <h2 class="card-title text-2xl font-bold mb-6">Register</h2>

            <p v-if="message" :class="status ? 'bg-success': 'bg-error'" class="p-3 rounded-lg text-white">
                {{ message}} 
            </p>

            <form @submit.prevent="handleRegister">
            <div class="form-control">
                <label class="label">
                <span class="label-text">Email</span>
                </label>
                <label class="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input v-model="email" type="email" class="grow" placeholder="email@example.com" />
                </label>
            </div>
            <div class="form-control mt-4">
                <label class="label">
                <span class="label-text">Password</span>
                </label>
                <label class="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                    <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" />
                </svg>
                <input v-model="password" type="password" class="grow" placeholder="Enter password" />
                </label>
            </div>
            <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
            </form>
            <div class="divider">OR</div>
            <div class="text-center">
            <p>Already have an account?</p>
            <NuxtLink to="/login" class="link link-primary">Sign in</NuxtLink>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>

</style>