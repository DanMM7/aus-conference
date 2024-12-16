<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <!--==========================
    Header
  ============================-->
  <header id="header">
    <!-- Top Navbar -->
    <div class="container-top">
        <!-- Add flag divs -->
        <div class="flag top-left"><img src="../assets/img/drc.gif" alt="Flag 1"></div>
        <div class="flag top-right"><img src="../assets/img/aus.gif" alt="Flag 2"></div>
    </div>
    <!-- Main Navbar -->
    <div class="container">
        <div id="logo" class="pull-left">
            <!-- Uncomment below if you prefer to use a text logo -->
            <h1><a href="index.html">CID145T</a></h1>
            <!-- <a href="#intro" class="scrollto"><img src="img/logo.png" alt="" title="CIDLRD"></a> -->
        </div>
        <nav id="nav-menu-container">
            <ul class="nav-menu">
                <li class="menu-active"><a href="#intro">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#speakers">Conférenciers</a></li>
                <li><a href="#schedule">Calendrier</a></li>
                <li><a href="#venue">Lieu</a></li>
                <li><a href="#gallery">Galerie</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="buy-tickets"><a href="#buy-tickets">S'inscrire</a></li>
                <li><a onclick="translateContent()" href="#">FR</a></li>
            </ul>
        </nav>
    </div>
  </header>
  <!-- #header -->
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
