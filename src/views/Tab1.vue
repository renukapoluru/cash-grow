<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <div class="homepage-content">
        <div class="feature-card">
            <h4>MAXIMUM LIMIT</h4>
            <h1>₹ {{ limit }}</h1>
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

import { Storage } from '@capacitor/storage';

import { formatCurrency } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default  {
  name: 'Tab1',
  components: { 
    IonContent, 
    IonPage,
    Header,
    Upcoming,
    Operations
  },
  data: () => ({
    limit : ''
  }),
  async mounted() {
    const item: any= await Storage.get({ key: 'user' });
    console.log('User',JSON.parse(item.value));
    const user: { accountId: string; limit: string} = JSON.parse(item.value);
    this.limit = await formatCurrency(user.limit);
    try { 
      const id = 'b9d6b9db-3f9b-4afc-b59f-3964f8f59b54';
      const res = await CashGrowManager.getAccountDetails(id)
      console.log('Acc Details res', res);
    } catch(e) {
      console.log('Error fetching account details', e);
    }
  }
}
</script>
<style>
.homepage-content {
  padding:0 20px;
}
.homepage-content.borrower {
  padding:0;
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