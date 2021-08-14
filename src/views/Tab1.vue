<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <div class="homepage-content">
        <div class="feature-card">
            <h4>MAXIMUM LIMIT</h4>
            <h1>₹ 8,00,000</h1>
        </div>
        <ion-button class="apply" href="/apply" color="primary">APPLY</ion-button>
        <Upcoming />
        <Operations />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';

import Upcoming from '@/views/Home/Upcoming.vue';
import Operations from '@/views/Home/Operations.vue';

export default  {
  name: 'Tab1',
  components: { 
    IonContent, 
    IonPage,
    Header,
    Upcoming,
    Operations
  }
}
</script>
<style>
.homepage-content {
  padding:0 30px;
}
.homepage-content .feature-card {
  background: #4A00E0;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  padding: 20px 20px;
}
.homepage-content .feature-card h4 {
  margin: 0 0 5px;
  font-size: 14px;
  line-height: 1.25;
}
.homepage-content .feature-card h1 {
  margin: 0;
  font-size: 26px;
  line-height: 1.25;
}
</style>