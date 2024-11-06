// DELTE: http://localhost:3000/api/posts/:id
import { PrismaClient }  from "@prisma/client"

// Instance of PrismaClient
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    // Get id from params
    const id = getRouterParam(event, 'id')

    if(!id){
        throw createError(
            {
                statusCode: 400,
                message: 'Invalid id'
            }
        )
    } else {
        // DELETE FROM post WHERE id = id
        const post = await prisma.post.delete({
            where: {
                id: Number(id)
            }
        })
        return {
            statusCode: 200,
            body: post
        }
    }

})