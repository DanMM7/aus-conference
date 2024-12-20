<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

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
  name: 'SpeakerDetail',
  setup() {
    const route = useRoute();
    const speakerId = Number(route.params.id);

    const speakers: Speaker[] = [
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
      // Add more speakers
    ];

    // Find the speaker by ID
    const speaker = ref<Speaker | undefined>(speakers.find((s) => s.id === speakerId));

    return {
      speaker,
    };
  },
});
</script>

<template>
    <main id="main" class="main-page">
  <!--==========================
      Speaker Details Section class="wow fadeIn"
    ============================-->
  <section id="speakers-details">
    <div class="container">
      <div class="section-header">
        <h2>Speaker Details</h2>
        <p>Details about {{ speaker?.name }}</p>
      </div>

      <div v-if="speaker" class="row">
        <div class="col-md-6">
          <img :src="speaker.image" :alt="speaker.name" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <div class="details">
            <h2>{{ speaker.name }}</h2>
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
  </section>
</main>
</template>


<style>
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
