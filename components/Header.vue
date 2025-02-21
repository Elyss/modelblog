<template>
    <nav>
        <NuxtLink to="/"><button>Home</button></NuxtLink>&nbsp;
        <NuxtLink to="tarifs"><button>Tarifs</button></NuxtLink>
        <NuxtLink v-if="!isAuthenticated" to="Login"><button>Login</button></NuxtLink>
        <Logout></Logout>
    </nav>
</template>

<script setup>
import { ref, computed } from "vue";

const isAuthenticated = computed(() => !!localStorage.getItem("token"));

</script>