<template>
  <ion-page>
    <Header firstText="Personal Loan Application" secondText="Please fill the details"/>
    <ion-content :fullscreen="true">
      <div class="apply-for-loan loan-application">
        <ion-item>
          <ion-label position="fixed">Amount</ion-label>
          <ion-input v-model="amount"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">ROI</ion-label>
          <ion-input v-model="interest"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Tenure</ion-label>
          <ion-select v-model="tenure" placeholder="Select tenure">
            <ion-select-option value="6">6 Months</ion-select-option>
            <ion-select-option value="12">12 Months</ion-select-option>
            <ion-select-option value="24">24 Months</ion-select-option>
            <ion-select-option value="36">36 Months</ion-select-option>
            <ion-select-option value="48">48 Months</ion-select-option>
            <ion-select-option value="60">60 Months</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-button color="primary" @click="applyLoan">APPLY</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonInput,IonSelect,IonSelectOption } from '@ionic/vue';
import Header from '@/components/Header.vue';

import { callToast } from '@/common/utils';

import { defineComponent } from 'vue';
import { Storage } from '@capacitor/storage';

export default  defineComponent({
  name: 'LoanApplication',
  components: { 
    IonContent, 
    IonPage,
    Header,
    IonInput,
    IonSelect,
    IonSelectOption
  },
  data: () => ({
    amount: null,
    interest: null,
    tenure: null,
    nextIcon: require('@/assets/next.png'),
    loansInfo: [
      {
        type: 'PERSONAL LOAN',
        amountOnwards: '₹ 50,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #FF035E 0%, #F916C7 100%);'
      },
      {
        type: 'EDUCATIONAL LOAN',
        amountOnwards: '₹ 12,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #005CE7 0%, #24E2FC 100%);'
      },
      {
        type: 'HOME LOAN',
        amountOnwards: '₹ 20,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #FF6B00 0%, #FF1694 100%);'
      },
      {
        type: 'BUSINESS LOAN',
        amountOnwards: '₹ 50,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #B3CF05 0%, #24E2FC 100%);'
      },
      {
        type: 'OTHER LOAN',
        amountOnwards: '₹ 7,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #4A00E0 0%, #FF1694 100%);'
      }
    ]
  }),
  methods: {
    async applyLoan() {
      console.log('Loan', this.amount, this.tenure,this.interest);
      const item: any= await Storage.get({ key: 'user' });
      console.log('User',JSON.parse(item.value));
      const user: any = JSON.parse(item.value);
      const data = {
          type: 'PERSONAL',
          amount: this.amount,
          tenure: this.tenure,
          interest: this.interest,
          profilePic: user.profilePic,
          name: user.name,
          rating: user.rating,
          userId: user.id
        };
        fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/loans', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(res => {
            callToast('Loan request created');
            const loan = res;
            fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/users/'+user.id).then(response => response.json())
            .then(userDetails => {
              const loans = userDetails.loans;
              loans.push(loan);
              fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/users/'+user.id, {
                method: 'PUT', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ loans: loans}),
              }).then(response => response.json())
              .then(() => {
                this.$router.push('/tabs/tab2');
              }).catch((error) => {
                console.error('Error:', error);
              });
            }).catch((error) => {
              console.error('Error:', error);
            });
        })
        .catch((error) => {
          console.error('Error:', error);
          callToast('Error while creating loan request');
        });
    }
  }
})
</script>
<style>
.apply-for-loan {
    padding: 0 30px;
}

</style>