<script lang="ts">
import { defineComponent, ref } from 'vue';
import stripePromise from '@/stripe';

export default defineComponent({
  name: 'BuyTickets',
  setup() {
    const tickets = ref([
      {
        type: 'standard',
        title: 'Accès Standard',
        price: 250,
        benefits: [
          'Lettre de confirmation par e-mail',
          'Places assises régulières',
          'Accès communautaire',
          'Remise d\'un certificat de participant',
        ],
      },
      {
        type: 'early-bird',
        title: 'Accès Anticipé',
        price: 150,
        benefits: [
          'Tout en accès standard',
          'Enregistrement anticipé',
        ],
      },
      {
        type: 'vip',
        title: 'Accès VIP',
        price: 500,
        benefits: [
          'Tout en accès Premium',
          'Participation de groupe',
          'Accès aux salons VIP',
        ],
      },
    ]);

    const selectedTicket = ref(null);
    const formData = ref({
      name: '',
      email: '',
      phone: '',
    });

    const openModal = (ticket: any) => {
      selectedTicket.value = ticket;
    };

    const closeModal = () => {
      selectedTicket.value = null;
      formData.value = { name: '', email: '', phone: '' };
    };

    const processPayment = async () => {
      const stripe = await stripePromise;

      if (!stripe) {
        console.error('Stripe is not initialized');
        return;
      }

      // Simulate a payment session
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticketType: selectedTicket.value.type,
          name: formData.value.name,
          email: formData.value.email,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    };

    return {
      tickets,
      selectedTicket,
      formData,
      openModal,
      closeModal,
      processPayment,
    };
  },
});
</script>

<template>
    <!--==========================
      Buy Ticket Section wow fadeInUp
    ============================-->
    <section id="buy-tickets" class="section-with-bg">
    <div class="container">
      <div class="section-header">
        <h2 style="color: white;">Procurez-vous des billets</h2>
        <p style="color: white;">Choisissez la catégorie de billet ci-dessous</p>
      </div>

      <div class="row">
        <div
          class="col-lg-4"
          v-for="ticket in tickets"
          :key="ticket.type"
        >
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">
                {{ ticket.title }}
              </h5>
              <h6 class="card-price text-center">{{ ticket.price }} $</h6>
              <hr />
              <ul class="fa-ul">
                <li
                  v-for="benefit in ticket.benefits"
                  :key="benefit"
                >
                  <span class="fa-li"><i class="fa fa-check"></i></span>{{ benefit }}
                </li>
              </ul>
              <hr />
              <div class="text-center">
                <button
                  type="button"
                  class="btn"
                  @click="openModal(ticket)"
                >
                  Acheter un billet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        v-if="selectedTicket"
        class="modal fade show"
        style="display: block;"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Pay for {{ selectedTicket.title }}</h4>
              <button
                type="button"
                class="close"
                aria-label="Close"
                @click="closeModal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="processPayment">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="formData.name"
                    class="form-control"
                    placeholder="Votre Nom"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    v-model="formData.email"
                    class="form-control"
                    placeholder="Votre E-mail"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="formData.phone"
                    class="form-control"
                    placeholder="Votre Téléphone"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Buy Tickets Section
--------------------------------------------------------------*/

#buy-tickets {
  padding: 60px 0;
  background: url(../img/subscribe-bg.jpg) center center no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  background: #101522;
}

#buy-tickets .card {
  border: none;
  border-radius: 5px;
  transition: all  0.3s ease-in-out;
  box-shadow: 0 10px 25px 0 rgba(6, 12, 34, 0.1);
}

#buy-tickets .card:hover {
  box-shadow: 0 10px 35px 0 rgba(6, 12, 34, 0.2);
}

#buy-tickets .card hr {
  margin: 25px 0;
}

#buy-tickets .card .card-title {
  margin: 10px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
}

#buy-tickets .card .card-price {
  font-size: 48px;
  margin: 0;
}

#buy-tickets .card ul li {
  margin-bottom: 20px;
}

#buy-tickets .card .text-muted {
  opacity: 0.7;
}

#buy-tickets .card .btn {
  font-size: 15px;
  border-radius: 50px;
  padding: 10px 40px;
  transition: all 0.2s;
  background-color: goldenrod;
  border: 0;
  color: #fff;
}

#buy-tickets .card .btn:hover {
  background-color: goldenrod;
}

#buy-tickets #buy-ticket-modal input,
#buy-tickets #buy-ticket-modal select {
  border-radius: 0;
}

#buy-tickets #buy-ticket-modal .btn {
  font-size: 15px;
  border-radius: 50px;
  padding: 10px 40px;
  transition: all 0.2s;
  background-color: goldenrod;
  border: 0;
  color: #fff;
}

#buy-tickets #buy-ticket-modal .btn:hover {
  background-color: goldenrod;
}
</style>
