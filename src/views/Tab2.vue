<template>
  <ion-page>
    <Header firstText="Overview" :secondText="this.applications.length+ ' active applications &amp; '+this.loans.length + ' loans'"/>
    <ion-content :fullscreen="true">
      <div class="default-tab-padding">
        <h3>Loan Applications</h3>
        <div class="applications">
          <div  v-for="(application,index) in applications" :key="index" :class="['application all-text-white',application.type]">
            <div class="left-col">
              <h5>{{ application.type }}</h5>
              <h3>₹ {{ currencyFormatter(application.amount)}}</h3> 
            </div>
            <div class="right-col">
                <img :src="getLoanTypeImage(application.type)" />
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header.vue';

import { Storage } from '@capacitor/storage';

import { formatCurrency } from '@/common/utils';

import { loanTypeImages } from '@/common/utils';

export default  {
  name: 'Tab2',
  components: { IonContent, IonPage, Header },
  data: () => ({
    applications : [],
    loans: []
  }),
  async mounted() {
    const item: any= await Storage.get({ key: 'user' });
    console.log('User',JSON.parse(item.value));
    const user: { id: string} = JSON.parse(item.value);
    fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/users/'+user.id).then(response => response.json())
    .then(userDetails => {
        console.log('User Details are', userDetails);
        this.applications = [...userDetails.applications];
        this.loans = [...userDetails.loans];
    }).catch((error) => {
        console.error('Error:', error);
    });
  },
  methods: {
    getSecondaryText() {
      return `${this.applications.length} Applications &amp; ${this.loans.length} Loans`
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
    }
  }
}
</script>