<script></script>

<template>
      <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
</template>

<style scoped>
/* Back to top button */

.back-to-top {
  position: fixed;
  display: none;
  background: goldenrod;
  color: #fff;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50px;
  right: 15px;
  bottom: 15px;
  transition: background 0.5s ease-in-out;
}

.back-to-top i {
  font-size: 24px;
  padding-top: 6px;
}

.back-to-top:focus {
  background: goldenrod;
  color: #fff;
  outline: none;
}

.back-to-top:hover {
  background: goldenrod;
  color: #fff;
}
</style>