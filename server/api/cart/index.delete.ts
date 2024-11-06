export default defineEventHandler((event) => {
    // handle DELETE requests for the `api/cart` endpoint
    return {
        statusCode: 203,
        message: 'DELETE request to /api/cart',
    }
})