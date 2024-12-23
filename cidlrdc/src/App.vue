<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layout/HeaderView.vue'
import Intro from './components/layout/IntroSection.vue'
import Footer from './components/layout/FooterView.vue'
</script>

<template>
  <main id="main">
    <Header />
    <Intro />
    <RouterView />
    <Footer />
  </main>
</template>

<style>
/*--------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------*/

@media (min-width: 767px) {
  #subscribe input {
    min-width: 400px;
  }
}

@media (min-width: 768px) {
  #contact .contact-address,
  #contact .contact-phone,
  #contact .contact-email {
    padding: 20px 0;
  }

  #contact .contact-phone {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
}

@media (min-width: 991px) {
  #schedule .sub-heading {
    width: 75%;
  }
}

@media (min-width: 1024px) {
  #intro {
    background-attachment: fixed;
  }

  #about {
    background-attachment: fixed;
  }

  #subscribe {
    background-attachment: fixed;
  }
}

@media (max-width: 1199px) {
  #header .container {
    max-width: 100%;
  }

  .nav-menu a {
    padding: 8px 4px;
  }
}

@media (max-width: 991px) {
  #header {
    background: rgba(6, 12, 34, 0.98);
    height: 70px;
    transition: all 0.5s;
  }

  .container-top {
    height: 50px;
    display: flex;
    padding: 0 20px;
  }

  .container-top .flag img {
    height: 36px; /* Adjust as needed */
    width: auto;
  }
  
  .container-top .flag {
    display: inline-block;
    position: relative;
    z-index: 998; /* Ensure they are above other elements */
    top: 17px;
    transform: translateY(-50%); /* Center vertically */
  }

  #nav-menu-container {
    display: none;
  }

  #mobile-nav-toggle {
    display: block;
  }

  #intro .intro-container {
    top: 70px;
  }

  #intro h1 {
    font-size: 34px;
  }

  #intro p {
    font-size: 16px;
  }

  #schedule .nav-tabs a {
    padding: 8px 60px;
  }
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 15px;
  }

  #faq #faq-list a {
    font-size: 18px;
  }

  #faq #faq-list i {
    top: 13px;
  }
}

@media (max-width: 767px) {
  #schedule .nav-tabs a {
    padding: 8px 50px;
  }
}

@media (max-width: 574px) {
  #venue .venue-info h3 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  #schedule .nav-tabs a {
    padding: 8px 30px;
  }
}

@media (max-width: 460px) {
  #subscribe button {
    margin-top: 10px;
  }
}
</style>
