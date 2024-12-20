<script setup lang="ts">
defineProps<{
  hostname: string
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
            <img src="@/assets/speakers/1.jpg" class="img-fluid" alt="Responsive image">
            <h3>{{ hostname }}</h3>
            <p>Initiateur de la<br>Conference</p>
            <br>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/

#about {
  background: url("@/assets/about-bg.jpg");
  background-size: cover;
  overflow: hidden;
  position: relative;
  color: #fff;
  padding: 60px 0 40px 0;
}

#about:before {
  content: "";
  background: rgba(13, 20, 41, 0.8);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#about h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

#about h3 {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #fff;
}

#about p {
  font-size: 14px;
  margin-bottom: 20px;
  color: #fff;
}
</style>
