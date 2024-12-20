<script lang="ts">
import { defineComponent } from 'vue';

interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    googlePlus: string;
    linkedin: string;
  };
}

export default defineComponent({
  name: 'Speakers',
  data() {
    return {
      speakers: [
        {
          id: 1,
          name: 'Eric Mwamba',
          title: 'Stratège en Marketing territorial et développement Communautaire',
          image: '/src/assets/speakers/1.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example',
            facebook: 'https://facebook.com/example',
            googlePlus: 'https://plus.google.com/example',
            linkedin: 'https://linkedin.com/example',
          },
        },
        {
          id: 2,
          name: 'Warda Belaribi',
          title: 'Consultante en stratégie',
          image: '/src/assets/speakers/2.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://www.linkedin.com/in/warda-belaribi-9366248b/',
          },
        },
        {
          id: 3,
          name: 'Ferdos Osman',
          title: 'Experte en levée des fonds et entrepreneur',
          image: '/src/assets/speakers/3.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://www.linkedin.com/in/ferdos-osman-027560249/',
          },
        },
        {
          id: 4,
          name: 'Pierre Laurence',
          title: 'Expert en Gouvernance et gestion municipale',
          image: '/src/assets/speakers/4.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://www.linkedin.com/in/pierre-laurence-06612142/',
          },
        },
        {
          id: 5,
          name: 'Dr Kensese S. Mossanda',
          title: 'Professor of Pathology',
          image: '/src/assets/speakers/5.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://www.linkedin.com/in/kensese-mossanda-78105727/',
          },
        },
        {
          id: 6,
          name: 'Vincent Katako',
          title: 'Specialising in satellite communications',
          image: '/src/assets/speakers/6.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        {
          id: 7,
          name: 'Apollinaire Ihaza',
          title: 'Expert en Economie inclusive',
          image: '/src/assets/speakers/7.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        {
          id: 8,
          name: 'Lyndal Rowlands',
          title: 'Expert en Developpement',
          image: '/src/assets/speakers/8.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        {
          id: 9,
          name: 'Dr Juan Federer',
          title: 'Lobbyiste',
          image: '/src/assets/speakers/9.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        {
          id: 10,
          name: 'Prof Rosalie Sami',
          title: "Professeur D'entrepreneuriat",
          image: '/src/assets/speakers/10.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        {
          id: 11,
          name: 'Rhiannon Nicholls',
          title: 'Stratege en Politiques publiques',
          image: '/src/assets/speakers/11.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        {
          id: 12,
          name: 'Prof Niynsaba Edson',
          title: "Professeur de Gestion & Finances",
          image: '/src/assets/speakers/12.jpg',
          socialLinks: {
            twitter: 'https://twitter.com/example2',
            facebook: 'https://facebook.com/example2',
            googlePlus: 'https://plus.google.com/example2',
            linkedin: 'https://linkedin.com/example2',
          },
        },
        // Add more speakers as needed
      ],
    };
  },
});
</script>


<template>
  <!--==========================
      Speakers Section class="wow fadeInUp"
  ============================-->
  <section id="speakers">
    <div class="container">
      <div class="section-header">
        <h2>Conférenciers d'événements</h2>
        <p>Voici quelques-uns de nos conférenciers</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="speaker in speakers" :key="speaker.id">
          <div class="speaker">
            <img :src="speaker.image" :alt="`Speaker ${speaker.id}`" class="img-fluid" />
            <div class="details">
              <h3>
                <!-- Link to the speaker details -->
                <router-link :to="{ name: 'SpeakerDetail', params: { id: speaker.id }}">{{ speaker.name }}</router-link>
              </h3>
              <p>{{ speaker.title }}</p>
              <div class="social">
                <a :href="speaker.socialLinks.twitter"><i class="fa fa-twitter"></i></a>
                <a :href="speaker.socialLinks.facebook"><i class="fa fa-facebook"></i></a>
                <a :href="speaker.socialLinks.googlePlus"><i class="fa fa-google-plus"></i></a>
                <a :href="speaker.socialLinks.linkedin"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Speakers Section
--------------------------------------------------------------*/

#speakers {
  padding: 60px 0 30px 0;
}

#speakers .speaker {
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}

#speakers .speaker .details {
  background: rgba(6, 12, 34, 0.76);
  position: absolute;
  left: 0;
  bottom: -30px;
  right: 0;
  text-align: center;
  padding-top: 10px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

#speakers .speaker .details h3 {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
}

#speakers .speaker .details p {
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
  font-style: italic;
}

#speakers .speaker .details .social {
  height: 30px;
}

#speakers .speaker .details a {
  color: #fff;
}

#speakers .speaker .details a:hover {
  color: goldenrod;
}

#speakers .speaker:hover .details {
  bottom: 0;
}

#speakers-details {
  padding: 60px 0;
}

#speakers-details .details h2 {
  color: #112363;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

#speakers-details .details .social {
  margin-bottom: 15px;
}

#speakers-details .details .social a {
  background: #e9edfb;
  color: #112363;
  line-height: 1;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding-top: 9px;
}

#speakers-details .details .social a:hover {
  background: goldenrod;
  color: #fff;
}

#speakers-details .details .social a i {
  font-size: 18px;
}

#speakers-details .details p {
  color: #112363;
  font-size: 15px;
  margin-bottom: 10px;
}
</style>
