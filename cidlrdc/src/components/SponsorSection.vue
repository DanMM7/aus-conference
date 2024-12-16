<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      Sponsors Section
    ============================-->
    <section id="sponsors" class="section-with-bg wow fadeInUp">

    <div class="container">
      <div class="section-header">
        <h2>Sponsors</h2>
      </div>

      <div class="row no-gutters sponsors-wrap clearfix">

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/1.png" class="img-fluid" alt="">
          </div>
        </div>
        
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/2.png" class="img-fluid" alt="">
          </div>
        </div>
      
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/3.png" class="img-fluid" alt="">
          </div>
        </div>
        
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/4.png" class="img-fluid" alt="">
          </div>
        </div>
        
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/5.png" class="img-fluid" alt="">
          </div>
        </div>
      
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/6.png" class="img-fluid" alt="">
          </div>
        </div>
        
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/7.png" class="img-fluid" alt="">
          </div>
        </div>
        
        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="sponsor-logo">
            <img src="../assets/img/sponsors/8.png" class="img-fluid" alt="">
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
