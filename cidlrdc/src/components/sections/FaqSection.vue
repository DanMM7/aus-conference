<script lang="ts">
import { defineComponent } from 'vue';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
}

export default defineComponent({
  name: 'FAQSection',
  data() {
    return {
      faqs: [
        {
          id: 'faq1',
          question: 'Qui est l’organisateur de cette conference?',
          answer: `En effet, cette conference est organisee par les congolais de la Diaspora, des associations francaises et australiennes en partenariat avec la Presidence et le gouvernement de la RDC. Le projet de cette conference a ete initie par Eric Mwamba, un journaliste globetrotter d’origine de la RDC.`,
          isOpen: false,
        },
        {
          id: 'faq2',
          question: 'Pourquoi la ville de Melbourne?',
          answer: `La ville de Rennes est la capitale de la Bretagne, une region de l’Ouest de la France qui se distingue par un modele economique qui fait du developpement local son cheval de bataille. Elle figure en position privilegiee comme principale fournisseur des produits vivriers de premiere consummation en France et en Europe.`,
          isOpen: false,
        },
        {
          id: 'faq3',
          question: 'Qui finance cette conference?',
          answer: 'La conference est finance par les organisateurs.',
          isOpen: false,
        },
        {
          id: 'faq4',
          question: 'Quel est le rapport entre les organisateurs et l’Etat Congolais?',
          answer: 'Les deux parties entretiennent les rapports de complementarite.',
          isOpen: false,
        },
      ] as FAQItem[],
    };
  },
  methods: {
    toggleFAQ(id: string) {
      const faq = this.faqs.find(f => f.id === id);
      if (faq) faq.isOpen = !faq.isOpen;
    },
  },
});

</script>


<template>
    <!--==========================
      F.A.Q Section class="wow fadeInUp"
    ============================-->
    <section id="faq">

    <div class="container">

      <div class="section-header">
        <h2>F.A.Q</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-9">
            <ul id="faq-list">

              <li v-for="faq in faqs" :key="faq.id">
                <a
                  href="javascript:void(0)"
                  class="collapsed"
                  @click="toggleFAQ(faq.id)"
                >
                  {{ faq.question }}
                  <i :class="faq.isOpen ? 'fa fa-minus-circle' : 'fa fa-plus-circle'"></i>
                </a>
                <div v-if="faq.isOpen" class="collapse show">
                  <p>{{ faq.answer }}</p>
                </div>
              </li>

            </ul>
        </div>
      </div>

    </div>

    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# F.A.Q Section
--------------------------------------------------------------*/

#faq {
  padding: 60px 0;
}

#faq #faq-list {
  padding: 0;
  list-style: none;
}

#faq #faq-list li {
  border-bottom: 1px solid #ddd;
}

#faq #faq-list a {
  padding: 18px 0;
  display: block;
  position: relative;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  padding-right: 20px;
}

#faq #faq-list i {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 16px;
}

#faq #faq-list p {
  margin-bottom: 20px;
}

#faq #faq-list a.collapse {
  color: goldenrod;
}

#faq #faq-list a.collapsed {
  color: #000;
}

#faq #faq-list a.collapsed i::before {
  content: "\f055" !important;
}
</style>
