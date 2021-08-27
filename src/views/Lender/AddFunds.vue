<template>
  <ion-page>
    <a id="go-back" href="/lender-tabs/tab3"><img src="https://i.im.ge/2021/08/27/QofRGG.png" /></a>
    <Header firstText="Add Funds"/>
    <ion-content :fullscreen="true">
      <div class="funds-adding-page">
        <div class="input-group amount">
            <label>Amount</label>
            <input type="number" v-model="amount">
        </div>
        <div class="select-source">
            <label>Select Account</label>
            <div class="radio-group">
            RBL BANK LTD *2343<input type="radio" checked>
            </div>
        </div>
        <div class="add-funds-btn">
          <ion-button color="primary" @click="addFund()">ADD FUNDS</ion-button>
        </div>
       </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, toastController } from '@ionic/vue';
import Header from '@/components/Header.vue';

import { defineComponent } from 'vue';
import { Storage } from '@capacitor/storage';

import { uniqueId } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default  defineComponent({
  name: 'AddFunds',
  components: { 
    IonContent, 
    IonPage,
    Header
  },
  data: () => ({
    amount: null
  }),
  methods: {
    async addFund() {
      const item: any= await Storage.get({ key: 'user' });
      const user: { accountID: string; limit: string} = JSON.parse(item.value);
      try { 
        const transferData = {
          debitId: 'b9d6b9db-3f9b-4afc-b59f-3964f8f59b54',
          creditId: user.accountID,
          requestId: uniqueId(),
          amount: parseInt(this.amount)
        }
        const res = await CashGrowManager.transfer(transferData);
        if(res.status == 200) {
          const toast = await toastController
            .create({
              color: 'success',
              message: 'Funds added successfully',
              duration: 2000
            })
          return toast.present();
        }
        this.sendToProfile();
      } catch(e) {
        console.log('Error fetching account details', e);
        const toast = await toastController
            .create({
              color: 'danger',
              message: 'Error while adding funds',
              duration: 2000
            })
          return toast.present();
      }
    },
    sendToProfile(){
      console.log('in send profile');
      this.$router.push({ path: '/tabs/tab3' });
    },
  }
})
</script>
<style>

</style>