<template>
  <div class="main">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@use "./assets/scss/variables.scss" as *;
@use "./assets/scss/buttons.scss" as *;
@use "./assets/scss/grid.scss" as *;

body{
  font-family:$main-font;
  background-color: $body-background;
  a{
    text-decoration: none;
  }
}

label{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: center;


}

input{
  background-color:$input-main;
  border: none;
  border-radius: 5px;
  line-height: 200%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  &:focus{
      outline-color: $input-outline;
    }
}

</style>