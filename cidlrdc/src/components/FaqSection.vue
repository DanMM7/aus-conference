<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      F.A.Q Section
    ============================-->
    <section id="faq" class="wow fadeInUp">

    <div class="container">

      <div class="section-header">
        <h2>F.A.Q</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-9">
            <ul id="faq-list">

              <li>
                <a data-toggle="collapse" class="collapsed" href="#faq1">Qui est l’organisateur de cette conference? <i class="fa fa-minus-circle"></i></a>
                <div id="faq1" class="collapse" data-parent="#faq-list">
                  <p>
                    En effet, cette conference est organisee par les congolais de la Diaspora, des associations francaises et australiennes en partenariat avec la Presidence et le gouvernement de la RDC. Le projet de cette conference a ete initie par Eric Mwamba, un journaliste globetrotter d’origine de la RDC.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq2" class="collapsed">Pourquoi la ville de Melbourne? <i class="fa fa-minus-circle"></i></a>
                <div id="faq2" class="collapse" data-parent="#faq-list">
                  <p>
                    La ville de Rennes est la capitale de la Bretagne, une region de l’Ouest de la France qui se distingue par un modele economique qui fait du developpement local son cheval de bataille. Elle figure en position privilegiee comme principale fournisseur des produits vivriers de premiere consummation en France et en Europe.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq3" class="collapsed">Qui finance cette conference? <i class="fa fa-minus-circle"></i></a>
                <div id="faq3" class="collapse" data-parent="#faq-list">
                  <p>
                    La conference est finance par les organisateurs.
                  </p>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq4" class="collapsed">Quel est le rapport entre les organisateurs et l’Etat Congolais? <i class="fa fa-minus-circle"></i></a>
                <div id="faq4" class="collapse" data-parent="#faq-list">
                  <p>
                    Les deux parties entretiennent les rapports de complementarite.
                  </p>
                </div>
              </li>

            </ul>
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
