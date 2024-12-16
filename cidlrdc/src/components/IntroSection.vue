<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <!--==========================
    Intro Section
  ============================-->
  <section id="intro">
    <div class="intro-container wow fadeIn">
      <h1 class="mb-4 pb-0">CONFERENCE INTERNATIONALE<br><span>SUR LE DEVELOPPEMENT</span> LOCAL EN RDC</h1>
      <p class="mb-4 pb-0"><span style="color: darkgoldenrod;">Du 13 au 15 Mars 2025,</span><br>Melbourne, Australie</p>
      <a href="https://youtu.be/eTwgsCAP7L4?si=_toq6NAWU6gNaCRk" class="venobox play-btn mb-4" data-vbtype="video"
        data-autoplay="true"></a>
      <a href="#about" class="about-btn scrollto">À propos de l'événement</a>
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
