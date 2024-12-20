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

</style>
