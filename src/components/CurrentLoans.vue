<template>
    <div v-if="currentLoans.length" class="current-loans">
        <div v-for="(application,index) in currentLoans" :key="index" :class="['application all-text-white',application.type]">
            <div class="left-col">
              <h5>{{ application.type }}</h5>
              <h3>₹ {{ currencyFormatter(application.amount)}}</h3> 
            </div>
            <div class="right-col">
                <img :src="getLoanTypeImage(application.type)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

import { callToast } from '@/common/utils';

import { formatCurrency } from '@/common/utils';

import { loanTypeImages } from '@/common/utils';

import { defineComponent } from 'vue';

import { CashGrowManager } from "@/services/services";

export default  defineComponent({
  name: 'CurrentLoans',
  components: { 
  },
  data: () => ({
    currentLoans: [],
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
  mounted() {
      this.getLoans();
  },
  methods: {
    async getLoans() {
      try {
          const { data } = await CashGrowManager.getApplicationsByStatus("APPROVED");
          this.currentLoans = [...data];
      } catch(err) {
          console.error('Error:', err);
          callToast('danger','Error while fetching current loans');
      }
    }
  }
})
</script>
<style>

</style>