<template>
  <ion-page>
    <Header firstText="Personal Loan Application" secondText="Please fill the details"/>
    <ion-content :fullscreen="true">
      <div class="apply-for-loan loan-application">
        <ion-item>
          {{ amount }}
          <ion-range @ionChange="changeAmount" v-model="amount" min="50000" max="1500000" color="secondary">
            <ion-label slot="start">50000</ion-label>
            <ion-label slot="end">1500000</ion-label>
          </ion-range>
        </ion-item>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';

export default  {
  name: 'LoanApplication',
  components: { 
    IonContent, 
    IonPage,
    Header
  },
  data: () => ({
    amount: 50000,
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
    changeAmount(amount: number) {
      console.log('Amount changed', amount);
    }
  }
}
</script>
<style>
.apply-for-loan {
    padding: 0 30px;
}

</style>