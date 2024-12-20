<script lang="ts">
import { defineComponent } from 'vue';

interface sponsor {
  id: number;
  image: string;
}

export default defineComponent({
  name: 'Sponsors',
  data() {
    return {
      sponsors: [{
        id: 1,
        image: '/src/assets/sponsors/1.png',
      },
      {
        id: 2,
        image: '/src/assets/sponsors/2.png',
      },
      {
        id: 3,
        image: '/src/assets/sponsors/3.png',
      },
      {
        id: 4,
        image: '/src/assets/sponsors/4.png',
      },
      {
        id: 5,
        image: '/src/assets/sponsors/5.png',
      },
      {
        id: 6,
        image: '/src/assets/sponsors/6.png',
      },
      {
        id: 7,
        image: '/src/assets/sponsors/7.png',
      },
      {
        id: 8,
        image: '/src/assets/sponsors/8.png',
      },
    ],
    };
  },
});

</script>

<template>
    <!--==========================
      Sponsors Section wow fadeInUp
    ============================-->
    <section id="sponsors" class="section-with-bg">

    <div class="container">
      <div class="section-header">
        <h2>Sponsors</h2>
      </div>

      <div class="row no-gutters sponsors-wrap clearfix">

        <div class="col-lg-3 col-md-4 col-xs-6" v-for="sponsor in sponsors" :key="sponsor.id">
          <div class="sponsor-logo">
            <img :src="sponsor.image" class="img-fluid" :alt="`Sponsor ${sponsor.id}`">
          </div>
        </div>

      </div>

    </div>

    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Sponsors Section
--------------------------------------------------------------*/

#sponsors {
  padding: 60px 0;
  background: silver;
}

#sponsors .sponsors-wrap {
  border-top: 1px solid #e0e5fa;
  border-left: 1px solid #e0e5fa;
  margin-bottom: 30px;
}

#sponsors .sponsor-logo {
  padding: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-right: 1px solid #e0e5fa;
  border-bottom: 1px solid #e0e5fa;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  height: 160px;
}

#sponsors .sponsor-logo:hover img {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

#sponsors img {
  transition: all 0.4s ease-in-out;
}
</style>
