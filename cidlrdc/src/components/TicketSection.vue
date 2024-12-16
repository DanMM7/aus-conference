<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <!--==========================
      Buy Ticket Section
    ============================-->
    <section id="buy-tickets" class="section-with-bg wow fadeInUp">
      <div class="container">

        <div class="section-header">
          <h2 style="color: white;">Procurez-vous des billets</h2>
          <p style="color: white;">Choisissez la catégorie de billet ci-dessous</p>
        </div>


        <div class="row">

          <!-- Standard Tier -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Accès Standard</h5>
                <h6 class="card-price text-center">$250</h6>
                <hr>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Lettre de confirmation par e-mail / format pdf</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Places assises régulières, Pause café et Badge participant.</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Accès communautaire, Accès aux ateliers et Remise d'un certificat de participant.</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès groupe</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès Premium</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès VIP</li>
                </ul>
                <hr>
                <div class="text-center">
                  <button type="button" class="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">Buy Tikect</button>
                </div>

              </div>
            </div>
          </div>

          <!-- Early-Bird Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Accès Anticipé</h5>
                <h6 class="card-price text-center">$150</h6>
                <hr>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Tout en accès standard</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Enregistrement anticipé</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès groupe</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès Premium</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès VIP</li>
                </ul>
                <hr>
                <div class="text-center">
                  <button type="button" class="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="early-bird-access">Buy Tikect</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Local Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Accès Local</h5>
                <h6 class="card-price text-center">$200</h6>
                <hr>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Tout en accès standard</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Remise locale</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès groupe</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès Premium</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès VIP</li>
                </ul>
                <hr>
                <div class="text-center">
                  <button type="button" class="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="local-access">Buy Tikect</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <br>

        <div class="row">

          <!-- Premium Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Accès Premium</h5>
                <h6 class="card-price text-center">$300</h6>
                <hr>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Everything in Standard Access</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Après l'événement, Siège sélectionné et Communication directe avec les organisateurs</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Assistance de notre personnel pour toute question pendant la conférence.</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Logo de l'organisation ajouté à notre liste de sponsors et laissez-passer pour les coulisses,</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Opportunités de rencontre (artistes, conférenciers ou autres invités spéciaux),</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès groupe</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès VIP</li>
                </ul>
                <hr>
                <div class="text-center">
                  <button type="button" class="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="premium-access">Acheter un billet</button>
                </div>
              </div>
            </div>
          </div>

          <!-- VIP Tier -->
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Accès VIP</h5>
                <h6 class="card-price text-center">$500</h6>
                <hr>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Tout en accès Premium</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Participation de groupe, prix spéciaux ou places attribuées (siège)</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Accès aux salons VIP, et entrée anticipée, zones de sièges exclusives.</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Services gratuits (nourriture et boissons).</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès groupe</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès Premium</li>
                </ul>
                <hr>
                <div class="text-center">
                  <button type="button" class="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="vip-access">Acheter un billet</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Group Tier -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">Accès groupe</h5>
                <h6 class="card-price text-center">$200</h6>
                <hr>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Tout en accès standard</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Participation de groupe</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès Premium</li>
                  <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>Accès VIP</li>              
                </ul>
                <hr>
                <div class="text-center">
                  <button type="button" class="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="group-access">Acheter un billet</button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Modal Order Form -->
      <div id="buy-ticket-modal" class="modal fade">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Checkout</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form method="POST" action="#">
                <div class="form-group">
                  <input type="text" class="form-control" name="your-name" placeholder="Your Name">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="your-email" placeholder="Your Email">
                </div>
                <div class="form-group">
                  <input type="tel" class="form-control" name="your-phone" placeholder="Your Phone">
                </div>
                <div class="form-group">
                  <select id="ticket-type" name="ticket-type" class="form-control" >
                    <option value="">-- Select Your Ticket Type --</option>
                    <option value="standard-access">Standard Access</option>
                    <option value="local-access">Local Access</option>
                    <option value="early-bird-access">Early-Bird Access</option>
                    <option value="group-access">Group Access</option>
                    <option value="premium-access">Premium Access</option>
                    <option value="vip-access">VIP Access</option>
                  </select>
                </div>
                <div class="form-group">
                  <input type="tel" class="form-control" name="your-phone" placeholder="Your Country">
                </div>
                <div class="form-group">
                  <input type="tel" class="form-control" name="your-phone" placeholder="Your Organisation">
                </div>
                <div class="form-group">
                  <input type="tel" class="form-control" name="your-phone" placeholder="Your Position">
                </div>
                <div class="text-center">
                  <button type="submit" class="btn">Pay Now</button>
                </div>
              </form>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->

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
