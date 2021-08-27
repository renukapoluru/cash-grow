<template>
  <ion-page>
    <VioletHeader />
    <ion-content :fullscreen="true">
      <ion-refresher  pull-factor="0.5" pull-min="50" slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="homepage-content borrower-hp">
        <div class="home-funds">
          <div class="funds">
            <h4>Funds</h4>
            <h3>₹ {{ this.balance }}</h3>
          </div>
          <div class="lent-earned">
            <div class="lent">
              <h4>Lent</h4>
              <h3>₹ 2,00,000</h3>
            </div>
            <div class="earned">
              <h4>Principal + Interest</h4>
              <h3>₹ 2,50,000</h3>
            </div>
          </div>
        </div>
        <div class="loan-requests">
          <h3 class="section-heading">Loan Requests</h3>
          <div class="loans-list">
            <div class="loan-card" v-for="loan in loanApplications" :key="loan.id">
              <div class="card-top">
                <div class="profile-pic">
                  <img :src="loan.user.profilePicURL" />
                </div>
                <div class="profile-details image-rating">
                  <h4 :style="{'color':getRatingColor(loan.user.rating),'width': getColorWidth(loan.user.rating)}">
                   <img :src="getRatingColor(loan.user.rating)" />
                  </h4>
                  <h3 class="name">{{ loan.user.firstName }} {{ loan.user.lastName }}</h3>
                  <h4 class="purpose">PURPOSE: {{ loan.type }}</h4>
                </div>
              </div>
              <div class="card-bottom">
                <div class="principal">
                  <h3>₹{{ loan.amount }}</h3>
                  <h4>Principal</h4>
                </div>
                <div class="tenure">
                  <h3>{{ loan.tenure }}</h3>
                  <h4>Tenure</h4>
                </div>
                <div class="interest">
                  <h3>{{ loan.interest }}%</h3>
                  <h4>ROI</h4>
                </div>
              </div>
              <div class="disburse-loan">
                <ion-button color="primary" :href="'/lender/loans/'+loan._id">LEND</ion-button>
              </div>
            </div>
          </div>
        </div>
        <!-- <Upcoming />
        <Operations /> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import VioletHeader from '@/components/VioletHeader.vue';

// import Upcoming from '@/views/Home/Upcoming.vue';
// import Operations from '@/views/Home/Operations.vue';

import { Storage } from '@capacitor/storage';

import { formatCurrency } from '@/common/utils';

import { callToast } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default defineComponent({
  name: 'Tab1',
  components: { 
    IonContent, 
    IonPage,
    VioletHeader,
    // Upcoming,
    // Operations
  },
  data(){
    return{
      balance: 0,
      loanApplications: [],
      orangeColor: 'orange',
      coloredRatingIcon: require('@/assets/rating.png'),
      placeholderRatingIcon: require('@/assets/placeholder-rating.png'),
    }
  },
  mounted() {
    this.fetchLoanApplications();
    this.fetchAccountBalance();
  },
  methods:{    
    
    doRefresh(event) {  
      this.fetchAccountBalance();
      this.fetchLoanApplications();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    },  
    async fetchLoanApplications() {
      try {
        const { data } = await CashGrowManager.getAllLoanApplications();
        this.loanApplications = data;
      } catch(err) {
        callToast('danger', 'Error while fetching loan applications');
      }
    },
    getRatingColor(rating: number) {
      if(rating > 4) {
        return require('@/assets/rating.png');
      } else if(rating >= 3) {
        return require('@/assets/yellow-rating.png');
      } else {
        return require('@/assets/red-rating.png')
      }
    },
    getColorWidth(rating: number) {
      if(rating >= 5) {
        return '68px';
      } else {
        return 13.6*rating+1+'px'
      }
    },
    lend(borrowerId: string) {
      console.log('Borrower ID', borrowerId);
    },
    async fetchAccountBalance() {
      const item: any= await Storage.get({ key: 'user' });
      const user: { accountID: string; limit: string} = JSON.parse(item.value);
      try { 
        const id = user.accountID;
        const res = await CashGrowManager.getAccountBalance(id);
        this.balance = formatCurrency(res.data.balance);
      } catch(e) {
        console.log('Error fetching account details', e);
      }
    }
  }
});
</script>
<style>
.homepage-content .loan-card {
    background: #fff;
    border: 1px solid #e1e1e1;
    padding: 20px 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 25%);
}
</style>