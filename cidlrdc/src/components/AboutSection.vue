<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      About Section
    ============================-->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <h2>À propos de l'événement</h2>
            <p>
              La conférence internationale sur le développement local en RD-Congo, deuxième édition, 
              est une initiative citoyenne d’appropriation du programme de développement à la base en cours dans le pays. Elle vise l’échange d’expérience et le renforcement des capacités entre le groupe d’experts, élus et dirigeants locaux, chefs d’entreprises d’Australie, du Canada et des pays africains ayant réussi des modèles économiques basés sur le développement local pour inspirer les participants des 145 territoires de la RDC. 
            </p>
            <p>
              La vision de la conférence est la mobilisation des ressources de la diaspora en complémentarité avec le gouvernement de la RDC et les communautés locales pour la réalisation de trois objectifs opérationnels ci-après : 
            </p>
            <p>  
              <li>Création d’un fonds d’investissement comme réponse au déficit d’une banque 
                spécialisée dans l’accompagnement de l’entrepreneuriat et du tiers secteur au 
                plus bas niveau de l'échelle communautaire</li> 
              <li>Lancement d’un incubateur pour la création d’emplois stratégiques en faveur des 
                étudiants, des jeunes-adultes et des femmes, des catégories de la population très 
                touchées par la pauvreté </li>
              <li></li>  
              <li>Lutte contre l’exode rural et l'émigration des cerveaux.</li>       
            </p>
          </div>
          <div class="col-lg-3">
            <h3>Où</h3>
            <p>Centre des congrès et des expositions de Melbourne</p>
            <br>
            <h3>Quand</h3>
            <p>Du lundi au mercredi<br>13 au 15 Mars</p>
            <br>
            <img src="../assets/img/speakers/1.jpg" class="img-fluid" alt="Responsive image">
            <h3>Eric Mwamba</h3>
            <p>Initiateur de la<br>Conference</p>
            <br>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
