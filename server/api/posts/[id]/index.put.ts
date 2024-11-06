// PUT: http://localhost:3000/api/posts/:id
import { PrismaClient }  from "@prisma/client"

// Instance of PrismaClient
const prisma = new PrismaClient()

// Type for Post
type TPost = {
    title: string
    content: string
    published: boolean
}

export default defineEventHandler(async (event) => {

    // Get id from params
    const id = getRouterParam(event, 'id')

     // Get the request body
    const body = await readBody<TPost>(event)

    if(!id){
        throw createError(
            {
                statusCode: 400,
                message: 'Invalid id'
            }
        )
    } else {
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title: body.title,
                content: body.content,
                published: body.published
            }
        })

        return post
    }
})