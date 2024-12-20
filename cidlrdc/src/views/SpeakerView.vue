<script setup lang="ts">
</script>

<template>
  <main id="main" class="main-page">

    <!--==========================
      Speaker Details Section
    ============================-->
    <section id="speakers-details" class="wow fadeIn">
      <div class="container">
        <div class="section-header">
          <h2>Speaker Details</h2>
          <p>Praesentium ut qui possimus sapiente nulla.</p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/speakers/1.jpg" alt="Speaker 1" class="img-fluid">
          </div>

          <div class="col-md-6">
            <div class="details">
              <h2>Brenden Legros</h2>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
              <p>Voluptatem perferendis sed assumenda voluptatibus. Laudantium molestiae sint. Doloremque odio dolore dolore sit. Quae labore alias ea omnis ex expedita sapiente molestias atque. Optio voluptas et.</p>

              <p>Aboriosam inventore dolorem inventore nam est esse. Aperiam voluptatem nisi molestias laborum ut. Porro dignissimos eum. Tempore dolores minus unde est voluptatum incidunt ut aperiam.</p> 

              <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>
            </div>
          </div>
          
        </div>
      </div>

    </section>

  </main>
</template>

<style>
  #speakers-details {
    padding: 60px 0;
  }

  #speakers-details .details h2 {
    color: #112363;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  #speakers-details .details .social {
    margin-bottom: 15px;
  }

  #speakers-details .details .social a {
    background: #e9edfb;
    color: #112363;
    line-height: 1;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding-top: 9px;
  }

  #speakers-details .details .social a:hover {
    background: goldenrod;
    color: #fff;
  }

  #speakers-details .details .social a i {
    font-size: 18px;
  }

  #speakers-details .details p {
    color: #112363;
    font-size: 15px;
    margin-bottom: 10px;
  }

</style>
