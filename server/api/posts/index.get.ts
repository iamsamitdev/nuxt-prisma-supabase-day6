// GET: http://localhost:3000/api/posts?title=first
import { PrismaClient }  from "@prisma/client"

// Instance of PrismaClient
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    // รับ title จาก query string
    const query = getQuery(event)
    const title = query.title as string

    // Fetch all posts
    // SELECT id, title, content, published FROM post ORDER BY id DESC
    const posts = await prisma.post.findMany({
        where: {
            title: {
                contains: title, // ใช้ "contains" เพื่อค้นหาที่มีคำใน title
                mode: 'insensitive' // ไม่สนใจตัวพิมพ์เล็กหรือใหญ่
            }
        },
        select: {
            id: true,
            title: true,
            content: true,
            published: true
        },
        orderBy: {
            id: 'desc' // เรียงลำดับจากมากไปน้อย
        }
    })

    return posts

})