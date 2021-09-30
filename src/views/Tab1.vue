<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <div class="homepage-content">
        <div class="services">
          <h3 class="section-heading">Main Points</h3>
          <div class="blocks">
            <div class="block">
              <div class="block-image">
                <img class="down" :src="gateIcon" />
              </div>
              GATES
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="airlineIcon" />
              </div>
              AIRLINES
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="passofficeIcon" />
              </div>
              Pass Office
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="financeIcon" />
              </div>
              Finance
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="toiletsIcon" />
              </div>
              Toilets
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="loungesIcon" />
              </div>
              Lounges
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="transportIcon" />
              </div>
              Transport
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="otherIcon" />
              </div>
              Other
            </div>
          </div>
        </div>
        <div class="services">
          <h3 class="section-heading">Shops</h3>
          <div class="blocks">
            <div class="block" @click="routeToServices('food')">
              <div class="block-image">
                <img class="down" :src="foodIcon" />
              </div>
              Food
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="healthIcon" />
              </div>
              Health
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="liquorIcon" />
              </div>
              Liquor
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="fashionIcon" />
              </div>
              Fashion
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="bookstoreIcon" />
              </div>
              Book Store
            </div>
            <div class="block">
              <div class="block-image">
                <img class="down" :src="parkingIcon" />
              </div>
              Parking
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import Header from '@/components/Header.vue';

import { Storage } from '@capacitor/storage';

import { formatCurrency } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default  {
  name: 'Tab1',
  components: { 
    IonContent, 
    IonPage,
    Header,
  },
  data: () => ({
    limit : '',
    gateIcon : require('@/assets/boarding-gate.png'),
    airlineIcon:  require('@/assets/airlineIcon.png'),
    bookstoreIcon:  require('@/assets/bookstoreIcon.png'),
    financeIcon:  require('@/assets/financeIcon.png'),
    fashionIcon:  require('@/assets/fashionIcon.png'),
    foodIcon:  require('@/assets/foodIcon.png'),
    healthIcon:  require('@/assets/healthIcon.png'),
    liquorIcon:  require('@/assets/liquorIcon.png'),
    loungesIcon:  require('@/assets/loungesIcon.png'),
    otherIcon:  require('@/assets/otherIcon.png'),
    parkingIcon:  require('@/assets/parkingIcon.png'),
    passofficeIcon:  require('@/assets/passofficeIcon.png'),
    toiletsIcon:  require('@/assets/toiletsIcon.png'),
    transportIcon:  require('@/assets/transportIcon.png'),
  }),
  methods: {
    routeToServices(type: string) {
      console.log('Route to services', type);
      this.$router.push('/services/food');
    }
  },
  async mounted() {
    const item: any= await Storage.get({ key: 'user' });
    const user: { accountID: string; limit: string} = JSON.parse(item.value);
    this.limit = await formatCurrency(user.limit);
  },
}
</script>
<style>
.homepage-content {
  padding:0 20px;
}
.homepage-content.borrower {
  padding:0;
}
.homepage-content .feature-card {
  background: #4A00E0;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  padding: 20px 20px;
}
.homepage-content .feature-card h4 {
  margin: 0 0 5px;
  font-size: 14px;
  line-height: 1.25;
}
.homepage-content .feature-card h1 {
  margin: 0;
  font-size: 26px;
  line-height: 1.25;
}

.homepage-content .trip {
  margin:0 0 30px;
}

.homepage-content .services {
    margin: 0px 0 0px;
}

.services .blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 -20px;
    cursor: pointer;
}

.services .blocks .block {
    width: calc(25% - 20px);
    margin: 0 10px 20px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
}

.services .blocks .block .block-image {
    background: #fe3a00;
    line-height: 40px;
    padding: 10px;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin: 0 auto 5px;
}

.services .blocks .block .block-image img {
    height: 30px;
    width: auto;
    display: inline-block;
    vertical-align: middle;
}
</style>