<template>
  <ion-page>
    <Header firstText="Overview" :secondText="this.currentLoans.length+ ' current loans &amp; '+ this.applications.length + ' applications'"/>
    <ion-content :fullscreen="true">
      <ion-refresher  pull-factor="0.5" pull-min="50" slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      
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
      this.getData();
  },
  methods: {   
    
    doRefresh(event) {  
      this.getData();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    },  
    async getData(){
      try {
        //@ts-ignore
        const { data } = await CashGrowManager.getApplicationsByStatus("CREATED");
        this.applications = data;
      } catch(err) {
        callToast('danger', 'Error while fetching loan applications');
      }
      try {
        //@ts-ignore
        const { data } = await CashGrowManager.getApplicationsByStatus("APPROVED");
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