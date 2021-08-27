<template>
  <ion-page>
    <GoBack @click="$router.go(-1)" />
    <Header class="hide-top-padding" firstText="Loan Details" :secondText="'ID: '+loan._id"/>
    <ion-content :fullscreen="true">
      <div class="page-padding loan-details">          
        <div v-if="Object.keys(loan).length" :class="['application current all-text-white',loan.type]">
            <div class="left-col">
              <h5>{{ loan.type }}</h5>
              <h3>₹ {{ currencyFormatter(loan.amount)}}</h3> 
              <h5 class="paid-total">10% paid so far</h5>
              <div class="progressbar">
                <span class="filled" style="width:10%;"></span>
                <span class="full"></span>
              </div>
              <span class="progressbar"></span>
            </div>
            <div class="right-col">
                <img :src="getLoanTypeImage(loan.type)" />
            </div>
        </div>
        <Upcoming />
        <div class="upcoming breakdown">
          <h3 class="section-heading">Breakdown</h3>
          <div class="square-bg">
            <div class="table-format">
              <span>Principal Amount</span>
              <span>{{ loan.amount }}</span>
            </div>
            <div class="table-format">
              <span>Interest</span>
              <span>{{ loan.interest }}% p.a</span>
            </div>
            <div class="table-format">
              <span>Installment</span>
              <span>3,000</span>
            </div>
            <div class="table-format">
              <span>Paid Installment</span>
              <span>1</span>
            </div>
            <div class="table-format">
              <span>Total Installments</span>
              <span>{{ loan.tenure }}</span>
            </div>
          </div>
        </div>
        <div class="upcoming breakdown">
          <h3 class="section-heading">Documents</h3>
          <div class="square-bg">
            <div class="table-format">
              <span>Agreement</span>
              <span><a>DOWNLOAD</a></span>
            </div>
            <div class="table-format">
              <span>Account Statement</span>
              <span><a>DOWNLOAD</a></span>
            </div>
          </div>
        </div>
        <div class="pay-emi">
          <ion-button color="primary" @click="payInstallment()">PAY INSTALLMENT</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';
import GoBack from '@/components/GoBack.vue';

import { Storage } from '@capacitor/storage';

import { uniqueId } from '@/common/utils';
import { formatCurrency } from '@/common/utils';

import { callToast } from '@/common/utils';

import { loanTypeImages } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

import Upcoming from '@/views/Home/Upcoming.vue';

export default  {
  name: 'LoanDetails',
  components: { 
    IonContent, 
    IonPage,
    Header,
    GoBack,
    Upcoming
  },
  data: () => ({
    loan: {}
  }),
  mounted() {
    this.fetchLoanDetails();
  },
  methods: {
    async fetchLoanDetails() {
      const id = this.$route.params.id;
      try {
        const { data } = await CashGrowManager.getLoanApplication(id);
        this.loan = {...data[0]};
      } catch(e) {
        callToast('danger', 'Error while fetching loan application');
      }
    },
    currencyFormatter(amount: any) {
      const formattedCurrency = formatCurrency(amount);
      return formattedCurrency;
    },
    getLoanTypeImage(type: string) {
      if(loanTypeImages[type]) {
        return loanTypeImages[type]
      } else {
        return loanTypeImages['default']
      }
    },
    async payInstallment() {
      const item: any= await Storage.get({ key: 'user' });
      const user: { accountID: string; limit: string} = JSON.parse(item.value);
      console.log('loan details', this.loan);
      try { 
        // const transferData = {
        //   lenderId: loan.applicantId,
        //   borrowerId: loan.user._id,
        //   requestId: uniqueId(),
        //   amount: parseInt(this.amount)
        // }
        // const res = await CashGrowManager.transfer(transferData);
        // if(res.status == 200) {
        //   callToast("success", "Installment paid successfully");
        // }
      } catch(e) {
        console.log('Error fetching account details', e);
        callToast("danger", "Error while paying installment");
      }
    }
  }
}
</script>
<style>
.upcoming.breakdown .square-bg > div span {
    display: inline-block;
    width: 70%;
}

.upcoming.breakdown .square-bg {
    display: block;
    padding-right: 20px;
    /* margin-bottom: 30px; */
}

.upcoming.breakdown .square-bg > div {
    margin-right: 0;
    margin-bottom: 10px;
}

.upcoming.breakdown .square-bg > div > span:nth-child(2n) {
    width: 30%;
    text-align: right;
}

.upcoming.breakdown .square-bg > div:last-child {
    margin-bottom: 0;
}

.pay-emi {
    padding-bottom: 50px;
}

</style>