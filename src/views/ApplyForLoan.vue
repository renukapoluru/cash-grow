<template>
  <ion-page>
    <Header firstText="Apply for Loan" secondText="Select which loan you need.."/>
    <ion-content :fullscreen="true">
      <div class="apply-for-loan">
        <div class="loan" v-for="(loan,index) in loansInfo" :key="index" :style="loan.gradient">
          <a href="/loan-application">
          <h4>{{loan.type}}</h4>
          <h3>{{loan.amountOnwards}}</h3>
          <h4>{{loan.interestRate}}</h4>
          <img class="next-icon" :src="nextIcon" />
          </a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';

export default  {
  name: 'ApplyForLoan',
  components: { 
    IonContent, 
    IonPage,
    Header
  },
  data: () => ({
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
  })
}
</script>
<style>
.apply-for-loan {
    padding: 0 30px;
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
    padding: 0 30px;
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

</style>