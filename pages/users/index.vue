<template>
    Utilisateurs

    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>nom</th>
                <th>email</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

const fetch_users = async ()=>{
    try {
        const response = await fetch('/api/users')
        const data = await response.json()
        users.value = data.users
        
    } catch (error) {
        console.log("Fetching users failed:",error)
    }
}
onMounted(
    fetch_users
)

</script>

<style lang="scss">

    table{
        td,th{
            padding: 1rem;
            border: 1px solid black;
        }
    }

</style>