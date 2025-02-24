<template>
        <button v-if="isAuthenticated" @click="logout">Logout</button>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const token = ref(null)
onMounted(() => {
    // This will only run on the client
    token.value = localStorage.getItem("token")
})
const isAuthenticated = computed(() => !!token.value);


const logout = () => {
    localStorage.removeItem("token"); // ✅ Remove token
    router.push("/login"); // ✅ Redirect to login
};
</script>
