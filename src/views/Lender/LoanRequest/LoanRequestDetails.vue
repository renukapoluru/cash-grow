<template>
  <ion-page>
    <GoBack @click="sendToHome()" />
    <Header class="hide-top-padding" firstText="Application Details" secondText="A brief overview of the loan application"/>
    <ion-content :fullscreen="true">
      <div class="page-padding loan-request-details">
        <div v-if="currentStep == 1">
          <div v-if="loan.user" class="loan-card about-borrower">
            <div class="card-top">
              <div class="profile-pic">
                <img v-if="loan.user" :src="loan.user.profilePicURL" />
              </div>
              <div class="profile-details image-rating">
                <h4 v-if="loan.user" :style="{'color':getRatingColor(loan.user.rating),'width': getColorWidth(loan.user.rating)}">
                  <img :src="getRatingColor(loan.user.rating)" />
                </h4>
                <h3 class="name">{{ loan.user.firstName }} {{loan.user.lastName }}</h3>
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
        </div>
        <div v-if="currentStep == 2">
          <div class="pdf-format">
            <h4>Loan Agreement</h4>
            <p>This Loan Agreement is executed on this 0Xth day of December, 20XX;</p>
                                                                                                                                                                    Between
            <p>Mr QWERTY (PAN No. ABCDESFG), s/o ABCD , Address: #12334, hereinafter referred to 
              as the Lender which expression unless repugnant to the context shall mean and includes 
              its legal representatives, assignee and administrator;</p>                                                                                                                                                                                                      
                                                                                                                                                                      And
            <p>Mr TREWQ (PAN No. BXCCCCCCC) s/o XYZX r/o9870,hereinafter referred to as theBorrower 
              which expression unless repugnant to the context shall mean and includes its legal 
              representatives, assignee and administrator;</p>

            <p>Whereas at the request of the Borrower, the Lender has agreed to grant a loan 
              not exceeding a sum of INR XXXX Thousand Only (INR XXXX) to the Borrower for a 
              period of XX (XX) Months on terms and conditions hereinafter contained.</p>

            <p>1. The Lender agrees to lend to the Borrower a sum not exceeding INR XXXX Thousand 
              Only (INR XXXX)to the Borrower for a period of XX (XX) months, the borrower 
              accepts the loan and agrees to repay the amount in accordance with the terms and 
              conditions set out in this Agreement.</p>

            <p>2. Both parties represent covenants and warrants to each other that:</p>
            <p>(a)     that he / she has read all the terms and conditions, privacy policy, and 
              other material available at the website of CashGrow  Technologies India Private
              Limited.</p>
            <p>(b)     that they unconditionally agreed to abide by the terms and conditions, privacy 
              policy and other binding material contained on the website of CashGrow 
              Technologies India Private Limited.</p>
            <p>(c)     that the information and financial details submitted by him / her on the website 
              of CashGrow Technologies India Private Limited are true and correct.</p>
            <p>(d)     that they understand that CashGrow Technologies India Private Limited only 
              facilitate meeting of lenders and borrowers and is not engaged or is responsible for 
              either lending or ensuring that the borrower shall repay the borrowed amount on time.</p>
            <p>(e)     CashGrow Technologies India Private Limited is in no manner responsible 
              towards either loss of money or breach of privacy or leakage of any confidential 
              information.</p>
            <p>(f)      that they have not provided any information which is incorrect or materially 
              impairs the decision of the CashGrow Technologies India Private Limited to either 
              register him / her or permits to lend him / her through the website of CashGrow 
              Technologies India Private Limited.</p>

            <p>3.The Borrower agreed to pay interest and additional interest payable on the 
              Loan as follows:</p>
            <p>(a) The Loan will carry interest at such rate as may be agreed in terms of 
              Schedule I to this Loan Agreement.</p>
            <p>(b) The Borrower shall pay the interest along with the principle and penal 
              interest of penalties if any on 10th of every month starting from the month 
              which follows the month in which the Loan is disbursed to the Borrower by 
              the Lender. Such repayments of Loan shall continue until the date of complete 
              repayment of loan.</p> 
            <p>(c) Any default by the Borrower in payment for dues towards interest or 
              principle would entail an additional interest charge of 24% on the entire Loan, 
              liveable from the date of the default without prejudice to Lenders other rights 
              available as per this agreement and on default / failure of the Borrower to pay 
              the same.</p>
            <p>(d) Provided also that the obligation to pay additional interest shall not 
              entitle the Borrower to set up a defence that no event of default as mentioned 
              hereunder has occurred.</p>
            </div>
        </div>
        <div class="step-3" v-if="currentStep == 3">
            <img src="https://i.im.ge/2021/08/27/QoHz6m.png" />
            <h3>Sit back and Relax!</h3>
            <p>We will let you know once the borrower signs the agreement. In case, the borrower doesn't sign within 24 hours, the amount will get unblocked from your account.</p>
        </div>
        <div v-if="currentStep <=2" class="disburse-loan">
          <ion-button color="primary" @click="nextStep()">{{ stepsButtonText[currentStep-1] }}</ion-button>
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
import { callToast } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default  {
  name: 'LoanRequestDetails',
  components: { 
    IonContent, 
    IonPage,
    Header,
    GoBack
  },
  data: () => ({
    loan: {},
    currentStep: 1,
    stepsButtonText: ['Proceed to Agreement','Approve']
  }),
  mounted() {
    this.fetchLoanDetails();
  },
  methods: {
    async fetchLoanDetails() {
      console.log('fetch loan details called');
      const id = this.$route.params.id;
      try {
        const { data } = await CashGrowManager.getLoanApplication(id);
        this.loan = {...data[0]};
      } catch(e) {
        callToast('danger', 'Error while fetching loan application');
      }
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
    nextStep() {
      if(this.currentStep == 2) {
        this.changeLoanApplicationStatus();
      }
      this.currentStep = this.currentStep+1;
    },
    async changeLoanApplicationStatus() {
        const storageUser: any= await Storage.get({ key: 'user' });
        const user: { accountID: string } = JSON.parse(storageUser.value);
        try {
          await CashGrowManager.changeLoanApplicationStatus(this.loan._id,"APPROVED",user.accountID);
          try {
            const transferData = {
              debitId: user.accountID,
              creditId: this.loan.user.accountID,
              requestId: uniqueId(),
              amount: parseInt(this.loan.amount)
            };
            console.log('body', transferData);
            await CashGrowManager.transfer(transferData);
            callToast("success", "Amount transferred successfully");
          } catch(e) {
            callToast("danger","Error while transfering funds to borrower.")
          }
        } catch(e) {
          callToast("danger","Error while saving the application details.")
        }
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

.pdf-format {
    padding: 20px;
    font-size: 10px;
    border: 1px solid #010101;
    height: 65vh;
    overflow: scroll;
}

.pdf-format h4 {
    text-align: center;
    font-size: 15px;
}

.loan-request-details .step-3 {
    text-align: center;
}

.loan-request-details .step-3 h3 {
    margin-top: 20px;
}

.loan-request-details .step-3 p {
    font-size: 16px;
}

</style>