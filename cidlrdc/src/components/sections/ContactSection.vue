<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default defineComponent({
  name: 'ContactForm',
  setup() {
    // Reactive form data
    const form = ref<ContactForm>({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Validation errors
    const errors = ref<ValidationErrors>({});

    // Form submission handler
    const handleSubmit = () => {
      errors.value = {}; // Reset errors

      // Validate the form
      if (form.value.name.length < 0) {
        errors.value.name = 'Veuillez entrer au moins 4 caractères pour le nom.';
      }
      if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = 'Veuillez entrer une adresse e-mail valide.';
      }
      if (form.value.subject.length < 10) {
        errors.value.subject = 'Veuillez entrer au moins 8 caractères pour le sujet.';
      }
      if (!form.value.message.trim()) {
        errors.value.message = 'Veuillez écrire un message.';
      }

      // If no errors, process the form
      if (Object.keys(errors.value).length === 0) {
        console.log('Form data submitted:', form.value);
        alert('Votre message a été envoyé avec succès!');
        form.value = { name: '', email: '', subject: '', message: '' }; // Reset form
      }
    };

    return {
      form,
      errors,
      handleSubmit,
    };
  },
});

</script>


<template>
    <!--==========================
      Contact Section wow fadeInUp
    ============================-->
    <section id="contact" class="section-bg">

    <div class="container">

      <div class="section-header">
        <h2>Contactez-nous</h2>
        <p>Envoyez-nous un message et quelqu'un vous répondra</p>
      </div>

      <div class="row contact-info">

        <div class="col-md-4">
          <div class="contact-address">
            <i class="ion-ios-location-outline"></i>
            <h3>Adresse</h3>
            <address>108 Adam Street, ML 90440, Australia</address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <i class="ion-ios-telephone-outline"></i>
            <h3>Téléphone</h3>
            <p><a href="tel:+155895548855">+61 450 896 135</a></p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <i class="ion-ios-email-outline"></i>
            <h3>E-mail</h3>
            <p><a href="mailto:info@example.com">edmjvnews@gmail.com</a></p>
          </div>
        </div>

      </div>

      <div class="form">
        <div id="sendmessage">Votre message a été envoyé. Merci!</div>
        <div id="errormessage"></div>

        <form @submit.prevent="handleSubmit" class="contactForm">
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                v-model="form.name"
                class="form-control"
                id="name"
                placeholder="Votre Nom"
              />
              <div class="validation" v-if="errors.name">{{ errors.name }}</div>
            </div>
            <div class="form-group col-md-6">
              <input
                type="email"
                v-model="form.email"
                class="form-control"
                id="email"
                placeholder="Votre E-mail"
              />
              <div class="validation" v-if="errors.email">{{ errors.email }}</div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="form.subject"
              class="form-control"
              id="subject"
              placeholder="Sujet"
            />
            <div class="validation" v-if="errors.subject">{{ errors.subject }}</div>
          </div>
          <div class="form-group">
            <textarea
              v-model="form.message"
              class="form-control"
              rows="5"
              placeholder="Message"
            ></textarea>
            <div class="validation" v-if="errors.message">{{ errors.message }}</div>
          </div>
          <div class="text-center">
            <button type="submit">Envoyer le message</button>
          </div>
        </form>

      </div>

    </div>
    </section><!-- #contact -->
</template>

<style scoped>
/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/

#contact {
  padding: 60px 0;
}

#contact .contact-info {
  margin-bottom: 20px;
  text-align: center;
}

#contact .contact-info i {
  font-size: 48px;
  display: inline-block;
  margin-bottom: 10px;
  color: goldenrod;
}

#contact .contact-info address,
#contact .contact-info p {
  margin-bottom: 0;
  color: #112363;
}

#contact .contact-info h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #112363;
}

#contact .contact-info a {
  color: #4869df;
}

#contact .contact-info a:hover {
  color: goldenrod;
}

#contact .contact-address,
#contact .contact-phone,
#contact .contact-email {
  margin-bottom: 20px;
}

#contact .form #sendmessage {
  color: goldenrod;
  border: 1px solid goldenrod;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage {
  color: goldenrod;
  display: none;
  border: 1px solid goldenrod;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
  display: block;
}

#contact .form .validation {
  color: goldenrod;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#contact .form input,
#contact .form textarea {
  padding: 10px 14px;
  border-radius: 0;
  box-shadow: none;
  font-size: 15px;
}

#contact .form button[type="submit"] {
  background: goldenrod;
  border: 0;
  padding: 10px 40px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
  cursor: pointer;
}

#contact .form button[type="submit"]:hover {
  background: goldenrod;
}
</style>
