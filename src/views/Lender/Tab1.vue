<template>
  <ion-page>
    <VioletHeader />
    <ion-content :fullscreen="true">
      <div class="homepage-content">
        <div class="home-funds">
          <div class="funds">
            <h4>Funds</h4>
            <h3>₹ 20,00,000</h3>
          </div>
          <div class="lent-earned">
            <div class="lent">
              <h4>Lent</h4>
              <h3>₹ 2,00,000</h3>
            </div>
            <div class="earned">
              <h4>Principal + Interest</h4>
              <h3>₹ 2,50,000</h3>
            </div>
          </div>
        </div>
        <div class="loan-requests">
          <h3 class="section-heading">Loan Requests</h3>
          <div class="loans-list">
            <div class="loan-card" v-for="loan in loans" :key="loan.id">
              <div class="image-rating">
                <img :src="loan.profilePic" />
                <h4>
                  <span class="colored-rating" :style="{'color':getRatingColor(loan.rating),'width': getColorWidth(loan.rating)}">
                    <img :src="getRatingColor(loan.rating)" />
                  </span>
                  <span class="placeholder-rating" :style="{'color':'#bcb7b7'}">
                    <img :src="placeholderRatingIcon" />
                  </span>
                </h4>
              </div>
              <div class="detail">
                <h4>{{ loan.type}}</h4>
                <h2 class="amount"><span class="rupee">&#8377;</span> {{ loan.amount }}</h2>
                <div class="tenure-interest">
                <h3><img :src="require('@/assets/calendar.png')" /> {{ loan.tenure }} months</h3>
                <h3><img :src="require('@/assets/percent.png')" /> {{ loan.interest }} p.a</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <Upcoming />
        <Operations /> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import VioletHeader from '@/components/VioletHeader.vue';

// import Upcoming from '@/views/Home/Upcoming.vue';
// import Operations from '@/views/Home/Operations.vue';

export default defineComponent({
  name: 'Tab1',
  components: { 
    IonContent, 
    IonPage,
    VioletHeader,
    // Upcoming,
    // Operations
  },
  data(){
    return{
      loans: [],
      orangeColor: 'orange',
      coloredRatingIcon: require('@/assets/rating.png'),
      placeholderRatingIcon: require('@/assets/placeholder-rating.png'),
    }
  },
  mounted() {
    this.fetchLoans();
  },
  methods:{
    fetchLoans() {
      fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/loans')
      .then(response => response.json())
      .then(data => {
        this.loans = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
        return '110px';
      } else {
        return 22*rating+1+'px'
      }
    }
  }
});
</script>
<style>
.loan-requests {
  padding:30px 30px;
}
.loan-card {
    background: #F5EFEF;
    padding: 40px 30px;
    border-radius: 10px;
    margin: 30px 0 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}

.loan-card .image-rating {
    width: 145px;
    text-align: center;
    margin-right: 35px;
    padding:10px 0;
    padding-right: 35px;
    border-right: 2px solid #B2B2B2;

}

.image-rating h4 > span {
  display:block;
}

.loan-card .image-rating h4 img {
    position: relative;
    top: -45px;
}

.loan-card .image-rating h4 span.colored-rating {
    width: 80px;
    overflow: hidden;
    z-index: 5;
    position: relative;
}

.loan-card .image-rating span.placeholder-rating {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.loan-card .image-rating h4 {
    position: relative;
    height:20px;
    text-align:left;
    margin:0;
}

.loan-card .image-rating img {
    width: 110px;
    height: 110px;
    border-radius: 100%;
    margin-bottom: 10px;
    max-width: none;
}

.loan-card .detail h4 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
}

.loan-card .detail h3 {
  font-family: 'Roboto',sans-serif;
  color:#000;
  display: flex;
  align-items: center;
}

/* .loan-card .detail span {
  color:#7A7A7A;
} */

.loan-card .detail h2.amount {
  font-size: 40px;
  color:#000;
  font-family: 'Roboto',sans-serif;
}

.loan-card .detail h3 img {
    max-width: 30px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
}

.loan-card .tenure-interest {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.loan-card .tenure-interest > h3 {margin-right: 30px;}

.loan-card .detail {
    width: calc(100% - 180px);
}
.home-funds {
  background:#4A00E0;
}
.home-funds {
    background: #4A00E0;
    padding: 10px 30px 50px;
    margin-top: -1px;
}

.home-funds h4, .home-funds h3 {
    color: #ffffff;
    font-family: 'Roboto',sans-serif;
}

.home-funds h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    opacity: 0.75;
    text-transform: uppercase;
}

.home-funds h3 {
    font-size: 22px;
    margin: 0;
    line-height: 1;
}

.home-funds > div {
    margin-bottom: 20px;
}

.home-funds .funds h3 {
    font-size: 40px;
}

.home-funds .lent-earned {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 30px 0 0;
}
</style>