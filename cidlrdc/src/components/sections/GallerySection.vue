<script lang="ts">
import { defineComponent } from 'vue';

interface gallery {
  id: number;
  link: string;
  image: string;
}

export default defineComponent({
  name: 'Gallery',
  data() {
    return {
      galleries: [
        {
          id: 1,
          link: 'src/assets/gallery/1.jpg',
          image: '/src/assets/gallery/1.jpg',
        },
        {
          id: 2,
          link: '/src/assets/gallery/2.jpg',
          image: '/src/assets/gallery/2.jpg',
        },
        {
          id: 3,
          link: '/src/assets/gallery/3.jpg',
          image: '/src/assets/gallery/3.jpg',
        },
        {
          id: 4,
          link: '/src/assets/gallery/4.jpg',
          image: '/src/assets/gallery/4.jpg',
        },
        {
          id: 5,
          link: '/src/assets/gallery/5.jpg',
          image: '/src/assets/gallery/5.jpg',
        },
        {
          id: 6,
          link: '/src/assets/gallery/6.jpg',
          image: '/src/assets/gallery/6.jpg',
        },
        {
          id: 7,
          link: '/src/assets/gallery/7.jpg',
          image: '/src/assets/gallery/7.jpg',
        },
        {
          id: 8,
          link: '/src/assets/gallery/8.jpg',
          image: '/src/assets/gallery/8.jpg',
        },
    ],
    };
  },
});

</script>

<template>
    <!--==========================
      Gallery Section class="wow fadeInUp"
    ============================-->
    <section id="gallery">

      <div class="container">
        <div class="section-header">
          <h2>Galerie</h2>
          <p>Consultez notre galerie des événements récents</p>
        </div>
      </div>

      <div v-for="gallery in galleries" :key="gallery.id">
        <div class="owl-carousel gallery-carousel" >
          <a :href="gallery.link" class="venobox" data-gall="gallery-carousel">
            <img :src="gallery.image" :alt="`Gallery ${gallery.id}`">
          </a>
        </div>
      </div>

    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Gallery Section
--------------------------------------------------------------*/

#gallery {
  padding: 60px;
  overflow: hidden;
}

#gallery .owl-nav,
#gallery .owl-dots {
  margin-top: 25px;
  text-align: center;
}

#gallery .owl-item {
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
}

#gallery .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
}

#gallery .owl-dot.active {
  background-color: goldenrod;
}

#gallery .gallery-carousel .owl-stage-outer {
  overflow: visible;
}

#gallery .gallery-carousel .center {
  border: 6px solid goldenrod;
  margin: -10px;
  box-sizing: content-box;
  padding: 4px;
  background: #fff;
  z-index: 1;
}
</style>
