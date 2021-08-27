<template>
  <ion-page>
    <Header firstText="Overview" :secondText="this.currentLoans.length+ ' current loans '"/>
    <ion-content :fullscreen="true">
      <ion-refresher  pull-factor="0.5" pull-min="50" slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="default-tab-padding">

        <h3>Current Loans</h3>
        <div v-for="(application,index) in currentLoans" :key="index" :class="['application current all-text-white',application.type]">
            <a :href="'/loans/'+application._id" class="link-card"></a>
            <div class="left-col">
              <h5>{{ application.type }}</h5>
              <h3>₹ {{ currencyFormatter(application.amount)}}</h3> 
              <h5 class="paid-total">{{ getLoanPercentage(application) }}% paid so far</h5>
              <div class="progressbar">
                <span class="filled" :style="{ width:getLoanPercentage(application)+'%' }"></span>
                <span class="full"></span>
              </div>
              <span class="progressbar"></span>
            </div>
            <div class="right-col">
                <img :src="getLoanTypeImage(application.type)" />
            </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';

import { formatCurrency } from '@/common/utils';

import { callToast } from '@/common/utils';

import { loanTypeImages } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default  {
  name: 'Tab2',
  components: { IonContent, IonPage, Header },
  data: () => ({
    applications : [],
    loans: [],
    currentLoans: []
  }),
  async mounted() {
    this.getLenderLoans();
  },
  methods: {   
    
    doRefresh(event) {  
      this.getLenderLoans();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    },  
    async getLenderLoans(){
        try {
          //@ts-ignore
          const { data } = await CashGrowManager.getLenderLoans();
          this.currentLoans = data;
        } catch(err) {
          callToast('danger', 'Error while fetching current loans');
        }
    },
    getSecondaryText() {
      return `${this.applications.length} Applications &amp; ${this.loans.length} Loans`
    },
    currencyFormatter(amount: any) {
      const formattedCurrency = formatCurrency(amount);
      return formattedCurrency;
    },
    getLoanTypeImage(type: string) {
      if(loanTypeImages[type]) {
        return loanTypeImages[type]
      } else {
        return loanTypeImages['default']
      }
    },
    getLoanPercentage(loan) {
      //@ts-ignore
      return parseInt(loan.paidInstallments/parseInt(loan.tenure)*100);
    }
  }
}
</script>