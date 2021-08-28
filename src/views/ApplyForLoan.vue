<template>
  <ion-page>
    <Header firstText="Apply for Loan" secondText="Select which loan you need.."/>
    <ion-content :fullscreen="true">
      <div class="apply-for-loan">
        <div class="loan" v-for="(loan,index) in loansInfo" :key="index" :style="loan.gradient">
          <a :href="'/loan-application/'+loan.route">
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
        route: 'personal',
        type: 'PERSONAL LOAN',
        amountOnwards: '₹ 5,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #FF035E 0%, #F916C7 100%);'
      },
      {
        route: 'educational',
        type: 'EDUCATIONAL LOAN',
        amountOnwards: '₹ 1,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #005CE7 0%, #24E2FC 100%);'
      },
      {
        route: 'home',
        type: 'HOME LOAN',
        amountOnwards: '₹ 2,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #FF6B00 0%, #FF1694 100%);'
      },
      {
        route:'business',
        type: 'BUSINESS LOAN',
        amountOnwards: '₹ 2,00,000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #B3CF05 0%, #24E2FC 100%);'
      },
      {
        route: 'other',
        type: 'OTHER LOAN',
        amountOnwards: '₹ 5000 onwards',
        interestRate: 'ROI - 12.5%+',
        gradient: 'background: linear-gradient(180deg, #4A00E0 0%, #FF1694 100%);'
      }
    ]
  })
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
    font-family: 'PT Sans',sans-serif;
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