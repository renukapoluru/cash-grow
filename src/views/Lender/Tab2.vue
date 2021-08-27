<template>
  <ion-page>
    <Header firstText="Overview" :secondText="this.currentLoans.length+ ' current loans &amp; '+ this.applications.length + ' applications'"/>
    <ion-content :fullscreen="true">
      <div class="default-tab-padding">        
        <h3>Loan Applications</h3>
        <div class="applications">
          <div  v-for="(application,index) in applications" :key="index" :class="['application all-text-white',application.type]">
            <div class="left-col">
              <h5>{{ application.type }}</h5>
              <h3>₹ {{ currencyFormatter(application.amount)}}</h3> 
            </div>
            <div class="right-col">
                <img :src="getLoanTypeImage(application.type)" />
            </div>
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
    try {
      //@ts-ignore
      const { data } = await CashGrowManager.getLenderLoans();
      this.currentLoans = data;
    } catch(err) {
      callToast('danger', 'Error while fetching current loans');
    }
  },
  methods: {
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