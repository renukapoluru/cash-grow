<template>
  <ion-page>
    <Header firstText="Personal Loan Application" secondText="Please fill the details"/>
    <ion-content :fullscreen="true">
      <div class="apply-for-loan loan-application">
      <ion-item>
          <div class="input-group">
            <div class="label">Amount</div>
            <div class="input-value">{{ amount }}</div>
          </div>
          <ion-range min="50000" max="150000" pin step="1000" @ionChange="amountChanged" >
            <ion-label slot="start">50000</ion-label>
            <ion-label slot="end">150000</ion-label>
          </ion-range>
        </ion-item>
        <!-- <ion-item>
          <ion-label position="fixed">Amount</ion-label>
          <ion-input v-model="amount"></ion-input>
        </ion-item> -->
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

import { CashGrowManager } from "@/services/services";

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
    amount: 50000,
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
      const applicationBody = {
          type: this.$route.params.type,
          amount: this.amount,
          tenure: this.tenure,
          interest: this.interest,
          status: 'CREATED',
      };

      try {
          await CashGrowManager.createLoanApplication(applicationBody);
          callToast('success','Loan request created');
          this.$router.push('/tabs/tab2');
      } catch(err) {
          console.error('Error:', err);
          callToast('danger','Error while creating loan request');
      }
    }
  }
})
</script>
<style>
.apply-for-loan {
    padding: 0 20px;
}

</style>