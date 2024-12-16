<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <!--==========================
    Footer
  ============================-->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-auto col-md-4 footer-info">
            <h4>CIDLRDC</h4>
            <p>
              Le Congo dispose de 80 millions de terres arables, <br>
              des lacs les plus poissonneux, <br>
              d’un fleuve navigable et des forêts vierges. <br>
              Selon la Cour des comptes du pays, <br>
              95% des personnes au sein de la population n’ont <br>
              pas d’emploi formel. Pour essayer de changer cette <br>
              situation, le gouvernement a initié un programme de <br>
              développement local des 145 territoires du pays.
            </p>
          </div>

          <div class="col-auto col-md-4 footer-links">
            <h4>Congo (RDC) Regions</h4>
            <ul>
              <img src="../assets/img/footer.jpg" alt="" width="250">
              <!--<li><i class="fa fa-angle-right"></i> <a href="#">Home</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="#">About us</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="#">Services</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>-->
            </ul>
          </div>

          <div class="col-auto col-md-4 footer-contact">
            <h4>Contactez-nous</h4>
            <p>
              108 Adam Street, <br>
              ML 90440, <br>
              Australia <br>
              <strong>Téléphone:</strong> +61 450 896 135<br>
              <strong>E-mail:</strong> edmjvnews@gmail.com<br>
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; droits d'auteur <strong>CIDLRDC</strong>. Tous Droits Réservés
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent
        -->
        Conçu par <a href="my-portfolio-agaz.vercel.app/">Dan Malengela</a>
      </div>
    </div>
  </footer>
  <!-- #footer -->
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
