<script setup lang="ts">

    const posts = ref([
        { id: 1, title: 'First Post', published: true, author: 'John Doe', createdAt: '2024-01-01' },
        { id: 2, title: 'Second Post', published: false, author: 'Jane Smith', createdAt: '2024-01-02' },
        // เพิ่มข้อมูลตัวอย่างเพิ่มเติมได้
    ])

    const viewPost = (id: number) => {
        alert(`View post with ID: ${id}`)
    }

    const editPost = (id: number) => {
        alert(`Edit post with ID: ${id}`)
    }

    const deletePost = (id: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            alert(`Deleted post with ID: ${id}`)
        }
    }

    definePageMeta({
        layout: 'backend',
    })

    useHead({
        title: 'Posts',
        meta: [
        { 
            name: 'keywords', 
            content: 'Posts, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Posts Nuxt 3,  IT Genius Engineering'
        }
        ]
    })

</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">Posts</h2>
        <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Published</th>
                <th>Author</th>
                <th>Created At</th>
                <th>Manage</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.published ? 'Yes' : 'No' }}</td>
                <td>{{ post.author }}</td>
                <td>{{ post.createdAt }}</td>
                <td class="space-x-2">
                <button class="btn btn-sm btn-primary" @click="viewPost(post.id)">View</button>
                <button class="btn btn-sm btn-warning" @click="editPost(post.id)">Edit</button>
                <button class="btn btn-sm btn-error" @click="deletePost(post.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<style scoped>

</style>