// GET: http://localhost:3000/sample

export default defineEventHandler((event) => {

    if(event.context.auth.role !== 'admin') {
        throw createError(
            {
                statusCode: 403,
                message: 'Unauthorized'
            }
        )
        
    }

    // ดำเนินการต่อหากผ่านการตรวจสอบสิทธิ์แล้ว
    return {
        message: `Welcome user ${event.context.auth.user}, Your have permission to ${event.context.auth.permissions}`
    }

    // return {
    //     name: 'Sample API from server/sample.ts',
    // }
})