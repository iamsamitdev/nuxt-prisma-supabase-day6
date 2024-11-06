export default defineEventHandler((event) => {
    // handle POST requests for the `api/cart` endpoint
    return {
        statusCode: 201,
        message: 'POST request to /api/cart',
    }
})