<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      Speakers Section
    ============================-->
    <section id="speakers" class="wow fadeInUp">
      <div class="container">
        <div class="section-header">
          <h2>Conférenciers d'événements</h2>
          <p>Voici quelques-uns de nos conférenciers</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/1.jpg" alt="Speaker 3" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="1">Eric Mwamba</a></h3>
                <p>Stratège en Marketing territorial et développement Communautaire</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/2.jpg" alt="Speaker 1" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="2">Warda Belaribi</a></h3>
                <p>Consultante en stratégie</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href="https://www.linkedin.com/in/warda-belaribi-9366248b/"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/3.jpg" alt="Speaker 4" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="3">Ferdos Osman</a></h3>
                <p>Experte en levée des fonds et entrepreneur</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href="https://www.linkedin.com/in/ferdos-osman-027560249/"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/4.jpg" alt="Speaker 2" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="4">Pierre Laurence</a></h3>
                <p>Expert en Gouvernance et gestion municipale</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href="https://www.linkedin.com/in/pierre-laurence-06612142/"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/5.jpg" alt="Speaker 5" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="5">Dr Kensese S. Mossanda</a></h3>
                <p>Professor of Pathology</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href="https://www.linkedin.com/in/kensese-mossanda-78105727/"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/6.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="6">Vincent Katako</a></h3>
                <p>Specialising in satellite communications</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/7.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="7">Apollinaire Ihaza</a></h3>
                <p>Expert en Economie inclusive</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/8.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="8">Lyndal Rowlands</a></h3>
                <p>Expert en Developpement</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/9.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="9">Dr Juan Federer</a></h3>
                <p>Lobbyiste</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/10.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="10">Prof Rosalie Sami</a></h3>
                <p>Professeur D'entrepreneuriat</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/11.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="11">Rhiannon Nicholls</a></h3>
                <p>Stratege en Politiques publiques</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="speaker">
              <img src="../assets/img/speakers/12.jpg" alt="Speaker 6" class="img-fluid">
              <div class="details">
                <h3><a href="speaker-details.html" class="speaker-link" data-id="12">Prof Niynsaba Sebigunda Edson</a></h3>
                <p>Professeur de Gestion & Finances</p>
                <div class="social">
                  <a href=""><i class="fa fa-twitter"></i></a>
                  <a href=""><i class="fa fa-facebook"></i></a>
                  <a href=""><i class="fa fa-google-plus"></i></a>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- spealker -->
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
