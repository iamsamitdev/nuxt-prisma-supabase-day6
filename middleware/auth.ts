import { useSupabaseClient } from '#imports'

export default defineNuxtRouteMiddleware(async (to, from) => {
    // เข้าถึงค่า Cookie
    const token = useCookie('auth_token').value

    if (!token) {
        return navigateTo('/login')
    }

    // ตรวจสอบ token กับ Supabase (optional)
    const supabase = useSupabaseClient()
    const { data: user, error } = await supabase.auth.getUser(token)

    if (error || !user) {
        return navigateTo('/login')
    }
})