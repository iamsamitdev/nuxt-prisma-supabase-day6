export default defineEventHandler((event) => {
    return {
        statusCode: 201,
        message: 'Test POST Handler',
    }
})