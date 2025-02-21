<template>
    <div class="main">
        <form action="" @submit.prevent="">
            <label for="email">
                <p>Email</p>
                <input type="text" v-model="email" name="email" id="email">
            </label>
            <label for="password">
                Mot de passe
                <input type="password" v-model="password" name="password" id="password">
            </label>
            <div class="action-buttons">
                <NuxtLink to='/' class="btn-secondary-discreet"><span>Annuler</span></NuxtLink>
                <button class="btn-primary" @click="login"><i class="material-icons">lock</i><span>Login</span></button>
            </div>
            <div v-if="error_message">{{ error_message }}</div>
        </form>
    </div>
</template>


<script setup>

import {ref} from 'vue'
import { useRouter } from "vue-router";

const email = ref('')
const password = ref('')
const error_message = ref('')
const router = useRouter();

const login = async ()=>{

    try {
        const response = await fetch("/api/auth/login",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({email:email.value,password:password.value}),
        })
        const data = await response.json()
        console.log(data.message)
        

        if(data.success){
            console.log("success")
            localStorage.setItem("token",data.token) // stocke le token
            router.push("/");
        }
        else{

        }

    } catch (error) {
        console.log(error)
    }

}

</script>

<style lang="scss" scoped>
.main{
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border-radius: 5px;
    background-color: white;
}


</style>