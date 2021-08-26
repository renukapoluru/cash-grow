<template>
  <ion-page>
    <GoBack @click="sendToHome()" />
    <Header class="hide-top-padding" firstText="Application Details" secondText="A brief overview of the loan application"/>
    <ion-content :fullscreen="true">
      <div class="page-padding">
        <div class="loan-card about-borrower">
          <div class="card-top">
            <div class="profile-pic">
              <img :src="loan.profilePic" />
            </div>
            <div class="profile-details image-rating">
              <h4 :style="{'color':getRatingColor(loan.rating),'width': getColorWidth(loan.rating)}">
                <img :src="getRatingColor(loan.rating)" />
              </h4>
              <h3 class="name">{{ loan.name }}</h3>
              <h4 class="purpose">PURPOSE: {{ loan.type }}</h4>
            </div>
          </div>
        </div>
        <div class="table-details">
          <div class="row">
            <h4>Amount</h4>
            <h4>₹{{ loan.amount }}</h4>
          </div>
          <div class="row">
            <h4>Interest</h4>
            <h4>{{ loan.interest }}</h4>
          </div>
          <div class="row">
            <h4>Tenure</h4>
            <h4>{{ loan.tenure }}</h4>
          </div>
        </div>
        <div class="profile-depth">
          <h3>Profile Depth</h3>
          <ul>
            <li>Has currently 0 active loans</li>
            <li>99% on-time payments</li>
            <li>1% missed payments</li>
          </ul>
        </div>
        <div class="disburse-loan">
          <ion-button color="primary" @click="lendLoan()">LEND</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';
import GoBack from '@/components/GoBack.vue';
import { toastController } from '@ionic/vue';

export default  {
  name: 'LoanRequestDetails',
  components: { 
    IonContent, 
    IonPage,
    Header,
    GoBack
  },
  data: () => ({
    loan: {}
  }),
  mounted() {
    this.fetchLoanDetails();
  },
  methods: {
    fetchLoanDetails() {
      const id = this.$route.params.id;
      fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/loans/'+id)
      .then(response => response.json())
      .then(data => {
        this.loan = data;
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
    },
    sendToHome(){
      this.$router.push('/lender-tabs/tab1');
    },
    async lendLoan() {
      const toast = await toastController
          .create({
            header: 'Toast header',
            message: 'Click to Close',
            position: 'top',
            buttons: [
              {
                side: 'start',
                icon: 'star',
                text: 'Favorite',
                handler: () => {
                  console.log('Favorite clicked');
                }
              }, {
                text: 'Done',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          })
        await toast.present();
    }
  }
}
</script>
<style>
.apply-for-loan {
    padding: 0 20px;
}

.apply-for-loan h3,
.apply-for-loan h4{
    color:#fff;
}

.loan {
  padding:20px;
  border-radius:4px;
  box-shadow: 0px, 4px
rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  position: relative;
}

.apply-for-loan {
    padding: 0 20px;
}

.apply-for-loan h4 {
    font-weight: bold;
    font-size: 12px;
    line-height: 1.5;
    margin: 5px 0;
}

.apply-for-loan h3 {
    font-size: 22px;
    font-family: 'Roboto',sans-serif;
    margin: 0;
}

.loan img.next-icon {
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.profile-depth {
    margin-top: 20px;
}

.profile-depth ul {
    padding: 0;
    padding-left: 20px;
}

.profile-depth ul li {
    margin: 0 0 10px;
    font-size: 16px;
}

.profile-depth h3 {
    font-size: 1rem;
}

</style>