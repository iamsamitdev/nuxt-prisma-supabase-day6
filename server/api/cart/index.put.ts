export default defineEventHandler((event) => {
    // handle PUT requests for the `api/cart` endpoint
    return {
        statusCode: 202,
        message: 'PUT request to /api/cart',
    }
})