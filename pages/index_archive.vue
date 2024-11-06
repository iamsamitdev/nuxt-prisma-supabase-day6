<script setup lang="ts">
    // Fetch data from API
    const { data } = useFetch('/api/sample')

    // สร้างฟังก์ชัน submit สำหรับส่งข้อมูลไปยัง API
    async function submit() {
        // ใช้ $fetch แทน UseFetch เมื่อเรียกข้อมูลหลังจากที่คอมโพเนนต์ได้ mount ไปแล้ว
        const response = await $fetch('/api/submit', {
            method: 'POST',
            body: { test: 1234}
        })

        console.log(response)
    }

    // ทดสอบเรียก Cookies จากฝั่ง Client
    const cookieValue = ref('')
    function getCookies() {
        // พยายามดึงคุกกี้ทั้งหมดที่เข้าถึงได้จากฝั่งไคลเอนต์
        const cookies = document.cookie
        console.log('Client-side Cookies:', cookies)

        // แสดงผลลัพธ์ในหน้าจอเพื่อให้เห็นค่าคุกกี้
        cookieValue.value = cookies.includes('myCookie') ? 'myCookie Found' : 'myCookie Not Found'
    }


</script>
<template>
    <pre>{{ data }}</pre>
    <button @click="submit">Submit</button>

    <p><button @click="getCookies">Get Cookies</button></p>
    <p>{{ cookieValue }}</p>
</template>

<style scoped>

</style>