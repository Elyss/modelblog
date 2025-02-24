<template>
  <div class="main-app">
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
  margin:0;
  padding: 0;
}
a, a:visited{
  text-decoration: none;
  color: $link-primary;

  &:hover{
    color: $link-visited;
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
      outline:2px solid $input-outline;
    }
}


.material-icons{
    font-size: 1rem;
    line-height: 1; // Ensures the icon is properly aligned with the text
    vertical-align: middle; // Aligns the icon to the text baseline
    display: inline-flex; // Ensures proper positioning inside flex elements
    align-items: center;
    justify-content: center;
}

.main-app{
  max-width: 1000px;
  margin: auto;
}

</style>