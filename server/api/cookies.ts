export default defineEventHandler((event) => {

    // สร้างคุกกี้ใหม่
    setCookie(event, 'myCookie', 'myCookieValue', {
        httpOnly: true, // ป้องกันการอ่านคุกกี้จาก JavaScript
        maxAge: 60 * 60 * 24, // คุกกี้มีอายุ 1 วัน
        secure: process.env.NODE_ENV === 'production' // ใช้ https เฉพาะใน production
    })

    // อ่านคุกกี้จาก Request
    const cookies = parseCookies(event)
    console.log(cookies)

    return {
        message: 'Cookies has been set',
        cookies
    }
})