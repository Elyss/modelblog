<template>
    <div class="header-main">
        <div class="topgrid">
            <div class="logo">
                <span id="mutine">Mutine</span>
                <span id="louise">Louise</span>
            </div>
            <div class="menu">
                <nav id="desktop-nav">
                    <NuxtLink to="/">Moi, moi & M<i class="material-icons">favorite</i>i</NuxtLink>
                    <NuxtLink to="tarifs"><small></small>Menu <small>(des)</small> plaisirs</NuxtLink>
                    <NuxtLink to="/gallery">Gallerie</NuxtLink>
                    <NuxtLink v-if="!isAuthenticated" to="Login"><i class="material-icons">key</i></NuxtLink>
                    <Logout></Logout>
                </nav>
                <div id="slogan">Élegante et Désinvolte Muse Parisienne...</div>
            </div>
            <nav id="mobile-nav">
                <div class="mobile-nav-wrapper">
                    <i class="material-icons">menu</i>
                </div>
            </nav>
        </div>
        <div class="underline">
            Élegante et Désinvolte Muse Parisienne...
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const token = ref(null)

onMounted(() => {
  // This will only run on the client
  token.value = localStorage.getItem("token")
})

const isAuthenticated = computed(() => !!token.value)
</script>


<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

@font-face {
  font-family: "Josephsophia";
  src: url("../assets/fonts/josephsophia.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}



.header-main{
    background-color: $body-background;
    margin: 0px;
    
}

.topgrid{
    display: flex;
    flex-direction: row;

}

.logo{
    display: flex;
    flex-direction: column;
    font-family: "Josephsophia";
    background-color: white;
    border-radius: 0rem 4rem 0rem 0rem;
    min-width: 250px;
    padding: 0rem 1rem;
    border-radius: 0rem 3rem 0rem 3rem;
    
    #mutine{
        text-align: left;
        font-size: 3rem;
        color: $pink;
        padding-top: 1rem;
    }
    #louise{
        text-align: right;
        font-size: 6rem;
        color: $green;
        margin-top: -2rem;
    }
}

.menu{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-around;
    border-radius: 0rem 0rem 3rem 0rem;
    
    background-color: white;

    nav{
        background-color: $very-pale-pink;
        flex-grow: 1;
        border-radius: 0rem 0rem 3rem 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #mobile-nav{
        display: none;
    }

    #slogan{
        background-color: white;
        color: $pink;
        padding: 1rem;
        font-family: "Josephsophia";
        font-size: 2rem;
        border-radius: 0rem 3rem 3rem 0rem;

    }
}
.underline{
    display: none;
    justify-content: center;
    font-family: "Josephsophia";
    color: $pink;
    background-color: white;
    font-size: 2rem;
}
#mobile-nav{
    display: none;
}
@media (max-width: 600px) {
        .menu{
            display: none;
        }
        #mobile-nav{
            display: flex;
            flex-grow: 1;
            justify-content: center;
            color: $pink;
            background-color: white;
            i{
                font-size: 3rem;
            }
        }
        .mobile-nav-wrapper{
            display: flex;
            flex-grow: 1;
            justify-content: center;
            color: $pink;
            background-color: $very-pale-pink;
            border-radius: 0rem 0rem 0rem 3rem;
        }
        .logo{
        border-radius: 0rem 3rem 0rem 0rem;

        }
        .logo #louise{
            margin-top: -1rem;
        }
        .underline{
            display: flex;
        }
    }
</style>