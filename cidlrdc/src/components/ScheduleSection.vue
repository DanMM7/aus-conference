<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      Schedule Section
    ============================-->
    <section id="schedule" class="section-with-bg">
      <div class="container wow fadeInUp">
        <div class="section-header">
          <h2>Événement programmé</h2>
          <p>Voici notre calendrier d'événements</p>
          <h3 class="sub-heading"> Télécharger le programme en PDF </h3>
          <div class="text-center">
              <a class="schedule-download" href="#">Télécharger</a>
          </div>
        </div>

        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" href="#day-1" role="tab" data-toggle="tab">Jour 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#day-2" role="tab" data-toggle="tab">Jour 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#day-3" role="tab" data-toggle="tab">Jour 3</a>
          </li>
        </ul>

        <div class="tab-content row justify-content-center">

          <!-- Schdule Day 1 -->
          <div role="tabpanel" class="col-lg-9 tab-pane fade show active" id="day-1">

            <div class="row schedule-item">
              <div class="col-md-2"><time>08:00 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/01.jpg" alt="Brenden Legros">
                </div>
                <h4>Enregistrement </h4>
                <p>Arrivée des participants, enregistrement et retrait des badges </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>08:30 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/1.jpg" alt="Brenden Legros">
                </div>
                <h4>Installations <span>Brenden Legros</span></h4>
                <p> Installations des participants </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>09:00 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/2.jpg" alt="Hubert Hirthe">
                </div>
                <h4>Discours de Bienvenue des Associations <span>Eric Mwamba</span></h4>
                <p>Partenaires Représentées par l’Association APPLX – Mot de circonstance du Chargé d’Affaires de la RDCongo en France Mot de circonstance des Partenaires de la RDC représentés par le PNUD Mot de circonstance du, Mot de circonstance du Maire de Rennes Métropole Mot de lancement du Conseiller Spécial du Chef de l'Etat en charge des Ressources Extérieures et Suivi des Projets</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>09:30 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/3.jpg" alt="Cole Emmerich">
                </div>
                <h4>Thème <span> Madame Catherine Darrot </span></h4>
                <p>Modèle économique Breton </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>10:00 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/4.jpg" alt="Jack Christiansen">
                </div>
                <h4>Thème <span>Jack Christiansen</span></h4>
                <p> Thème: Productivité ou Productivisme ?»
                  par Monsieur Loic Guines (Président de la chambre d’agriculture Bretagne) 
                </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>10:30 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/02.jpg" alt="Alejandrin Littel">
                </div>
                <h4>Pause <span></span></h4>
                <p></p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>10:45 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4> Présentation <span>Willow Trantow</span></h4>
                <p> Présentation des réformes et actions réalisées par l’état, exemple du Programme de Développement Local par le Ministère du Plan de la RD Congo. </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>11:00 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/1.jpg" alt="Brenden Legros">
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>11:15 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/2.jpg" alt="Hubert Hirthe">
                </div>
                <h4>Présentation des Modèles. <span>Hubert Hirthe</span></h4>
                <p>Présentation des Modèles économiques des Métiers développés en Bretagne par les artisans d’Ille-et-Ville</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>12:00 AM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/02.jpg" alt="Cole Emmerich">
                </div>
                <h4>Pause déjeuner. <span></span></h4>
                <p></p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>13:50 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/4.jpg" alt="Jack Christiansen">
                </div>
                <h4>Etat des lieux <span>Jack Christiansen</span></h4>
                <p>Etat des lieux du PDL145 T et financement à ce jour</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>14:15 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/5.jpg" alt="Alejandrin Littel">
                </div>
                <h4>Actions des Ministères. <span>Alejandrin Littel</span></h4>
                <p>Synergie des actions des Ministères avec le PDL-145T</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>14:35 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Les mesures d'accompagnement <span>Willow Trantow</span></h4>
                <p>Les mesures d'accompagnement, les garanties, les facilités pour un 
                  entrepreneur congolais et pour tout investisseur
                  ➢ « Présentation des Fiches des Projets sectoriels et invitation au 
                  remplissage des Fiches de projet »
                </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>14:55 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Modèle économique <span>Willow Trantow</span></h4>
                <p>Modèle économique adapté aux Territoires (ROI, TRI, 
                  Secteur porteur de croissance, etc.)
                </p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>15:25 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Partenariat <span>Willow Trantow</span></h4>
                <p>Renforcement de Partenariat</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>15:55 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Opportunités d'affaires <span>Willow Trantow</span></h4>
                <p>Opportunités d'affaires dans le secteur agricole et de pêche et élevage</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>16:25 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Pause <span></span></h4>
                <p></p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>16:50 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>financement pour investir <span>Willow Trantow</span></h4>
                <p>Quel est le modèle optimal de financement pour investir dans l'Industrie du Tourisme rural?</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>17:20 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Compétitivité <span>Willow Trantow</span></h4>
                <p>Compétitivité de PME-PMI établies dans les Territoires</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>17:40 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Ateliers <span>Willow Trantow</span></h4>
                <p>
                  Agriculture, élevage et Pêche <br>
                  Tourisme et Infrastructures <br>
                  Formation <br>
                  Fonds d’investissement</p>
              </div>
            </div>

            <div class="row schedule-item">
              <div class="col-md-2"><time>18:40 PM</time></div>
              <div class="col-md-10">
                <div class="speaker">
                  <img src="../assets/img/speakers/6.jpg" alt="Willow Trantow">
                </div>
                <h4>Présentation des recommandations <span>Willow Trantow</span></h4>
                <p>Présentation des recommandations des ateliers en plénière 
                  (5 min par atelier) et leur remise symbolique au Conseiller Spécial 
                  pour transmission au Chef de l’Etat de la RDC19h00 Lecture des
                   résolutions de la Conférence et clôture <br>
                  ➢ Fin des assises <br>
                  ➢ Soirée de gala sur invitation</p>
              </div>
            </div>

          </div>
          <!-- End Schdule Day 1 -->

          <!-- Schdule Day 2 -->
          <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">


          </div>
          <!-- End Schdule Day 2 -->

          <!-- Schdule Day 3 -->
          <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-3">

          </div>
          <!-- End Schdule Day 2 -->

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
