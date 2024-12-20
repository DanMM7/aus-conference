<script setup lang="ts">
//defineProps<{
//  msg: string
//}>()
</script>

<template>
  <!--==========================
    Header
  ============================-->
  <header id="header">
    <!-- Top Navbar -->
    <div class="container-top">
        <!-- Add flag divs -->
        <div class="flag top-left"><img src="@/assets/drc.gif" alt="Flag 1"></div>
        <div class="flag top-right"><img src="@/assets/aus.gif" alt="Flag 2"></div>
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
/* Sections Header
--------------------------------*/

.section-header {
  margin-bottom: 60px;
  position: relative;
  padding-bottom: 20px;
}

.section-header::before {
  content: '';
  position: absolute;
  display: block;
  width: 60px;
  height: 5px;
  background: goldenrod;
  bottom: 0;
  left: calc(50% - 25px);
}

.section-header h2 {
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-header p {
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #9195a2;
}

.section-with-bg {
  background-color: #f6f7fd;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

#header {
  height: 120px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 997;
}

#header.header-scrolled,
#header.header-fixed {
  background: rgba(6, 12, 34, 0.98);
  height: 120px;
  transition: all 0.5s;
}

#header #logo h1 {
  font-size: 36px;
  margin: 0;
  padding: 6px 0;
  line-height: 1;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#header #logo h1 span {
  color: goldenrod;
}

#header #logo h1 a,
#header #logo h1 a:hover {
  color: #fff;
}

#header #logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

/* Top Navbar Styling */
.container-top {
  background: goldenrod;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.top-left {
  left: 10px; /* Adjust distance from the left edge */
}

.top-right {
  right: 10px; /* Adjust distance from the right edge */
}


/* Main Navbar Styling *
.container {
  background: rgba(6, 12, 34, 0.98);
  height: 70px;
  max-width: 100%;
  /*display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 50px;  Push main navbar below top navbar */


/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/

/* Nav Menu Essentials */

.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu ul {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 99;
}

.nav-menu li {
  position: relative;
  white-space: nowrap;
}

.nav-menu > li {
  float: left;
}

.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}

.nav-menu ul ul {
  top: 0;
  left: 100%;
}

.nav-menu ul li {
  min-width: 180px;
}

/* Nav Menu Arrows */

.sf-arrows .sf-with-ul {
  padding-right: 30px;
}

.sf-arrows .sf-with-ul:after {
  content: "\f107";
  position: absolute;
  right: 15px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}

.sf-arrows ul .sf-with-ul:after {
  content: "\f105";
}

/* Nav Meu Container */

#nav-menu-container {
  float: right;
  margin-top: 15px;
}

/* Nav Meu Styling */

.nav-menu a {
  padding: 8px;
  text-decoration: none;
  display: inline-block;
  color: rgba(202, 206, 221, 0.8);
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  outline: none;
}

.nav-menu .menu-active a,
.nav-menu a:hover {
  color: #fff;
}

.nav-menu > li {
  margin-left: 8px;
}

.nav-menu > li > a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: goldenrod;
  visibility: hidden;
  transition: all 0.3s ease-in-out 0s;
}

.nav-menu a:hover:before,
.nav-menu li:hover > a:before,
.nav-menu .menu-active > a:before {
  visibility: visible;
  width: 100%;
}

.nav-menu li.buy-tickets a {
  color: #fff;
  background: goldenrod;
  padding: 7px 22px;
  border-radius: 50px;
  border: 2px solid goldenrod;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  margin-left: 8px;
  margin-top: 2px;
  line-height: 1;
  font-size: 13px;
}

.nav-menu li.buy-tickets a:hover {
  background: none;
}

.nav-menu li.buy-tickets:hover a:before,
.nav-menu li.buy-tickets.menu-active a:before {
  visibility: hidden;
}

.nav-menu ul {
  margin: 4px 0 0 0;
  padding: 10px;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  background: #fff;
  border-radius: 3px;
}

.nav-menu ul li {
  transition: 0.3s;
}

.nav-menu ul li a {
  padding: 10px;
  color: #060c22;
  transition: 0.3s;
  display: block;
  font-size: 13px;
  text-transform: none;
  border-radius: 3px;
}

.nav-menu ul li:hover > a {
  background: goldenrod;
  color: #fff;
}

.nav-menu ul ul {
  margin: 0;
}

/* Mobile Nav Toggle */
body.mobile-nav-active {
  overflow: hidden;
}

body.mobile-nav-active #mobile-nav {
  left: 0;
}

body.mobile-nav-active #mobile-nav-toggle {
  color: #fff;
}

#mobile-nav-toggle {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  margin: 55px 15px 0 0;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}

#mobile-nav-toggle i {
  color: #fff;
}

/* Mobile Nav Styling */

#mobile-nav {
  position: fixed;
  top: 0;
  padding-top: 18px;
  bottom: 0;
  z-index: 998;
  background: rgba(6, 12, 34, 0.9);
  left: -260px;
  width: 260px;
  overflow-y: auto;
  transition: 0.4s;
}

#mobile-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

#mobile-nav ul li {
  position: relative;
}

#mobile-nav ul li a {
  color: #fff;
  font-size: 17px;
  overflow: hidden;
  padding: 10px 22px 10px 15px;
  position: relative;
  text-decoration: none;
  width: 100%;
  display: block;
  outline: none;
}

#mobile-nav ul li a:hover {
  color: goldenrod;
}

#mobile-nav ul li li {
  padding-left: 30px;
}

#mobile-nav ul .menu-has-children i {
  position: absolute;
  right: 0;
  z-index: 99;
  padding: 15px;
  cursor: pointer;
  color: #fff;
}

#mobile-nav ul .menu-has-children i.fa-chevron-up {
  color: goldenrod;
}

#mobile-nav ul .menu-item-active {
  color: goldenrod;
}

#mobile-body-overly {
  width: 100%;
  height: 100%;
  z-index: 997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(6, 12, 34, 0.8);
  display: none;
}

/* Mobile view adjustments */
@media (max-width: 767px) {
  .container-top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .container {
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }

  .flag {
    position: relative;
    top: auto;
    transform: none;
    display: inline-block;
    margin-left: 5px;
  }

  .flag.top-left {
    display: none; /* Hide left flag */
  }

  .flag.top-right {
    display: none;
    float: right;
    margin-right: 10px;
  }
}
</style>
