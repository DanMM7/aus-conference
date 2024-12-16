<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      Venue Section
    ============================-->
    <section id="venue" class="wow fadeInUp">

    <div class="container-fluid">

      <div class="section-header">
        <h2>Lieu de l'événement</h2>
        <p>Informations sur l'emplacement du lieu de l'événement et galerie</p>
      </div>

      <div class="row no-gutters">
        <div class="col-lg-6 venue-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.52182567374!2d144.95288987662562!3d-37.824667871972835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5173a284b5%3A0x958eeaf04deea384!2sMelbourne%20Convention%20and%20Exhibition%20Centre%20(MCEC)!5e0!3m2!1sen!2sus!4v1718739533805!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402590.51597191114!2d144.72350517572877!3d-37.971565229612196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1718255769774!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>-->
        </div>

        <div class="col-lg-6 venue-info">
          <div class="row justify-content-center">
            <div class="col-11 col-lg-8">
              <h3>Centre des congrès et des expositions de Melbourne</h3>
              <p>Le Melbourne Convention and Exhibition Centre, situé à South Wharf,
                Melbourne est le plus grand espace événementiel d'Australie. Il comprend de vastes salles d'exposition,
                des salles de réunion et un théâtre plénier, accueillant chaque année de nombreux événements internationaux.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="container-fluid venue-gallery-container">
      <div class="row no-gutters">

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/1.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/1.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/2.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/2.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/3.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/3.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/4.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/4.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/5.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/5.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/6.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/6.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/7.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/7.jpg" alt="" class="img-fluid">
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="venue-gallery">
            <a href="../assets/img/venue-gallery/8.jpg" class="venobox" data-gall="venue-gallery">
              <img src="../assets/img/venue-gallery/8.jpg" alt="" class="img-fluid">
            </a>
          </div>
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
