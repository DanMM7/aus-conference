<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      Gallery Section
    ============================-->
    <section id="gallery" class="wow fadeInUp">

    <div class="container">
      <div class="section-header">
        <h2>Galerie</h2>
        <p>Consultez notre galerie des événements récents</p>
      </div>
    </div>

    <div class="owl-carousel gallery-carousel">
      <a href="img/gallery/1.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/1.jpg" alt=""></a>
      <a href="img/gallery/2.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/2.jpg" alt=""></a>
      <a href="img/gallery/3.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/3.jpg" alt=""></a>
      <a href="img/gallery/4.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/4.jpg" alt=""></a>
      <a href="img/gallery/5.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/5.jpg" alt=""></a>
      <a href="img/gallery/6.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/6.jpg" alt=""></a>
      <a href="img/gallery/7.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/7.jpg" alt=""></a>
      <a href="img/gallery/8.jpg" class="venobox" data-gall="gallery-carousel"><img src="../assets/img/gallery/8.jpg" alt=""></a>
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
