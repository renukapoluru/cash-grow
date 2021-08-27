<template>
  <ion-page>
    <Header firstText="Personal Loan Application" secondText="Please fill the details"/>
    <ion-content :fullscreen="true">
      <div class="apply-for-loan loan-application">
        <div class="funds-adding-page">
        <div class="input-group amount">
            <label>Amount</label>
            <input type="number" v-model="amount">
        </div>
        <div class="input-group">
            <label>Interest</label>
            <input v-model="interest" type="text">
        </div>
        <div class="select-source">
            <label>Tenure</label>
            <select v-model="tenure">
              <option value="Select Tenure" disabled>Select Tenure</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
              <option value="60">60</option>
            </select>
        </div>
      </div>
    
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
  },
  data: () => ({
    amount: 50000,
    interest: 12,
    tenure: "Select Tenure",
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
          emi: 0,
          paidInstallments: 0
      };
      const loanAmount = this.amount;
      const numberOfMonths = this.tenure;
      const rateOfInterest = this.interest;
      const monthlyInterestRatio = (rateOfInterest/100)/12;				
      const top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
      const bottom = top -1;
      const sp = top / bottom;
      const emi = ((loanAmount * monthlyInterestRatio) * sp);
      applicationBody.emi = emi;
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