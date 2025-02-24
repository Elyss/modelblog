<template>
    <Header></Header>
    <div class="home-main">
      <br>
      <div class="home-topline">
        <div class="img-container" ref="animatedImage">
          <img src="../assets/images/louise.png" alt="">
        </div>
        <div class="top-txt-container">
          <div id="second-slogan">
            <div class="wrapper">
              Audace <span class="pink">et</span> Adorabilité
            </div>
          </div>
          <div id="presentation">
            <p><span class="lettrine">I</span>l parait que ça fait plus sérieux d’avoir un site internet, alors voilà...</p>
            <p><span class="lettrine">U</span>n site avec pas grand chose,</p>
            <p><span class="lettrine">L</span> e nécessaire pour vous donner envie d’en découvrir plus…</p>
          </div>
        </div>
      </div>
      <br>
      <div class="home-secondline">
        <div id="slogan3">
          <div class="wrapper">
            ...et Courtisane Romantique
          </div>
        </div>
        <div id="enter">
          <div class="wrapper">
            <NuxtLink to="Moi" class="btn-primary">Entrer <i class="material-icons">favorite</i> </NuxtLink>
          </div>
        </div>
        <div class="disclaimer">
          <p>Ce site internet est réservé à un public majeur et averti et est conforme à toutes les réglementations françaises en vigueur. Les photos, textes et liens disponibles ici peuvent choquer certaines sensibilités. Pour y accéder, vous devez satisfaire aux exigences suivantes : – être majeur selon les lois en usage dans votre pays de résidence ou de connexion ; – que les lois de votre état ou votre pays vous autorisent à accéder à ce site ; – n’être choqué par aucun type de sexualité et vous interdire de poursuivre la société éditrice de toute action judiciaire ; – reconnaître que ce site et ses éditeurs ne sont pas responsables du contenu des liens vers lesquels il pointe. Ce site décrit les prestations d’une escorte indépendante. Il n’est aucunement lié à des services de prostitution mais uniquement à des services d’accompagnement. Toute autre relation résulterait d’un consentement mutuel entre adultes et serait complètement détachée de la prestation. Vous vous engagez sur l’honneur à : – consulter ce site à titre personnel sans impliquer de quelque manière que ce soit une société privée ou un organisme d’état; – ne pas faire connaître ce site à des mineurs ni à toute autre personne qui ne jouirait pas de ses entières capacités intellectuelles; – mettre en œuvre tous les moyens existants permettant d’interdire l’accès de ce site, quelle que soit la forme de cet accès, à un mineur ou à toute autre personne qui ne jouirait pas de ses entières capacités intellectuelles; – assumer toutes responsabilités juridiques si un mineur ou toute autre personne qui ne jouirait pas de ses entières capacités intellectuelles accédait à ce site du fait de votre négligence : absence de protection de l’ordinateur, absence de logiciel de censure, divulgation ou perte du mot de passe de sécurité; – assumer toutes responsabilités si une ou plusieurs des présentes déclarations sont inexactes. Vous certifiez sur l’honneur avoir lu attentivement les paragraphes ci-dessus. En entrant dans ce site, vous acceptez les termes et les conditions.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import anime from 'animejs/lib/anime.es.js';
  
  export default {
    mounted() {
      const timeline = anime.timeline({
        easing: 'easeOutElastic(1, .7)',
        duration: 1000,
      });
  
      timeline.add({
        targets: this.$refs.animatedImage,
        translateY: [-400, 0],
      }).add({
        targets: this.$refs.animatedImage,
        scale: [1, 1],
        duration: 500,
      });
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @use "../assets/scss/variables.scss" as *;
  
  .home-main {
    margin: 0;
    min-height: 100%;
  
    .img-container {
      min-width: 40%;
      max-width: 400px;
      aspect-ratio: 1/1;
      background-color: $pink;
      overflow: hidden;
      border-radius: 3rem 5rem 0 10rem;
      display: flex;
      position: relative;
  
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to top right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
        mix-blend-mode: multiply;
        pointer-events: none;
      }
  
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        scale: 1.8;
        display: block; // add this line
      }
    }
  
    .home-topline {
      display: flex;
      flex-direction: row;
    }
  
    .top-txt-container {
      display: flex;
      flex-direction: column;
      color: rgb(105, 105, 105);
      justify-content: center;
  
      #second-slogan {
        text-align: center;
        background-color: white;
  
        .wrapper {
          background-color: $very-pale-pink;
          padding: 2rem;
          font-family: "Josephsophia";
          font-size: 3rem;
          color: $green;
          border-radius: 0 0 0 4rem;
        }
      }
  
      #presentation {
        background-color: white;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-radius: 0 7rem 3rem 0;
        justify-content: center;
  
        p {
          margin: 0;
          padding: 1rem 3rem;
        }
      }
    }
  }

  .home-secondline{
    display: flex;
    flex-direction: column;
    p{
      font-size: 0.6rem;
      text-align: justify;
      color: $green;
      padding: 2rem;
    }
  }

  #slogan3{
    font-family: "Josephsophia";
    font-size: 3rem;
    color: $pink;
    background-color: $very-pale-pink;
    display: flex;
    .wrapper{
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: white;
      border-radius: 2rem 2rem 0rem 0rem;
      padding: 1rem;
    }

  }

  #enter{
    display: flex;
    background-color: white;
    .wrapper{
      background-color: $very-pale-pink;
      display: flex;
      width: 100%;
      justify-content: center;
      border-radius: 2rem 2rem 0rem 0rem;
      padding: 1rem;
    }
  }

  
  .pink {
    color: $pink;
  }

  .lettrine{
    color: $green;
    font-family: "Josephsophia";
    font-size: 3rem;
  }


  </style>