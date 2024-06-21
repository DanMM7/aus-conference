<script setup lang="ts">
import About from '../components/AboutSection.vue'
import Speaker from '../components/SpeakerSection.vue'
import Schedule from '../components/ScheduleSection.vue'
import Venue from '../components/VenueSection.vue'
import Gallery from '../components/GallerySection.vue'
import Sponsor from '../components/SponsorSection.vue'
import FAQ from '../components/FaqSection.vue'
import Subscribe from '../components/SubscribeSection.vue'
import Ticket from '../components/TicketSection.vue'
import Contact from '../components/ContactSection.vue'
</script>

<template>
  <main id="main">
    <About />
    <Speaker />
    <Schedule />
    <Venue />
    <Gallery />
    <Sponsor />
    <FAQ />
    <Subscribe />
    <Ticket />
    <Contact />
  </main>
</template>
