<template>
  <ion-page>
    <VioletHeader />
    <ion-content :fullscreen="true">
      <div class="homepage-content borrower-hp">
        <div class="home-funds">
          <div class="funds">
            <h4>Funds</h4>
            <h3>₹ 20,00,000</h3>
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
            <div class="loan-card" v-for="loan in loans" :key="loan.id">
              <div class="card-top">
                <div class="profile-pic">
                  <img :src="loan.profilePicURL" />
                </div>
                <div class="profile-details image-rating">
                  <h4 :style="{'color':getRatingColor(loan.rating),'width': getColorWidth(loan.rating)}">
                   <img :src="getRatingColor(loan.rating)" />
                  </h4>
                  <h3 class="name">{{ loan.firstName }} {{ loan.lastName }}</h3>
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
                  <h3>{{ loan.interest }}</h3>
                  <h4>ROI</h4>
                </div>
              </div>
              <div class="disburse-loan">
                <ion-button color="primary" :href="'/lender/loans/'+loan.id">LEND</ion-button>
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
      loans: [],
      orangeColor: 'orange',
      coloredRatingIcon: require('@/assets/rating.png'),
      placeholderRatingIcon: require('@/assets/placeholder-rating.png'),
    }
  },
  mounted() {
    this.fetchLoans();
  },
  methods:{
    fetchLoans() {
      fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/loanapplications')
      .then(response => response.json())
      .then(data => {
        this.loans = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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