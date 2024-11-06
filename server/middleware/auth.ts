export default defineEventHandler((event) => {
    event.context.auth = {
        user: 'john',
        role: 'admin',
        permissions: ['read', 'write']
    }
    
    // console.log(event.context.auth)
})