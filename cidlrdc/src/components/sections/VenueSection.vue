<script lang="ts">
import { defineComponent } from 'vue';

interface Venue {
  id: number;
  link: string;
  image: string;
}

export default defineComponent({
  name: 'Venues',
  data() {
    return {
      venues: [
        {
          id: 1,
          link: '/src/assets/venue-gallery/1.jpg',
          image: '/src/assets/venue-gallery/1.jpg',
        },
        {
          id: 2,
          link: '/src/assets/venue-gallery/2.jpg',
          image: '/src/assets/venue-gallery/2.jpg',
        },
        {
          id: 3,
          title: '/src/assets/venue-gallery/3.jpg',
          image: '/src/assets/venue-gallery/3.jpg',
        },
        {
          id: 4,
          title: '/src/assets/venue-gallery/4.jpg',
          image: '/src/assets/venue-gallery/4.jpg',
        },
        {
          id: 5,
          title: '/src/assets/venue-gallery/5.jpg',
          image: '/src/assets/venue-gallery/5.jpg',
        },
        {
          id: 6,
          title: '/src/assets/venue-gallery/6.jpg',
          image: '/src/assets/venue-gallery/6.jpg',
        },
        {
          id: 7,
          title: '/src/assets/venue-gallery/7.jpg',
          image: '/src/assets/venue-gallery/7.jpg',
        },
        {
          id: 8,
          title: '/src/assets/venue-gallery/8.jpg',
          image: '/src/assets/venue-gallery/8.jpg',
        },
        // Add more speakers as needed
      ],
    };
  },
});

</script>

<template>
    <!--==========================
      Venue Section class="wow fadeInUp"
    ============================-->
    <section id="venue">

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
        
        <div class="col-lg-3 col-md-4" v-for="venue in venues" :key="venue.id">
          <div class="venue-gallery">
            <a :href="venue.link" class="venobox" data-gall="venue-gallery">
              <img :src="venue.image" :alt="`Venue ${venue.id}`" class="img-fluid">
            </a>
          </div>
        </div>

      </div>
    </div>

    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Venue Section
--------------------------------------------------------------*/

#venue {
  padding: 60px 0;
}

#venue .container-fluid {
  margin-bottom: 3px;
}

#venue .venue-map iframe {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

#venue .venue-info {
  background: url("@/assets/venue-info-bg.jpg") top center no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
}

#venue .venue-info:before {
  content: "";
  background: rgba(13, 20, 41, 0.8);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#venue .venue-info h3 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

#venue .venue-info p {
  color: #fff;
  margin-bottom: 0;
}

#venue .venue-gallery-container {
  padding-right: 12px;
}

#venue .venue-gallery {
  overflow: hidden;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
}

#venue .venue-gallery img {
  transition: all ease-in-out 0.4s;
}

#venue .venue-gallery:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
