<template>
    <!--
    <button @click="toggleLanguage" class="translate-button"> 
      {{ buttonLabel }}
    </button>
    -->
    <a @click="toggleLanguage" href="#">{{ buttonLabel }}</a>
  </template>
  
  <script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'TranslateButton',
  setup() {
    const state = reactive({
      currentLanguage: 'en',
      translations: {
        en: 'FR',
        fr: 'EN',
      },
    });

    const toggleLanguage = () => {
      state.currentLanguage = state.currentLanguage === 'en' ? 'fr' : 'en';
      const event = new CustomEvent('language-changed', {
        detail: { language: state.currentLanguage },
      });
      window.dispatchEvent(event); // Emit a global event for language change
    };

    // Use a computed property for the button label
    const buttonLabel = computed(() => state.translations[state.currentLanguage]);

    return {
      toggleLanguage,
      buttonLabel,
    };
  },
});
  </script>
  
  <style scoped>
  </style>
  