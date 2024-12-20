<script setup lang="ts">
//defineProps<{
//  msg: string
//}>()
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
              <img src="@/assets/footer.jpg" alt="" width="250">
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
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/

#footer {
  background: #101522;
  padding: 0 0 25px 0;
  color: #eee;
  font-size: 14px;
}

#footer .footer-top {
  background: #040919;
  padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 26px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  color: #fff;
}

#footer .footer-top .footer-info img {
  height: 40px;
  margin-bottom: 10px;
}

#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: #fff;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #222636;
  color: #eee;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: goldenrod;
  color: #fff;
}

#footer .footer-top h4 {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
  border-bottom: 2px solid goldenrod;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 5px;
  color: goldenrod;
  font-size: 18px;
}

#footer .footer-top .footer-links ul li {
  border-bottom: 1px solid #262c44;
  padding: 10px 0;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #eee;
}

#footer .footer-top .footer-links ul a:hover {
  color: goldenrod;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
  line-height: 26px;
}

#footer .footer-top .footer-newsletter {
  margin-bottom: 30px;
}

#footer .footer-top .footer-newsletter input[type="email"] {
  border: 0;
  padding: 6px 8px;
  width: 65%;
}

#footer .footer-top .footer-newsletter input[type="submit"] {
  background: goldenrod;
  border: 0;
  width: 35%;
  padding: 6px 0;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

#footer .footer-top .footer-newsletter input[type="submit"]:hover {
  background: goldenrod;
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
}

#footer .credits {
  text-align: center;
  font-size: 13px;
  color: #ddd;
}

</style>
