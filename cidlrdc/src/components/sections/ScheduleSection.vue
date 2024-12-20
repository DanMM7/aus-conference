<script lang="ts">
import { defineComponent } from 'vue';

interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  image: string;
}

interface ScheduleDay {
  id: string;
  name: string;
  items: ScheduleItem[];
}

export default defineComponent({
  name: 'Schedule',
  data() {
    return {
      activeTab: 'day-1',
      days: [
        {
          id: 'day-1',
          name: 'Jour 1',
          items: [
            {
              time: '08:00 AM',
              title: 'Enregistrement',
              speaker: '',
              description: 'Arrivée des participants, enregistrement et retrait des badges',
              image: '/src/assets/speakers/01.jpg',
            },
            {
              time: '08:30 AM',
              title: 'Installations',
              speaker: 'Brenden Legros',
              description: 'Installations des participants',
              image: '/src/assets/speakers/1.jpg',
            },
            {
              time: '09:00 AM',
              title: 'Discours de Bienvenue des Associations',
              speaker: 'Eric Mwamba',
              description:
                'Partenaires Représentées par l’Association APPLX – Mot de circonstance du Chargé d’Affaires de la RDCongo en France...',
              image: '/src/assets/speakers/2.jpg',
            },
            // Add more schedule items for Day 1
          ],
        },
        {
          id: 'day-2',
          name: 'Jour 2',
          items: [{
              time: '08:00 AM',
              title: 'Enregistrement',
              speaker: '',
              description: 'Arrivée des participants, enregistrement et retrait des badges',
              image: '../assets/img/speakers/01.jpg',
            },
            {
              time: '08:30 AM',
              title: 'Installations',
              speaker: 'Brenden Legros',
              description: 'Installations des participants',
              image: '../assets/img/speakers/1.jpg',
            },
            {
              time: '09:00 AM',
              title: 'Discours de Bienvenue des Associations',
              speaker: 'Eric Mwamba',
              description:
                'Partenaires Représentées par l’Association APPLX – Mot de circonstance du Chargé d’Affaires de la RDCongo en France...',
              image: '../assets/img/speakers/2.jpg',
            },
          ],
        },
        {
          id: 'day-3',
          name: 'Jour 3',
          items: [{
              time: '08:00 AM',
              title: 'Enregistrement',
              speaker: '',
              description: 'Arrivée des participants, enregistrement et retrait des badges',
              image: '../assets/img/speakers/01.jpg',
            },
            {
              time: '08:30 AM',
              title: 'Installations',
              speaker: 'Brenden Legros',
              description: 'Installations des participants',
              image: '../assets/img/speakers/1.jpg',
            },
            {
              time: '09:00 AM',
              title: 'Discours de Bienvenue des Associations',
              speaker: 'Eric Mwamba',
              description:
                'Partenaires Représentées par l’Association APPLX – Mot de circonstance du Chargé d’Affaires de la RDCongo en France...',
              image: '../assets/img/speakers/2.jpg',
            },
          ],
        },
      ] as ScheduleDay[],
    };
  },

  methods: {
    setActiveTab(tabId: string) {
      this.activeTab = tabId;
    },
  },
});
</script>

<template>
    <!--==========================
      Schedule Section wow fadeInUp
    ============================-->
    <section id="schedule" class="section-with-bg">
      <div class="container">
        <div class="section-header">
          <h2>Événement programmé</h2>
          <p>Voici notre calendrier d'événements</p>
          <h3 class="sub-heading"> Télécharger le programme en PDF </h3>
          <div class="text-center"><a class="schedule-download" href="#">Télécharger</a></div>
          <br>
        </div>

            <!-- Tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li
                class="nav-item"
                v-for="day in days"
                :key="day.id"
                @click="setActiveTab(day.id)"
              >
                <a
                  class="nav-link"
                  :class="{ active: activeTab === day.id }"
                  href="'#' + day.id"
                  role="tab"
                >
                  {{ day.name }}
                </a>
              </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content row justify-content-center">
              <div
                v-for="day in days"
                :key="day.id"
                :class="['col-lg-9', 'tab-pane', 'fade', { show: activeTab === day.id, active: activeTab === day.id }]"
                :id="day.id"
                role="tabpanel"
              >
                <!-- Schedule Items -->
                <div v-for="item in day.items" :key="item.time" class="row schedule-item">
                  <div class="col-md-2">
                    <time>{{ item.time }}</time>
                  </div>
                  <div class="col-md-10">
                    <div class="speaker">
                      <img :src="item.image" :alt="item.speaker" />
                    </div>
                    <h4>
                      {{ item.title }}
                      <span v-if="item.speaker"> {{ item.speaker }}</span>
                    </h4>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Schedule Section
--------------------------------------------------------------*/

#schedule {
  padding: 60px 0 60px 0;
  background: silver;
}

#schedule .schedule-download {
  border: none;
  border-radius: 50px;
  font-weight: 600;
  background-color: #0e1b4d;
  color: #fff;
  padding: 10px 75px;
}

#schedule .schedule-download:hover {
  background-color: goldenrod;
  color: #fff;
}

#schedule .nav-tabs {
  text-align: center;
  margin: auto;
  display: block;
  border-bottom: 0;
  margin-bottom: 30px;
}

#schedule .nav-tabs li {
  display: inline-block;
  margin-bottom: 0;
}

#schedule .nav-tabs a {
  border: none;
  border-radius: 50px;
  font-weight: 600;
  background-color: #0e1b4d;
  color: #fff;
  padding: 10px 100px;
}

#schedule .nav-tabs a.active {
  background-color: goldenrod;
  color: #fff;
}

#schedule .sub-heading {
  text-align: center;
  font-size: 18px;
  font-style: italic;
  margin: 0 auto 30px auto;
}

#schedule .tab-pane {
  transition: ease-in-out .2s;
}

#schedule .schedule-item {
  border-bottom: 1px solid #cad4f6;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: background-color ease-in-out 0.3s;
}

#schedule .schedule-item:hover {
  background-color: #fff;
}

#schedule .schedule-item time {
  padding-bottom: 5px;
  display: inline-block;
}

#schedule .schedule-item .speaker {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  float: left;
  margin: 0 10px 10px 0;
}

#schedule .schedule-item .speaker img {
  height: 100%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-left: 50%;
  transition: all ease-in-out 0.3s;
}

#schedule .schedule-item h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
}

#schedule .schedule-item h4 span {
  font-style: italic;
  color: #19328e;
  font-weight: normal;
  font-size: 16px;
}

#schedule .schedule-item p {
  font-style: italic;
  color: #152b79;
  margin-bottom: 0;
}
</style>
