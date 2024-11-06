// GET: http://localhost:3000/api/sample

export default defineEventHandler((event) => {
    return {
        name: 'Sample API from server/api/sample.ts',
    }
})