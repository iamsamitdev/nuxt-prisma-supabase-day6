export default defineEventHandler((event) => {
    // handle GET requests for the `api/cart` endpoint
    return {
        statusCode: 200,
        message: 'GET request to /api/cart',
    }
})